// Captures websites with headless Chrome: a viewport screenshot and an extract-traits.js measurement per URL.
// Usage: node tools/capture.mjs [--no-image] [--force] [--specimen] [--out=dir] [--viewport=WxH] [--wait=ms] <id>=<url> ...
// --specimen saves the screenshot to assets/specimens/<id>.jpg instead of assets/references/. --out writes both files to dir and nothing
// into the catalogue, for checking a project that is not a reference. Uses a fresh temporary profile, no cookies,
// and Chrome's own user agent. Set CHROME_PATH if Chrome is not in the default location.

import { execFileSync, spawn } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
// Pixel colors from the screenshot catch what computed styles miss: images, canvas, and pre-CSS3 sliced graphics.
const pixelTraits = (file) => {
  try {
    return JSON.parse(execFileSync("python3", [join(ROOT, "tools/image-traits.py"), file]).toString()).color;
  } catch {
    return null;
  }
};
const args = process.argv.slice(2);
const [vw, vh] = (args.find((a) => a.startsWith("--viewport="))?.slice(11) ?? "1440x900").split("x").map(Number);
const VIEWPORT = { width: vw, height: vh };
const specimen = args.includes("--specimen");
const saveImage = !args.includes("--no-image");
const force = args.includes("--force");
const out = args.find((a) => a.startsWith("--out="))?.slice(6);
const settle = Number(args.find((a) => a.startsWith("--wait="))?.slice(7) ?? 2500);
const jobs = args.filter((a) => !a.startsWith("--")).map((a) => {
  const at = a.indexOf("=");
  return { id: a.slice(0, at), url: a.slice(at + 1) };
});
if (!jobs.length || jobs.some((j) => !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(j.id) || !/^https?:\/\//.test(j.url))) {
  console.error("Usage: node tools/capture.mjs [--no-image] [--force] [--specimen] [--out=dir] [--viewport=WxH] [--wait=ms] <id>=<url> ...");
  process.exit(2);
}

const chromePath =
  process.env.CHROME_PATH ??
  ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/usr/bin/google-chrome", "/usr/bin/chromium"].find(existsSync);
if (!chromePath) throw new Error("Chrome not found. Set CHROME_PATH.");

const profile = mkdtempSync(join(tmpdir(), "style-capture-"));
const chrome = spawn(chromePath, ["--headless=new", "--remote-debugging-port=0", `--user-data-dir=${profile}`, "--no-first-run", "--no-default-browser-check", "--hide-scrollbars", "--mute-audio", "about:blank"], { stdio: ["ignore", "ignore", "pipe"] });
const wsUrl = await new Promise((resolve, reject) => {
  let log = "";
  chrome.stderr.on("data", (d) => {
    log += d;
    const m = /DevTools listening on (ws:\/\/\S+)/.exec(log);
    if (m) resolve(m[1]);
  });
  chrome.on("exit", () => reject(new Error(`Chrome exited:\n${log}`)));
});

const ws = new WebSocket(wsUrl);
await new Promise((r) => ws.addEventListener("open", r, { once: true }));
let nextId = 0;
const pending = new Map();
const listeners = new Set();
ws.addEventListener("message", ({ data }) => {
  const msg = JSON.parse(data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
  } else for (const fn of listeners) fn(msg);
});
const send = (method, params = {}, sessionId) =>
  new Promise((resolve, reject) => {
    const id = ++nextId;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params, sessionId }));
  });
const waitFor = (method, sessionId, ms) =>
  new Promise((resolve) => {
    const timer = setTimeout(() => (listeners.delete(fn), resolve(false)), ms);
    const fn = (msg) => msg.method === method && msg.sessionId === sessionId && (clearTimeout(timer), listeners.delete(fn), resolve(true));
    listeners.add(fn);
  });

const extractor = readFileSync(join(ROOT, "tools/extract-traits.js"), "utf8");
let failures = 0;
for (const job of jobs) {
  const { targetId } = await send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
  try {
    await send("Page.enable", {}, sessionId);
    // Some old pages replace the global JSON object (tapbots.com 2011), so keep the built-in serializer.
    await send("Page.addScriptToEvaluateOnNewDocument", { source: "window.__captureStringify = JSON.stringify;" }, sessionId);
    await send("Emulation.setDeviceMetricsOverride", { ...VIEWPORT, deviceScaleFactor: 1, mobile: false }, sessionId);
    const loaded = waitFor("Page.loadEventFired", sessionId, 45000);
    const nav = await send("Page.navigate", { url: job.url }, sessionId);
    if (nav.errorText) throw new Error(nav.errorText);
    if (!(await loaded)) console.warn(`${job.id}: load event timed out, measuring anyway`);
    await new Promise((r) => setTimeout(r, settle));
    const { result, exceptionDetails } = await send("Runtime.evaluate", { expression: `${extractor}\nextractTraits().then((r) => (window.__captureStringify ?? JSON.stringify)(r))`, awaitPromise: true, returnByValue: true, timeout: 60000 }, sessionId);
    if (exceptionDetails) throw new Error(exceptionDetails.exception?.description ?? exceptionDetails.text);
    const measurement = JSON.parse(result.value);
    await send("Runtime.evaluate", { expression: "(document.scrollingElement ?? document.documentElement).scrollTop = 0" }, sessionId);
    await new Promise((r) => setTimeout(r, 300));
    const shot = Buffer.from((await send("Page.captureScreenshot", { format: "jpeg", quality: 80 }, sessionId)).data, "base64");
    const overflow = (await send("Runtime.evaluate", { expression: "document.documentElement.scrollWidth - innerWidth", returnByValue: true }, sessionId)).result.value;
    if (overflow > 0) console.warn(`${job.id}: page is ${overflow}px wider than the ${VIEWPORT.width}px viewport (horizontal scroll)`);
    if (out) {
      mkdirSync(out, { recursive: true });
      const shotPath = join(out, `${job.id}.jpg`);
      writeFileSync(shotPath, shot);
      measurement.pixels = pixelTraits(shotPath);
      writeFileSync(join(out, `${job.id}.json`), `${JSON.stringify(measurement, null, 2)}\n`);
      console.log(`${job.id}: ${measurement.title || "(no title)"} | ${measurement.url} -> ${out}`);
      continue;
    }
    const imagePath = join(ROOT, specimen ? "assets/specimens" : "assets/references", `${job.id}.jpg`);
    const keep = saveImage && (!existsSync(imagePath) || force || specimen);
    // An image and its measurement must come from the same capture, so neither is replaced alone.
    if (saveImage && !keep) {
      console.warn(`${job.id}: ${imagePath} exists; pass --force to replace the image and the measurement`);
      continue;
    }
    const shotPath = keep ? imagePath : join(profile, `${job.id}.jpg`);
    writeFileSync(shotPath, shot);
    measurement.pixels = pixelTraits(shotPath);
    // Narrow-viewport runs are layout checks; only the standard viewport writes the measurement of record.
    if (VIEWPORT.width === 1440 && VIEWPORT.height === 900) writeFileSync(join(ROOT, "data/measurements", `${job.id}.json`), `${JSON.stringify(measurement, null, 2)}\n`);
    console.log(`${job.id}: ${measurement.title || "(no title)"} | ${measurement.url}`);
  } catch (error) {
    failures++;
    console.error(`${job.id}: FAILED ${error.message}`);
  } finally {
    await send("Target.closeTarget", { targetId }).catch(() => {});
  }
}
ws.close();
chrome.kill();
await new Promise((r) => chrome.once("exit", r));
rmSync(profile, { recursive: true, force: true });
process.exit(failures ? 1 : 0);
