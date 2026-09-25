// Copies the generated site into dist/ for `wrangler deploy`.
// Allowlist, so tools, data sources, and agent logs never ship.
import { cpSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SHIP = ["llms.txt", "board-data.js", "api", "assets", "implementations", "references", "data", "templates", ...readdirSync(ROOT).filter((f) => f.endsWith(".html"))];

rmSync(DIST, { recursive: true, force: true });
for (const entry of SHIP) cpSync(join(ROOT, entry), join(DIST, entry), { recursive: true, filter: (src) => !src.endsWith(".DS_Store") });
console.log(`Staged ${SHIP.length} entries in dist/.`);
