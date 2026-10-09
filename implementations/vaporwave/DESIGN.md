---
name: "Vaporwave"
description: "The visual side of the vaporwave music microgenre of the early 2010s: pastel pink, purple, and cyan sunsets, Windows 95 dialog boxes, wireframe grid floors, Greco-Roman statues, palm trees, Japanese text and fullwidth Latin letters, collaged with 1980s and 1990s consumer technology and degraded by glitch and VHS effects. Wikipedia describes it as a nostalgic, surreal, and often ironic take on the advertising and digital technology of that period."
colors:
  bg: "#f7c9ec"
  surface: "#c0c0c0"
  subtle: "#dfdfdf"
  text: "#000000"
  muted: "#3b3552"
  border: "#808080"
  primary: "#000080"
  on-primary: "#ffffff"
  secondary: "#01cdfe"
  on-secondary: "#000000"
  accent: "#ff71ce"
  on-accent: "#000000"
  purple: "#b967ff"
  mint: "#05ffa1"
  sun: "#fffb96"
  highlight: "#ffffff"
  shade: "#0a0a0a"
  title-end: "#1084d0"
typography:
  display:
    fontFamily: "Times New Roman"
    fontSize: "88px"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.3em"
  heading:
    fontFamily: "Tahoma"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0.06em"
  body:
    fontFamily: "Tahoma"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "MS Gothic"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  sm: "0px"
  md: "0px"
  lg: "0px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "28px"
  xl: "48px"
  2xl: "80px"
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

The visual side of the vaporwave music microgenre of the early 2010s: pastel pink, purple, and cyan sunsets, Windows 95 dialog boxes, wireframe grid floors, Greco-Roman statues, palm trees, Japanese text and fullwidth Latin letters, collaged with 1980s and 1990s consumer technology and degraded by glitch and VHS effects. Wikipedia describes it as a nostalgic, surreal, and often ironic take on the advertising and digital technology of that period.

Moods: nostalgic, ironic, dreamlike, melancholic, kitsch.

Full record: api/styles/vaporwave.json. Specimen: implementations/vaporwave/index.html.

## Colors

- **Pastel neon sunset.** Pink, lavender, purple, and cyan, often as a sunset gradient behind the whole image. Mint and pale yellow are secondary.
- **bg** (#f7c9ec): Pale pink, under the sunset gradient.
- **surface** (#c0c0c0): Windows 95 dialog gray.
- **subtle** (#dfdfdf)
- **text** (#000000)
- **muted** (#3b3552)
- **border** (#808080): Bevel shade.
- **primary** (#000080): Title-bar navy.
- **on-primary** (#ffffff)
- **secondary** (#01cdfe): Cyan.
- **on-secondary** (#000000)
- **accent** (#ff71ce): Hot pastel pink.
- **on-accent** (#000000)
- **purple** (#b967ff)
- **mint** (#05ffa1)
- **sun** (#fffb96)
- **highlight** (#ffffff): Bevel light.
- **shade** (#0a0a0a): Bevel dark edge.
- **title-end** (#1084d0): Right end of the title-bar gradient.

## Typography

- **Fullwidth and Japanese text.** Latin text set in fullwidth forms (ＡＥＳＴＨＥＴＩＣ) or widely spaced, Japanese katakana or kanji as decoration, and default system fonts such as Times New Roman, Arial, and MS Gothic.
- **display** ("Times New Roman", Times, "Liberation Serif", serif)
- **body** (Tahoma, Verdana, "MS Sans Serif", Geneva, "DejaVu Sans", sans-serif)
- **mono** ("MS Gothic", "Lucida Console", "Courier New", monospace)

## Layout

- **Old operating-system chrome.** Gray Windows 95 dialog boxes with bevelled edges, navy title bars, and square buttons frame images and text.
- **Floating collage over a grid floor.** Cut-out objects float in a gradient sky above a receding wireframe grid or a checkered floor. Compositions are sparse and surreal.

## Elevation & Depth

- **sm** (inset -1px -1px 0px 0px #0a0a0a, inset 1px 1px 0px 0px #ffffff, inset -2px -2px 0px 0px #808080, inset 2px 2px 0px 0px #dfdfdf): Raised bevel for buttons.
- **md** (inset -1px -1px 0px 0px #0a0a0a, inset 1px 1px 0px 0px #dfdfdf, inset -2px -2px 0px 0px #808080, inset 2px 2px 0px 0px #ffffff): Raised bevel for windows.
- **inset** (inset 1px 1px 0px 0px #808080, inset -1px -1px 0px 0px #ffffff, inset 2px 2px 0px 0px #0a0a0a, inset -2px -2px 0px 0px #dfdfdf): Sunken bevel for fields and wells.

## Shapes

- **Glitch and VHS degradation.** Scan lines, color-channel offsets, tracking noise, and low-resolution compression make the image look copied from old media.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (999px): For the sun disc only.

## Do's and Don'ts

- Do: Use a pastel sunset gradient of purple, pink, and peach or cyan as the page or hero background.
- Do: Put a receding wireframe grid floor or a checkered floor under the hero, and a striped sun above it.
- Do: Frame content in Windows 95-style windows: gray panels, two-step bevelled edges with no blur, navy title bars, and square corners.
- Do: Space display headings very wide, in capitals, to imitate fullwidth letters.
- Do: Offset pink and cyan copies of display text for a color-channel glitch, and add faint scan lines over the hero.
- Do: Keep body text in plain black on the gray window panels, in a system sans-serif such as Tahoma or Verdana.
- Don't: round the window corners or give windows soft, blurred drop shadows.
- Don't: use a black background with saturated neon as the base. That reads as synthwave.
- Don't: set real text in fullwidth Unicode characters. Screen readers and search treat them as different letters, so use letter spacing and keep fullwidth forms for decoration.
- Don't: add Japanese text that you cannot read or check. Use short, correct phrases, or none.
- Don't: put body text directly on the gradient or the grid. Put it in a window panel.

Copyright (c) 2026 Switchback Solutions LLC. MIT License: https://field-guide-to-style.alec-5fe.workers.dev/rights.html#license
