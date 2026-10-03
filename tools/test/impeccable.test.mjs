// Tests that detectorExceptions keep each pilot specimen clean and still let real defects through.
// Runs the real pinned detector, so the first run needs network access to download it.

import { test, before } from "node:test";
import assert from "node:assert/strict";
import { appendFileSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { applyExceptions } from "../lib/detector.mjs";
import { detect, engine, loadStyle, stageSpecimen } from "../impeccable.mjs";

const CHECKED = readdirSync(new URL("../../data/styles", import.meta.url)).map((f) => f.replace(/\.json$/, "")).filter((id) => loadStyle(id).detectorExceptions);
let bin;
before(async () => {
  bin = await engine();
});

// Detects a staged copy of a specimen with extra CSS appended, and returns what the exceptions leave.
function check(id, css = "", design = (text) => text) {
  const dir = stageSpecimen(id);
  try {
    appendFileSync(join(dir, "specimen.css"), `\n${css}\n`);
    const designPath = join(dir, "DESIGN.md");
    writeFileSync(designPath, design(readFileSync(designPath, "utf8")));
    return applyExceptions(detect(bin, dir), loadStyle(id).detectorExceptions);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}
const rules = (result) => result.unexplained.map((f) => f.antipattern).sort();

test("the pilot styles are detector-checked", () => {
  assert.deepEqual(CHECKED.sort(), ["glassmorphism", "memphis", "minimalist-machine", "neo-brutalism", "vaporwave"]);
});

for (const id of ["glassmorphism", "memphis", "minimalist-machine", "neo-brutalism", "vaporwave"]) {
  test(`${id}: every finding is explained and every exception is used`, () => {
    const result = check(id);
    assert.deepEqual(result.unexplained, []);
    assert.deepEqual(result.unused, []);
    assert.ok(result.explained.length > 0);
  });
}

// Each case is a real defect. Most reuse a rule that the style excepts, with a value outside the exception.
const DEFECTS = [
  ["neo-brutalism", '.lede { font-family: "Comic Sans MS", cursive; }', "design-system-font"],
  ["neo-brutalism", "body { background: #f7efd9; }", "cream-palette"],
  ["neo-brutalism", ".card p { line-height: 1.05; }", "tight-leading"],
  ["memphis", ".card { border-radius: 37px; }", "design-system-radius"],
  ["memphis", ".lede { text-transform: uppercase; }", "all-caps-body"],
  ["vaporwave", ".lede { color: #d0d0d0; }", "low-contrast"],
  ["vaporwave", "h2 { letter-spacing: 0.2em; }", "wide-tracking"],
  ["glassmorphism", ".card { box-shadow: 0 0 30px #ff00ff; }", "dark-glow"],
  ["glassmorphism", "h2 { background: linear-gradient(90deg, #ff0080, #7928ca); -webkit-background-clip: text; background-clip: text; color: transparent; }", "gradient-text"],
  ["minimalist-machine", ".card p { line-height: 1.05; }", "tight-leading"],
  ["minimalist-machine", ".card { box-shadow: inset 4px 0 0 #ff3b30; }", "side-tab"],
  ["minimalist-machine", ".lede { color: #c9cdc1; }", "low-contrast"]
];
for (const [id, css, rule] of DEFECTS) {
  test(`${id}: a real ${rule} defect is still reported`, () => {
    assert.ok(rules(check(id, css)).includes(rule), `expected ${rule} for ${css}`);
  });
}

test("the old first-family DESIGN.md typography fails again", () => {
  const firstFamily = (text) => text.replace(/fontFamily: "([^",]+)[^"]*"/g, 'fontFamily: "$1"');
  assert.ok(rules(check("neo-brutalism", "", firstFamily)).includes("design-system-font"));
});

test("an exception covers only snippets that match it", () => {
  const exceptions = [{ rule: "tight-leading", match: "1\\.20x", kind: "trait", reason: "r" }];
  const findings = [
    { antipattern: "tight-leading", snippet: "line-height 1.20x (need >=1.3)" },
    { antipattern: "tight-leading", snippet: "line-height 1.05x (need >=1.3)" },
    { antipattern: "low-contrast", snippet: "line-height 1.20x" }
  ];
  const result = applyExceptions(findings, exceptions);
  assert.equal(result.explained.length, 1);
  assert.deepEqual(result.unexplained.map((f) => f.snippet), ["line-height 1.05x (need >=1.3)", "line-height 1.20x"]);
});

test("an exception that matches nothing is reported as unused", () => {
  const stale = { rule: "dark-glow", match: "#123456", kind: "trait", reason: "r" };
  assert.deepEqual(applyExceptions([], [stale]).unused, [stale]);
  const result = applyExceptions(check("glassmorphism").explained, [...loadStyle("glassmorphism").detectorExceptions, stale]);
  assert.deepEqual(result.unused, [stale]);
});
