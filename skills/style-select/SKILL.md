---
name: style-select
description: Choose a visual design style for a project from its mood, audience, and product type. Then apply the style's tokens and rules, and check the result against the style's rubric. Uses the Field Guide to Style catalogue of 27 styles, with tokens for CSS, Tailwind v4, and shadcn/ui. Use when the user asks for a look, theme, aesthetic, or visual direction for a site or app. Also use when the user asks which style fits a project, wants an interface to feel a certain way ("warmer", "more playful", "more serious"), or starts a front end with no design system. Not for adding styles or references to the catalogue.
license: MIT
---

# Choose and apply a style

The catalogue is at `https://field-guide-to-style.alec-5fe.workers.dev`. This file calls that address SITE. Every file is static JSON, CSS, or Markdown. Fetch it with plain HTTP. If you have a local checkout of the catalogue, read the same paths from disk.

Do the steps in order.

## 1. Read the brief

Collect these facts from the user's request and from the project:

- **Product type:** landing page, application, dashboard, documentation, store, portfolio, or other.
- **Audience:** who uses it.
- **Mood:** three words for how it must feel.
- **Anti-mood:** one word for how it must not feel, for example "corporate" or "childish".
- **Named style:** a style or aesthetic that the brief names, for example "synthwave" or "Swiss". Often there is none.
- **Density:** a marketing page, an application, or a data-dense dashboard.
- **Screens:** phone, desktop, tablet, or a fixed device screen.
- **Stack:** shadcn/ui (`components.json`), Tailwind CSS v4, plain CSS, a token pipeline such as Style Dictionary, or native mobile.
- **Fixed constraints:** brand colors, fonts, dark mode, and the accessibility level. Use WCAG 2.2 AA when nobody says.

Look in the README, `package.json`, the existing CSS and Tailwind configuration, and the product copy. When there is no project yet, the request is the only source.

- **A person is present:** if the mood or anti-mood is unclear, ask one question that covers every missing fact. Do not ask about facts that the project already shows.
- **No person is present:** infer the facts. Mark each inferred fact as an assumption for the report.

## 2. Make a shortlist

1. Fetch `SITE/api/select.json`. It lists every style with `summary`, `moods`, `uses`, `avoid`, `era`, `status`, `page`, `record`, and `fingerprint` evidence.
2. Remove styles:
   - **Stated anti-mood.** When the person stated the anti-mood, remove each style whose `moods` or `summary` has that meaning. An inferred anti-mood does not remove a style. Report it as a trade-off.
   - **`avoid`.** Remove a style when a stated fact in the brief matches one of its `avoid` entries. Keep the style when the user asked for it by name. When the match needs an assumption, keep the style and report the risk as a trade-off. An entry about accessibility applies when the brief states an accessibility requirement. It also applies to products for older people or people with disabilities, and to public services such as government, health, or finance. The default AA level from step 1 does not trigger it.
3. Rank the other styles. Mood comes first: compare `moods` and `summary` with the mood words by meaning, not by exact word. For example, "trustworthy" matches "clear" and "restrained". Product fit comes second: compare `uses` with the product type. Evidence breaks ties: `status` (`reviewed` > `pilot` > `draft` > `seed`), then `fingerprint.capturesPassing`.
4. Keep three candidates: the best fit and at least one bolder reading of the brief. Make them different. When one style names the other in `rubric.confusions`, the two styles are one family. Only two candidates can come from one family. When the honest matches all come from one family, keep them and say so. Do not add a weak fit only for variety.
5. Fetch the full `record` of each candidate. Read `grammar`, `rules.do`, `rules.dont`, and `rubric.confusions`.
   - Remove a candidate when a `rules.dont` item conflicts with a fixed constraint. Example: neumorphism needs one pale surface, so it conflicts with a strong multicolor brand.
   - When the brief names a style, look for that name in each candidate's `rubric.confusions` and `rules.dont`. If the record says that the named style is a different look, say so in the trade-off. Example: the vaporwave record says that black and neon read as synthwave, not vaporwave. If no style in the catalogue is the named style, say so and give the closest candidates.
6. Note the evidence for each candidate. `seed` and `draft` records are usable, but people checked them less than `pilot` and `reviewed` records. A fingerprint with `capturesPassing` below 3 is not calibrated against real sites.

