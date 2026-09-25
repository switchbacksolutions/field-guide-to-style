# Style inspiration

A static style catalogue for people and agents. Open `index.html` directly. No server is needed.

## Source and output

- The JSON files in `data/` and the HTML fragments in `content/` are the source of truth. Edit them, then run `node tools/build.mjs`.
- Every HTML page, `board-data.js`, `llms.txt`, `api/`, and `implementations/` are generated. Do not edit them by hand. Commit them with the data change.
- Run `node tools/build.mjs --check` before you finish. It fails when generated files are out of date. When several agents work in parallel, only the lead agent builds and commits; the others run `--validate`.
- The build uses only Node built-ins. Do not add packages to it. The measurement tools in `tools/` may use a browser or Python with Pillow.

## Records

- Follow `data/schema/reference.schema.json` and `data/schema/style.schema.json`. Start from `templates/reference.json` and `templates/style.json`.
- A reference may belong to several styles. List every style in its `styles` array. Do not duplicate the record.
- Set `basis` to `agent` when you place a reference in a style. Only a person sets `curator`.
- Link inside rich text with `ref:<id>`, `style:<id>`, and `page:<name>`. The build rejects unknown targets.
- Keep local images in `assets/references/`. Record the rights tier and license. Read `rights.html` before you store a third-party image.
- Separate observed evidence from interpretation. Mark inaccessible sources as pending. Never infer a source's appearance from an error page.
- Record only external identifiers (Wikidata, Getty AAT, museum IDs) that you checked against the source.

## Presentation

- Keep all content and navigation in semantic HTML that reads without CSS or JavaScript.
- Put hub presentation in `assets/hub.css`. Put a style's specimen presentation in `data/specimens/<id>.css`. Do not use inline styles, style elements, or inline event handlers.

## Procedures

Follow these step-by-step procedures. They are plain Markdown, so any agent can read them.

- `.claude/skills/style-prospect/SKILL.md`: vet a new style, then write its record, tokens, specimen, and fingerprint.
- `.claude/skills/style-references/SKILL.md`: collect references for one style from open sources.
- `.claude/skills/style-capture/SKILL.md`: capture websites, write their records, and calibrate fingerprints.

## Tools

- Use `node tools/capture.mjs` to capture and measure websites. Use Claude in Chrome for web research and interactive browser checks. Chrome tool results are cut at about 1,000 characters, so save measurements through `tools/serve.py` instead of reading them back.
- After you change a fingerprint, a specimen, or the extractor, re-measure the specimens and run `node tools/lint-style.mjs --matrix`.
- Keep new dependencies and build tooling out unless a concrete need arises.
