// Fails when the pinned Impeccable detector reports a specimen finding that the style's detectorExceptions do not explain.
// It downloads a binary, so it stays out of build.mjs. The binary runs only after a sha256 check, with telemetry off and a throwaway home.
// Usage: node tools/impeccable.mjs [style-id ...] [--all] [--json]. With no ids it checks the styles that have detectorExceptions.

import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { chmodSync, copyFileSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { applyExceptions } from "./lib/detector.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const ENGINE = {
  version: "0.1.11",
  sha256: {
    "linux-x64": "0221607e1f535af937ea267c347b1f90233b85dc2563cbd2eeefdf42e0e5c594",
    "linux-arm64": "a3036c5c2da08ac6a14fa4886e96a8b1651beab332af75cbe328092528d6e40a",
    "darwin-x64": "dfd1b6a5b719273bf703642e8ce60152a696cd1a76870ddab3cefa57bcce86d0",
    "darwin-arm64": "7427918d6e75507401a1b7b691eefe58a7c01a2fc63b712016ffc5a0ac1c05e6"
  }
};
const SPECIMEN_FILES = ["index.html", "tokens.css", "specimen.css", "DESIGN.md"];

const sha256 = (path) => createHash("sha256").update(readFileSync(path)).digest("hex");

// A per-user 0700 cache, so no other account can swap the binary between the check and the run.
export async function engine() {
  const platform = `${process.platform}-${process.arch}`;
  const expected = ENGINE.sha256[platform];
  if (!expected) throw new Error(`No pinned Impeccable engine for ${platform}.`);
  const dir = join(process.env.XDG_CACHE_HOME || join(homedir(), ".cache"), "field-guide-to-style", "impeccable", ENGINE.version);
  const bin = join(dir, "impeccable");
  mkdirSync(dir, { recursive: true, mode: 0o700 });
  chmodSync(dir, 0o700);
  if (existsSync(bin) && sha256(bin) === expected) return bin;
  const url = `https://github.com/pbakaus/impeccable/releases/download/engine-v${ENGINE.version}/impeccable-${platform}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Download failed: ${url} (${response.status}).`);
  const part = `${bin}.part.${process.pid}`;
  writeFileSync(part, Buffer.from(await response.arrayBuffer()));
  const actual = sha256(part);
  if (actual !== expected) {
    rmSync(part, { force: true });
    throw new Error(`Checksum mismatch for ${url}: expected ${expected}, got ${actual}.`);
  }
  chmodSync(part, 0o755);
  renameSync(part, bin);
  return bin;
}

// bin must come from engine(), which verified it.
export function detect(bin, dir) {
  const home = mkdtempSync(join(tmpdir(), "impeccable-home-"));
  try {
    const env = {
      PATH: "/usr/bin:/bin",
      HOME: home,
      IMPECCABLE_HOME: join(home, ".impeccable"),
      XDG_CONFIG_HOME: join(home, ".config"),
      XDG_CACHE_HOME: join(home, ".cache"),
      XDG_DATA_HOME: join(home, ".local/share"),
      DO_NOT_TRACK: "1",
      IMPECCABLE_NO_TELEMETRY: "1"
    };
    const run = spawnSync(bin, ["detect", "--json", "index.html"], { cwd: dir, env, encoding: "utf8", timeout: 60000 });
    // Exit 2 means the scan finished with findings.
    if (run.status !== 0 && run.status !== 2) throw new Error(`Detector failed in ${dir} (exit ${run.status}, signal ${run.signal}): ${run.stderr || run.error}`);
    const findings = JSON.parse(run.stdout);
    if (!Array.isArray(findings)) throw new Error(`Detector output in ${dir} is not a list of findings.`);
    return findings;
  } finally {
    rmSync(home, { recursive: true, force: true });
  }
}

// A copy, so no repo file or .impeccable config reaches the detector.
export function stageSpecimen(id) {
  const dir = mkdtempSync(join(tmpdir(), `impeccable-${id}-`));
  for (const file of SPECIMEN_FILES) copyFileSync(join(ROOT, "implementations", id, file), join(dir, file));
  return dir;
}

export const loadStyle = (id) => JSON.parse(readFileSync(join(ROOT, "data/styles", `${id}.json`), "utf8"));

async function main() {
  const args = process.argv.slice(2);
  const all = readdirSync(join(ROOT, "data/styles")).map((f) => f.replace(/\.json$/, "")).filter((id) => existsSync(join(ROOT, "implementations", id, "index.html")));
  const named = args.filter((a) => !a.startsWith("--"));
  const ids = named.length ? named : args.includes("--all") ? all : all.filter((id) => loadStyle(id).detectorExceptions);
  const bin = await engine();
  const report = [];
  for (const id of ids.sort()) {
    const dir = stageSpecimen(id);
    try {
      report.push({ id, ...applyExceptions(detect(bin, dir), loadStyle(id).detectorExceptions, id) });
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }
  const failed = report.filter((r) => r.unexplained.length || r.unused.length);
  if (args.includes("--json")) console.log(JSON.stringify({ engine: ENGINE.version, report }, null, 2));
  else {
    console.log(`Impeccable engine ${ENGINE.version}, sha256 verified.`);
    for (const r of report) {
      console.log(`${r.id}: ${r.unexplained.length} unexplained, ${r.explained.length} explained, ${r.unused.length} unused exception(s).`);
      for (const f of r.unexplained) console.log(`  FAIL ${f.antipattern}: ${f.snippet}`);
      for (const e of r.unused) console.log(`  UNUSED ${e.rule} /${e.match}/: no finding matched. Remove the exception.`);
    }
    console.log(failed.length ? `${failed.length} style(s) have unexplained findings or unused exceptions.` : "Every finding is explained by a style exception.");
  }
  process.exitCode = failed.length ? 1 : 0;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main().catch((error) => {
  console.error(error.message);
  process.exitCode = 2;
});