## 3. Choose

Show the three candidates in this form:

```markdown
1. **Neo-brutalism** (recommended): https://field-guide-to-style.alec-5fe.workers.dev/neo-brutalism.html
   Why: the brief asks for direct and playful. The style's moods are direct, loud, playful, and raw, and it lists developer products as a use.
   Trade-off: thick outlines add noise to dense tables.
   Checked: pilot record. 5 of 10 website captures pass the fingerprint.
   Specimen: https://field-guide-to-style.alec-5fe.workers.dev/implementations/neo-brutalism/index.html
```

Always give the `page` link, also when you read the files from a local checkout. The page shows the definition, the references, and the rules, so the person can see what the style means. Give the specimen link (`SITE/implementations/<id>/index.html`) when the record has tokens.

- **A person is present:** wait for a choice.
- **No person is present:** choose the first candidate and continue. Put the three candidates, in the same form, in the final report. Also put the chosen style and its page link in the header comment of the theme file that you add.

## 4. Apply

The files for style `<id>` are in `SITE/implementations/<id>/`. The record's `implementation` object lists the same paths relative to SITE.

| Stack | File | Use |
|---|---|---|
| shadcn/ui | `registry-item.json` | Run `npx shadcn@latest add SITE/implementations/<id>/registry-item.json`. |
| Tailwind CSS v4 | `tailwind.css` | Copy it into the project. Import it after `@import "tailwindcss"`. |
| Plain CSS | `tokens.css` | Copy it. Use the custom properties, for example `var(--color-primary)`. |
| Token pipeline | `tokens.json` | Design Tokens Community Group format 2025.10. |
| Every stack | `DESIGN.md` | Copy it to the project, for example `docs/DESIGN.md`, so later agents keep the style. |

Then do these steps:

1. Treat `rules.dont` as hard limits. Treat `rules.do` and `grammar` as the brief for every component.
2. Read `SITE/implementations/<id>/specimen.css`. It is a worked example: it styles one standard page with a header, navigation, hero, buttons, cards, a facts list, and a form. Copy its techniques (borders, shadows, type treatment, pressed states) to the project's own components. Do not copy its class names.
3. The tokens cover color, type, spacing, radius, and shadow. Patterns, ornament, and imagery come from `grammar`. The references in the record show real examples. Look at them, but do not copy third-party images into the project.
4. Keep the token fonts unless the user supplies fonts. They are system fonts or free fonts with fallbacks.
5. The specimen is a landing page. For tables, dialogs, menus, and dense lists, extend the same `grammar` and keep the density that the product needs.
6. The tokens define a light theme only. If the project needs dark mode, derive it from the tokens and say in the report that the catalogue does not supply it.
7. Check text contrast against the accessibility level. When a style rule and contrast conflict, keep the contrast and report the conflict.

## 5. Check

**Rubric review (always).** Take screenshots of the main screens at desktop width and at 390 px width. Then:

1. For each `rubric.diagnostic` item, state yes or no with the evidence.
2. For each `rubric.counter` item, check that the screens do not show it.
3. For each `rules.dont` item, check that the project does not break it.

Fix each failure and repeat the review.

**Fingerprint check (only when `fingerprint.capturesPassing` in `select.json` is 3 or more).** For other styles the fingerprint is not calibrated against real sites, so skip this check. The rubric decides in every case. A failed metric is a hint to look again, not a verdict.

- With a local checkout of the catalogue: run `node tools/capture.mjs --out=<temp-dir> <name>=<url>`, then `node tools/lint-style.mjs <id> <temp-dir>/<name>.json`. The URL can be a local dev server.
- Without a checkout: load `SITE/tools/extract-traits.js` into the page with browser automation, run `JSON.stringify(await extractTraits())`, and compare each `fingerprint` metric in the record with its `min` and `max`. Metrics that start with `pixels.` need a screenshot analysis that this script does not do. Skip them.

## 6. Report

Give the user:

- The three candidates in the step 3 form, with the chosen style first.
- The assumptions from step 1.
- The files that you added or changed.
- The rubric result, and the fingerprint result when you ran it.
- Each departure from the catalogue: dark mode, contrast fixes, fonts, and components that the specimen does not cover.
