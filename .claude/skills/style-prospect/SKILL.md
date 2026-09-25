---
name: style-prospect
description: Propose and vet a new visual style for the style-inspiration catalogue, then give it a record, tokens, a specimen, and a fingerprint. Use when the user asks to add, prospect, research, or evaluate a style, movement, or aesthetic (for example "add Art Deco", "is glassmorphism worth a collection?"). Not for adding references to an existing style (use style-references) or capturing websites (use style-capture).
---

# Prospect a new style

A style enters the catalogue only when its name is in real use, it can be told apart from the styles already here, and it can be described with evidence. This skill has two stages. Stop after stage 1 when the verdict is no-go.

Read first: `AGENTS.md`, `data/schema/style.schema.json`, `templates/style.json`, and one finished style such as `data/styles/bauhaus.json`.

## Stage 1: vet the name (no files written)

1. List the existing styles: `ls data/styles`. Read the `rubric.confusions` of the closest ones.
2. Check that the name is in use. Fetch with `python3 tools/fetch.py <url> [--json]`. It sets a User-Agent and encodes spaces. Do not use `curl`: a shell hook truncates its output. When a source returns HTTP 403 or 429, read it as text in Claude in Chrome.
   - Wikipedia summary: `https://en.wikipedia.org/api/rest_v1/page/summary/<Title_With_Underscores>`. It gives the Wikidata ID.
   - Wikidata search: `https://www.wikidata.org/w/api.php?action=wbsearchentities&search=<name>&language=en&format=json`.
   - Wikidata entity: `https://www.wikidata.org/wiki/Special:EntityData/<Q-id>.json`. Read aliases, P737 (influenced by), P155 (follows), and P1014 (Getty AAT ID).
   - Getty AAT: open `https://vocab.getty.edu/page/aat/<id>`. The `.json` URL does not work.
   - For internet aesthetics, check the Consumer Aesthetics Research Institute (`https://cari.institute/aesthetics/<slug>`).
   - For industry names, find at least one dated article from a design authority (for example NN/g).
3. Decide the `naming` type: `historical`, `internet-aesthetic`, `industry`, or `curatorial` (the name is ours). A curatorial name is allowed, but the page must say so.
4. Write down, for the user:
   - the definition in one or two sentences, with sources
   - the era, the regions, and at least three media where the style appears
   - the two or three closest existing styles, and the visible difference from each
   - a verdict: **go**, **go, scoped** (an umbrella term: the record covers one named core and treats the other branches as related styles), **no-go**, or **merge** into an existing style as an alias
5. No-go reasons: the name is used for several unrelated looks with no stable core, the style cannot be told apart from an existing one, or no source uses the name.

## Stage 2: write the style (after a go)

1. Copy `templates/style.json` to `data/styles/<id>.json`. Set `status` to `draft`, and set `order` one higher than the highest existing value. Equal orders sort by title, so a tie with a parallel agent is harmless.
2. Fill `lede`, `moods`, `era`, `regions`, `aliases`, and `grammar` (facets: structure, layout, type, color, surface, imagery, motion).
3. `identifiers` and `attestation`: only IDs and URLs that you opened. Add the check date to each attestation.
4. `lineage`: each link needs a `note` with the evidence. Use `style` for catalogue styles, and `label` plus `wikidata` for others.
5. `rubric`: diagnostic traits, counter traits, and `confusions` for every close style. Write traits that a person can see in one image.
6. `rules`: `do` and `dont` for an agent that implements the style. Write each `dont` as "Do not …".
7. Choose the fingerprint markers before you design. Run `node tools/lint-style.mjs --table`, which shows every fingerprint metric for every existing specimen. Pick 2 or 3 positive markers (something present) that no other specimen has, and design the specimen to show them.
   - `color.patternShare` sees tiled backgrounds on elements, not on `::before` or `::after`. Put a pattern on a real element.
   - Colors with chroma below 0.3 do not count as hues.
8. Tokens: copy the group structure of `data/tokens/bauhaus.tokens.json` to `data/tokens/<id>.tokens.json`. Keep every group and key name. The specimen, shadcn, and DESIGN.md outputs depend on them. Use system font stacks; the site must work offline.
9. Specimen: write `data/specimens/<id>.css` for the shared content in `content/specimen.html`. Take colors, fonts, radii, shadows, and borders from `var(--…)` tokens. Literal px values are allowed for layout and shape sizes.
10. Build and measure:
    ```bash
    node tools/build.mjs            # other agents' unfinished measurements only cause warnings
    node tools/capture.mjs --no-image <id>=http://127.0.0.1:8766/implementations/<id>/index.html
    node tools/capture.mjs --no-image --viewport=390x844 <id>=http://127.0.0.1:8766/implementations/<id>/index.html
    ```
    The server must run on port 8766. Start `python3 tools/serve.py` only when `http://127.0.0.1:8766/` does not respond. The 390 px run reports horizontal overflow and does not change the measurement. Fix any overflow.
11. Fingerprint: 4 to 7 metrics. At least half must be positive markers. Mark each range "Provisional" in its note until real references are measured. Do not use metrics that depend on viewport width, such as `color.chroma`.
12. Run `node tools/lint-style.mjs --matrix`. Every specimen must pass only its own fingerprint. If the new style causes a confusion, add a positive marker. Do not loosen other styles to fix it.
13. Save the specimen screenshot: `node tools/capture.mjs --specimen <id>=http://127.0.0.1:8766/implementations/<id>/index.html`. It writes `assets/specimens/<id>.jpg` (1440 × 900) and refreshes the measurement. Check thin borders and ornament in a 1:1 crop, because downscaled images change thin colors.
14. Run `node tools/build.mjs`, then `node tools/build.mjs --check`.

When a build fails only on files that belong to other styles, do not edit them. Wait and retry, or ask the lead agent.

## Report

- The verdict and its evidence.
- Files written, and the matrix result.
- The open questions: which ranges are provisional, and which sources were not checked.

Then suggest the style-references skill for the new style.
