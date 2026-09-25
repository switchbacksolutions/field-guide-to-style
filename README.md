# A Field Guide to Style

A catalogue of visual styles that cross-references websites with print, product, and graphic design. People browse it as a mood board. Agents read it as structured data, with tokens and framework files for each style. A Switchback product.

Open [index.html](index.html) in a browser. Browsing needs no build, install, server, or network connection.

## Edit

1. Change JSON in `data/` or HTML fragments in `content/`.
2. Run `node tools/build.mjs` (Node 20 or later, no packages).
3. Commit the data and the generated files together.

`node tools/build.mjs --check` fails when the generated files do not match the data.

## Procedures

The skills in `.claude/skills/` describe how to prospect a style (`style-prospect`), collect references (`style-references`), and capture websites (`style-capture`).

## Structure

- `data/styles/`, `data/references/`: one record per style and per reference. Schemas are in `data/schema/`.
- `data/tokens/<style>.tokens.json`: authored design tokens for a style.
- `data/specimens/<style>.css`: the style applied to the shared specimen content in `content/specimen.html`.
- `data/measurements/`: machine-extracted traits of references and specimens.
- `content/`: prose pages (collecting, rights) and the specimen content.
- `templates/`: starting points for new records.
- `tools/build.mjs`: the generator.
- `tools/capture.mjs`: captures websites with headless Chrome (screenshot plus measurement). `--viewport=390x844` checks phone width, and `--specimen` saves a specimen screenshot.
- `tools/fetch.py`: fetches research URLs with a User-Agent. `tools/contact-sheet.py`: tiles captures for review.
- `tools/extract-traits.js`, `tools/image-traits.py`, `tools/serve.py`, and `tools/lint-style.mjs`: measure pages and images, and check them against style fingerprints. `node tools/lint-style.mjs --matrix` checks that each specimen passes only its own style. `--table` compares metrics across specimens. `--captures` checks real website captures against every style.
- Generated: the root HTML pages, `references/*.html`, `board-data.js`, `llms.txt`, `api/`, and `implementations/<style>/` (DTCG tokens, CSS variables, Tailwind v4, shadcn/ui, DESIGN.md, specimen page).
- `assets/hub.css`: all hub presentation. `assets/references/`: local images.

The [collecting guide](collecting.html) explains how to add records. The [rights page](rights.html) explains how third-party material is handled. Source images keep their owners' rights. No redistribution license is assumed.
