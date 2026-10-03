---
name: "Risograph"
description: "The print look of the Risograph stencil duplicator as artists, zine makers, and small studios have used it since the 2000s: a few semi-transparent spot inks such as fluorescent pink, blue, and yellow on uncoated paper, colors that overprint into new ones, visible grain and patchy coverage, and layers that do not quite align. This record covers the printed look and its digital imitation. The machine itself is a process, not a style."
colors:
  bg: "#f6f1e7"
  surface: "#f6f1e7"
  subtle: "#ece4d4"
  text: "#2b3a70"
  muted: "#4f5a8c"
  border: "#2b3a70"
  primary: "#ff48b0"
  on-primary: "#2b3a70"
  primary-tint: "#ffa3d8"
  secondary: "#0078bf"
  on-secondary: "#f6f1e7"
  secondary-tint: "#7fbbdf"
  accent: "#ffe800"
  on-accent: "#2b3a70"
typography:
  display:
    fontFamily: "Avenir Next Condensed"
    fontSize: "128px"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  heading:
    fontFamily: "Avenir Next Condensed"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0em"
  body:
    fontFamily: "Helvetica Neue"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Courier New"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  lg: "6px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  2xl: "104px"
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

The print look of the Risograph stencil duplicator as artists, zine makers, and small studios have used it since the 2000s: a few semi-transparent spot inks such as fluorescent pink, blue, and yellow on uncoated paper, colors that overprint into new ones, visible grain and patchy coverage, and layers that do not quite align. This record covers the printed look and its digital imitation. The machine itself is a process, not a style.

Moods: handmade, playful, vibrant, indie, tactile.

Full record: api/styles/risograph.json. Specimen: implementations/risograph/index.html.

## Colors

- **Two or three spot inks.** Each ink is a separate drum, so a print has few colors. Fluorescent pink with blue is the classic pair. Yellow, teal, orange, and federal blue are common. Black is often absent.
- **Overprint mixes.** Inks are semi-transparent. Where two layers cross, a third color appears: pink over blue gives a deep violet, pink over yellow a red-orange, blue over yellow a green.
- **bg** (#f6f1e7): Uncoated off-white paper.
- **surface** (#f6f1e7)
- **subtle** (#ece4d4)
- **text** (#2b3a70): Dark blue ink used for text. Riso prints often have no black drum.
- **muted** (#4f5a8c)
- **border** (#2b3a70)
- **primary** (#ff48b0): Screen approximation of Riso Fluorescent Pink ink.
- **on-primary** (#2b3a70)
- **primary-tint** (#ffa3d8): Pink ink printed as a 50% screen.
- **secondary** (#0078bf): Screen approximation of Riso Blue ink.
- **on-secondary** (#f6f1e7)
- **secondary-tint** (#7fbbdf): Blue ink printed as a 50% screen.
- **accent** (#ffe800): Screen approximation of Riso Yellow ink. An optional third ink: the specimen uses only pink and blue.
- **on-accent** (#2b3a70)

## Typography

- **Clean type in ink.** Bold grotesques, condensed display faces, and typewriter captions, printed in one of the inks rather than black. Letterforms stay sharp. Only the ink is rough.
- **display** ("Avenir Next Condensed", "Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif)
- **body** ("Helvetica Neue", Arial, "Liberation Sans", sans-serif)
- **mono** ("Courier New", Courier, "Liberation Mono", monospace)

## Layout

- **Misregistration.** Color layers shift by a millimeter or more, so outlines and fills do not meet and a thin sliver of one ink shows beside another.
- **Zine and poster formats.** Folded zines, posters, and cards with generous paper margins, simple grids, and stamped labels.

## Shapes

- **Grain and patchy coverage.** Large flat areas show speckle, light streaks, and uneven density on uncoated paper. Images are screened as coarse halftone dots or grain.
- **none** (0px)
- **sm** (2px)
- **md** (4px)
- **lg** (6px)
- **pill** (999px)

## Do's and Don'ts

- Do: Choose two or three inks, for example fluorescent pink, blue, and yellow, and use no other hues.
- Do: Print text in one of the inks, usually the darkest blue, on an off-white paper color.
- Do: Overlap ink shapes with mix-blend-mode: multiply so that overlaps show the mixed color.
- Do: Add a fine grain texture to the paper and to large ink areas. Tile it on real elements, not only on pseudo-elements.
- Do: Offset one color layer of a headline or an illustration by 3 to 6 px to suggest misregistration.
- Do: Use bold or condensed sans-serif display type and a typewriter face for small labels.
- Don't: use black outlines around shapes or panels. That is pop art.
- Don't: use smooth gradients, glossy highlights, or blurred shadows.
- Don't: add a fourth ink for variety. The constraint is the look.
- Don't: make the grain so strong that body text loses contrast.
- Don't: damage or erode the letterforms. Riso type is clean.

Copyright (c) 2026 Switchback Solutions LLC. MIT License: https://field-guide-to-style.alec-5fe.workers.dev/rights.html#license
