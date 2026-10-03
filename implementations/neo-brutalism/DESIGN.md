---
name: "Neo-brutalism"
description: "A web and interface style of the 2020s: flat bright fills, thick black outlines, hard offset shadows with no blur, large bold type, and components that look like physical blocks."
colors:
  bg: "#fff4e0"
  surface: "#ffffff"
  subtle: "#ffe8a3"
  text: "#000000"
  muted: "#2b2b2b"
  border: "#000000"
  primary: "#ff90e8"
  on-primary: "#000000"
  secondary: "#7df9c4"
  on-secondary: "#000000"
  accent: "#ffd23f"
  on-accent: "#000000"
  lilac: "#b8a4ff"
  sky: "#88c9ff"
typography:
  display:
    fontFamily: "Arial Black"
    fontSize: "96px"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Arial Black"
    fontSize: "34px"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Helvetica Neue"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "ui-monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "56px"
  2xl: "88px"
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

A web and interface style of the 2020s: flat bright fills, thick black outlines, hard offset shadows with no blur, large bold type, and components that look like physical blocks.

Moods: direct, loud, playful, raw.

Full record: api/styles/neo-brutalism.json. Specimen: implementations/neo-brutalism/index.html.

## Colors

- **Flat brights.** Yellow, pink, mint, lilac, and orange fills on off-white or white.
- **bg** (#fff4e0)
- **surface** (#ffffff)
- **subtle** (#ffe8a3)
- **text** (#000000)
- **muted** (#2b2b2b)
- **border** (#000000)
- **primary** (#ff90e8)
- **on-primary** (#000000)
- **secondary** (#7df9c4)
- **on-secondary** (#000000)
- **accent** (#ffd23f)
- **on-accent** (#000000)
- **lilac** (#b8a4ff)
- **sky** (#88c9ff)

## Typography

- **Heavy display type.** Large, bold grotesque or geometric sans-serif headings. Sometimes monospaced labels.
- **display** ("Arial Black", "Helvetica Neue", Arial, sans-serif)
- **body** ("Helvetica Neue", Arial, sans-serif)
- **mono** (ui-monospace, SFMono-Regular, Menlo, monospace)

## Layout

- **Thick outlines.** Every card, button, and input has a 2 to 4 px black border.
- **Blocky layout.** Components stack as distinct blocks with visible edges. Little overlap, little transparency.

## Elevation & Depth

- **sm** (2px 2px 0px 0px #000000)
- **md** (4px 4px 0px 0px #000000): Hard offset, no blur. Remove on press and move the element by the offset.
- **lg** (8px 8px 0px 0px #000000)

## Shapes

- **Hard shadows.** Solid black shadows offset down and right, with no blur. Pressed buttons move into their shadow.
- **none** (0px)
- **sm** (4px)
- **md** (6px)
- **lg** (8px)
- **pill** (999px)

## Do's and Don'ts

- Do: Give every interactive element a 2 to 3 px solid black border.
- Do: Use a hard shadow such as 4px 4px 0 black. On press, move the element 4 px down and right and remove the shadow.
- Do: Fill cards and buttons with flat bright colors. Keep text black for contrast.
- Do: Use a heavy sans-serif for headings at large sizes.
- Do: Keep corners square or slightly rounded, up to 8 px.
- Don't: blur shadows or use gradients.
- Don't: use thin gray borders. The outline must read as a strong black line.
- Don't: use more than one pastel as a large background.

Copyright (c) 2026 Switchback Solutions LLC. MIT License: https://field-guide-to-style.alec-5fe.workers.dev/rights.html#license
