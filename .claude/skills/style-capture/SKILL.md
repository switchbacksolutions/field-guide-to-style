---
name: style-capture
description: Capture and measure websites for the style-inspiration catalogue with tools/capture.mjs, review the screenshots, write website reference records, and calibrate style fingerprints against them. Use when the user asks to capture, screenshot, measure, or collect website examples for a style, or to calibrate or check a style's fingerprint against real sites.
---

# Capture websites and calibrate a style

Read first: `AGENTS.md`, `templates/reference.json`, the style's `data/styles/<style>.json` (rubric and fingerprint), and one finished website record such as `data/references/neubrutalism-com-website.json`.

## 1. Find candidates

- Good sources: the style's attestation articles, designers and studios known for the style, institutions and foundries in its home region, and any candidate list in the conversation (for example a style-references report).
- Listicles and template shops are poor sources. Galleries are for discovery only; never use their screenshots.
- Expect to keep about 1 capture in 5. Capture in batches of about 10.
- For a site that has changed, use a dated Wayback Machine copy with `if_` after the timestamp, which removes the archive toolbar: `https://web.archive.org/web/20220115000000if_/https://example.com/`. Wayback returns the nearest capture, which can be months away. Check the timestamp in the printed URL, and name the id by the real year.

## 2. Capture

```bash
node tools/capture.mjs --wait=3000 <id>=<url> <id>=<url> ...
```

- Id convention: `<site>-website` for a live site, `<site>-website-<year>` for a Wayback copy.
- Each capture writes `assets/references/<id>.jpg` (1440 × 900) and `data/measurements/<id>.json` (computed styles plus `pixels`, the screenshot palette). When the image exists, the tool skips the capture. `--force` replaces both.
- The tool keeps Chrome's headless user agent on purpose. When a site blocks it, the record stays pending. Do not work around bot checks.
- Compare the printed URL with the one you asked for. When a redirect changes the kind of page (for example to a product page), drop it or capture the final URL, and say so in the record.

## 3. Review every screenshot

Make a contact sheet in your own scratchpad subfolder:

```bash
python3 tools/contact-sheet.py <scratchpad>/<style>/sheet1.jpg <id> <id> <id> <id>
```

Look at each capture. Delete the image and the measurement when it shows:

- a bot check, an error page, or an access-denied page (never describe a design from these)
- a cookie box or modal that covers more than a quarter of the page or dims all of it
- plugin content that did not render (a blank area or a Ruffle box instead of Flash)
- a site that does not use the style, including one that sells or describes the style without using it

Sort the rest by the style's rubric into **clear** and **borderline** examples. Note each dropped site and the reason.

## 4. Write records

- One record per kept site, from `templates/reference.json`: `type` and `medium` `website`, rights tier `C`, license `unverified`, `basis: agent`. The style `note` says clear or borderline and why.
- `made`: leave it out for a live site. For a Wayback copy, give the capture year.
- `creator`: the organization or studio, when the page states it.
- `evidence.note`: say that `tools/capture.mjs` captured it, give the date and viewport, and mention anything covering the page.
- `observed`: only what the screenshot shows. Put measured values (outline width, shadow share) in `interpretation`.
- `notice`: add one when the live site has changed since the captured version.
- `images`: 1440 × 900, `kind: screenshot`, a caption with a link to the captured URL.
- Run `node tools/build.mjs --validate`.

## 5. Calibrate

1. Lint each capture: `node tools/lint-style.mjs <style> data/measurements/<id>.json`. For each failure, open the measurement JSON and find the reason.
2. Change a range only when at least 3 clear examples, or at least half of them, fail for the same measured reason. Write the calibrated values in the metric's note.
3. Prefer positive markers. Remove metrics that depend on viewport width or on how much text a page has: `color.chroma`, `color.chromaticShare` on photo-heavy pages, and `type.sizeRange` when big links hold most of the text.
4. When a measurement cannot see a trait (for example gloss drawn with images before CSS3, or a block centered by margins), write that in the style's `synthesis` and judge those references by the rubric.
5. Run `node tools/lint-style.mjs --matrix`. Every specimen must still pass only its own fingerprint.
6. Run `node tools/lint-style.mjs --captures`. It lists captures that pass a style they do not belong to. Report them; fix a fingerprint only with evidence from that style's own references.
7. Add the findings to the style's `synthesis`, with `ref:` links.

## 6. Finish

- Alone: run `node tools/build.mjs` and `node tools/build.mjs --check`, then commit the source changes and the generated output.
- In parallel with other agents: do not build or commit. Report the files you wrote. The lead agent builds and commits once.

Report: the sites kept (clear or borderline), the sites dropped with reasons, the lint results, and every fingerprint change with its evidence.
