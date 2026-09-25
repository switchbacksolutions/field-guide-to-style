---
name: style-references
description: Collect reference records for one existing style in the style-inspiration catalogue from open sources (museum APIs, Wikimedia Commons, Wikidata, documentation), with rights tiers and evidence levels. Use when the user asks to find, collect, or add exemplars or references for a style, or to fill a style's collection. Runs well as one subagent per style. Not for live website screenshots (use style-capture).
---

# Collect references for a style

Goal: 10 to 12 new references for one style, in at least 3 different `medium` values. Prefer canonical, well-documented works. Honesty matters more than count.

Read first: `AGENTS.md`, `data/schema/reference.schema.json`, `templates/reference.json`, `content/rights.html`, and `data/styles/<style>.json`. Examples: `data/references/bauhaus-exhibition-poster-1923.json` (tier A, stored image) and `data/references/bauhaus-building-dessau.json` (tier D, link only). List `data/references/` to avoid duplicates.

## What you may write

- New `data/references/<id>.json` files. The id is lowercase words joined by hyphens, is descriptive (for example `bauhaus-exhibition-poster-1923`), and matches the file name. Other agents write in parallel: check that the file does not exist immediately before you write it.
- New images in `assets/references/<id>.jpg` (or `.png` for line art), and measurements in `data/measurements/<id>.json`.
- Nothing else. Run only `node tools/build.mjs --validate` until it passes. This overrides the `--check` rule in `AGENTS.md`: the lead agent builds and commits.

## Find candidates

- Fetch pages and APIs with `python3 tools/fetch.py <url> [--json]`. Download images with `python3 tools/fetch-image.py <url> <path> [--store]`. Both set a User-Agent and retry rate limits. Do not use `curl`: a shell hook truncates its output. Do not put personal contact data in a User-Agent.
- HTTP 429 means a rate limit, often because parallel agents share one address. The tools wait and retry. Space Wikimedia and Wikidata calls at least 3 seconds apart.
- HTTP 403 means the site blocks scripts. Try the page as text in Claude in Chrome. The extension may not have permission for the site (MoMA and Cooper Hewitt refused). Then use another source, and record the failure in `evidence.note`.
- Productive open sources for design before about 1955: Wikimedia Commons (`prop=imageinfo&iiprop=url|size|extmetadata` shows the license), Library of Congress (`rights_information`), Cleveland Museum of Art (`share_license_status`), Rijksmuseum and Brooklyn Museum (mostly through their Commons uploads), musée Albert-Kahn (through Commons), the V&A API (for documentation and images to view), and Internet Archive.
- The Met (`isPublicDomain`) and the Art Institute of Chicago (`is_public_domain`) mark most twentieth-century design as not public domain. Check each object; do not rely on older Commons copies of their images. The Smithsonian API needs an api.data.gov key.
- Use WebSearch and WebFetch to find candidates and documentation.

## Rights (see content/rights.html)

- **Tier A, store the image.** Both conditions must hold:
  1. The image has an open license (CC0, CC BY, CC BY-SA, public domain mark, "no known restrictions"). A museum statement is best. A Commons license template is enough when it names a public-domain reason (for example PD-old-70 or PD-US-expired). Record the exact license and the credit.
  2. The depicted work is public domain in the United States **and** in its country of origin (in most of Europe: the author died more than 70 years ago), or it is not copyrightable (for example a US building finished before December 1990). A museum's CC0 on a photo does not free a work whose designer died recently.
  - An open photo may show incidental third-party objects in a room. Note them in the caption. Do not use a photo whose main subject is a copyrighted work.
- **Tier D, link only:** everything else. Download to your scratchpad to look at it, never into `assets/`.
- Do not use tier C. Website screenshots belong to the style-capture skill.
- Stored images: `tools/fetch-image.py … --store` resizes to at most 1600 px and saves JPEG quality 82. Record the printed width and height.

## Write each record

- `added` and `reviewed`: today's date.
- `medium`: pick the closest value from the schema. Interiors are `architecture`; lamps and objects are `product`; screens and cabinets are `furniture`.
- `styles`: the style id, `"basis": "agent"`, and a one-sentence `note`. Add a second style only when the work clearly belongs to both. Say "partial fit" in the note when only some traits match.
- `evidence.level`:
  - `observed` only when you opened an image of the work with the Read tool, at least 800 px on the long side. Name the physical copy (museum and object number) in `evidence.note`, because several copies of a design can differ.
  - `documented` when you rely on a record or text without a usable image.
  - Never infer appearance from a title, a small thumbnail, or an error page.
- `observed`: only what the image shows. `context`: documented facts with links. `interpretation` and `borrow`: your reading, kept separate.
- `made` and `creator`: as the source states them. When sources disagree, give both and name the sources.
- `identifiers`: only IDs that you read on the source record itself, not in search results.
- Link other records with `[text](ref:<id>)` and styles with `[text](style:<id>)`.

## Measure stored images

For each stored image: `python3 tools/image-traits.py assets/references/<id>.jpg --out data/measurements/<id>.json`.

## Report (last message, under 800 words)

- The ids created, each with medium, evidence level, and rights tier.
- Website candidates for style-capture: URL (Wayback URL for historical sites), what to look at, and why it fits. Say that you did not inspect them, if so.
- Doubts: unsure rights, unverified claims, rejected candidates and why.

Shell note: in zsh, a word that starts with `=` (for example `echo ====`) fails. Quote it.
