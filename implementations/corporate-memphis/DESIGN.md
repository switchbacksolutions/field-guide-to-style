---
name: "Corporate Memphis"
description: "A flat vector illustration style that tech companies used from about 2017 to the early 2020s: smiling figures with small heads, long elastic arms and legs, and skin in non-natural colors such as purple, blue, or pink, drawn in solid fills with no outlines or texture. The design agency Buck made the core example, the Alegria illustration system for Facebook (2017). Mike Merrill named the style after the Memphis Group in the title of an Are.na board, but it has almost nothing in common with that group’s work."
colors:
  bg: "#fffaf4"
  surface: "#ffffff"
  subtle: "#eee9ff"
  text: "#1d1b4f"
  muted: "#4b4878"
  border: "#d8d2f7"
  primary: "#6147ff"
  on-primary: "#ffffff"
  secondary: "#ff6a4d"
  on-secondary: "#1d1b4f"
  accent: "#ffc233"
  on-accent: "#1d1b4f"
  pink: "#ff8cbf"
  on-pink: "#1d1b4f"
  sky: "#3d9bff"
  on-sky: "#1d1b4f"
  leaf: "#18a36d"
  on-leaf: "#1d1b4f"
  peach: "#ffe6dc"
  mint: "#d9f6ea"
typography:
  display:
    fontFamily: "Avenir Next, Nunito, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "80px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Avenir Next, Nunito, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Avenir Next, Nunito, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Avenir Next, Nunito, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "0.02em"
rounded:
  none: "0px"
  sm: "12px"
  md: "24px"
  lg: "40px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "72px"
  2xl: "112px"
components:
  page:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
  text-muted:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.muted}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.md}"
  badge-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
  panel-subtle:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.text}"
  divider:
    backgroundColor: "{colors.border}"
    height: "1px"
---

## Overview

A flat vector illustration style that tech companies used from about 2017 to the early 2020s: smiling figures with small heads, long elastic arms and legs, and skin in non-natural colors such as purple, blue, or pink, drawn in solid fills with no outlines or texture. The design agency Buck made the core example, the Alegria illustration system for Facebook (2017). Mike Merrill named the style after the Memphis Group in the title of an Are.na board, but it has almost nothing in common with that group’s work.

Moods: friendly, upbeat, inclusive, corporate, bland.

Full record: api/styles/corporate-memphis.json. Specimen: implementations/corporate-memphis/index.html.

## Colors

- **Non-natural skin.** Skin is purple, blue, pink, orange, or green. The Buck illustrator Xoana Herrera describes the characters as “ethnically non-specific”. The rest of the palette is a small set of bright solid colors on white or a pale pastel.
- **bg** (#fffaf4): Warm white. Illustrations sit on white or near-white pages.
- **surface** (#ffffff)
- **subtle** (#eee9ff): Pale lavender for the blob behind a scene.
- **text** (#1d1b4f): Deep indigo for text, hair, and trousers. Softer than black.
- **muted** (#4b4878)
- **border** (#d8d2f7): Rarely used: shapes separate by color, not outline.
- **primary** (#6147ff): Violet: brand color and the most common non-natural skin tone.
- **on-primary** (#ffffff)
- **secondary** (#ff6a4d): Coral for shoes, pots, and secondary actions.
- **on-secondary** (#1d1b4f)
- **accent** (#ffc233): Yellow for shirts and highlights.
- **on-accent** (#1d1b4f)
- **pink** (#ff8cbf): A second skin tone.
- **on-pink** (#1d1b4f)
- **sky** (#3d9bff): A third skin tone and a shirt color.
- **on-sky** (#1d1b4f)
- **leaf** (#18a36d): Plant green.
- **on-leaf** (#1d1b4f)
- **peach** (#ffe6dc): Pale peach blob.
- **mint** (#d9f6ea): Pale mint blob.

## Typography

- **Friendly geometric sans.** Headings are a bold geometric or rounded sans-serif in sentence case. CARI lists geometric sans typefaces among the traits of the friendly corporate look. The type supports the illustration and does not carry the style.
- **display** ("Avenir Next", Nunito, "Segoe UI", "Helvetica Neue", Arial, sans-serif)
- **body** ("Avenir Next", Nunito, "Segoe UI", "Helvetica Neue", Arial, sans-serif)
- **mono** ("SF Mono", Menlo, Consolas, monospace)

## Layout

- **Assembled from simple shapes.** Bodies are built from circles, pills, and rounded blocks, so many artists and libraries can make matching figures. Humaaans (Pablo Stanley, 2018) sells this as mix-and-match heads, tops, and legs.
- **Spot illustration in white space.** Scenes fill hero areas, onboarding screens, and empty, error, and success states on a white or pale page. Pastel blobs and potted plants sit behind the figures. The interface around them uses rounded cards and pill buttons.

## Shapes

- **Flat vector fills.** Solid fills with no outlines, no texture, and no shading, or one flat shadow tone at most. Wired quotes the illustrator Jack Hurley on its “simple shapes [and] untextured colours”.
- **none** (0px)
- **sm** (12px)
- **md** (24px)
- **lg** (40px)
- **pill** (999px)

## Do's and Don'ts

- Do: Draw people from simple shapes: a small circle for the head, a rounded block for the torso, and long, curved limbs.
- Do: Give skin a non-natural color such as violet, blue, pink, or green, and keep hair and trousers in the dark text color.
- Do: Show each figure doing something with an oversized object, such as a pencil, a phone, or a leaf.
- Do: Put the illustration on a white or warm white page, in front of a pastel blob.
- Do: Use a small palette: one strong violet or blue, a coral, a yellow, and a green for plants.
- Do: Round every card, panel, and button. Use pill shapes for buttons and inputs.
- Do: Use a bold geometric sans-serif for headings in sentence case.
- Don't: outline shapes. Separate them by color.
- Don't: add texture, grain, gradients, or glossy highlights.
- Don't: use drop shadows on cards or buttons.
- Don't: draw detailed faces or realistic proportions.
- Don't: fill backgrounds with repeating patterns. That points to Memphis.
- Don't: let figures overlap body text. Keep the illustration in its own area.
