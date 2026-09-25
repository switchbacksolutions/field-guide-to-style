// Checks a measurement (from extract-traits.js or image-traits.py) against a style's fingerprint ranges.
// Usage: node tools/lint-style.mjs <style-id> <measurement.json> [--json]. Exits 1 when a measured metric is out of range.
// --matrix checks every style's specimen measurement against every fingerprint: a useful fingerprint passes only its own specimen.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const check = (style, measurement) => {
  const read = (path) => path.split(".").reduce((node, key) => (node == null ? undefined : node[key]), measurement);
  return (style.fingerprint ?? []).map(({ metric, min, max, note }) => {
    const value = read(metric);
    const status = typeof value !== "number" ? "not measured" : (min !== undefined && value < min) || (max !== undefined && value > max) ? "fail" : "pass";
    return { metric, value: value ?? null, min: min ?? null, max: max ?? null, status, note };
  });
};

if (process.argv.includes("--matrix")) {
  const styles = readdirSync(join(ROOT, "data/styles")).map((f) => JSON.parse(readFileSync(join(ROOT, "data/styles", f), "utf8"))).filter((s) => s.fingerprint?.length).sort((a, b) => a.order - b.order);
  const measured = styles.filter((s) => existsSync(join(ROOT, "data/measurements", `${s.id}.json`)));
  let confusions = 0;
  console.log(`${"specimen \\ fingerprint".padEnd(34)}${styles.map((s) => s.id.slice(0, 9).padEnd(11)).join("")}`);
  for (const specimen of measured) {
    const measurement = JSON.parse(readFileSync(join(ROOT, "data/measurements", `${specimen.id}.json`), "utf8"));
    const cells = styles.map((style) => {
      const results = check(style, measurement);
      const ok = results.every((r) => r.status !== "fail");
      if (ok !== (style.id === specimen.id)) confusions++;
      return `${results.filter((r) => r.status === "pass").length}/${results.length}${ok ? " ok" : ""}`.padEnd(11);
    });
    console.log(`${specimen.id.padEnd(34)}${cells.join("")}`);
  }
  console.log(confusions ? `${confusions} confusion(s): a specimen failed its own fingerprint or passed another.` : "Each specimen passes only its own fingerprint.");
  process.exit(confusions ? 1 : 0);
}

const [styleId, measurementPath] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!styleId || !measurementPath) {
  console.error("Usage: node tools/lint-style.mjs <style-id> <measurement.json> [--json]");
  process.exit(2);
}

const style = JSON.parse(readFileSync(join(ROOT, "data/styles", `${styleId}.json`), "utf8"));
const measurement = JSON.parse(readFileSync(measurementPath, "utf8"));
const results = check(style, measurement);
const failed = results.filter((r) => r.status === "fail");

if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ style: styleId, source: measurement.url ?? measurement.file ?? measurementPath, pass: failed.length === 0, results }, null, 2));
} else {
  console.log(`${style.title} fingerprint check: ${measurement.url ?? measurement.file ?? measurementPath}`);
  for (const r of results) {
    const range = [r.min !== null ? `>= ${r.min}` : null, r.max !== null ? `<= ${r.max}` : null].filter(Boolean).join(" and ");
    console.log(`  ${r.status.toUpperCase().padEnd(12)} ${r.metric.padEnd(28)} ${String(r.value).padEnd(8)} expected ${range}. ${r.status === "fail" ? r.note : ""}`.trimEnd());
  }
  console.log(failed.length ? `${failed.length} of ${results.length} metrics out of range.` : `All measured metrics in range.`);
}
process.exit(failed.length ? 1 : 0);
