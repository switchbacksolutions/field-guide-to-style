---
name: "Memphis"
description: "The postmodern style of the Memphis Group, founded in Milan by Ettore Sottsass and active from 1980 to 1987: bright clashing colors, printed laminates, squiggles and speckles, and furniture built from bold, toy-like forms."
colors:
  bg: "#fffdf6"
  surface: "#ffffff"
  subtle: "#fff1c1"
  text: "#111111"
  muted: "#3a3a3a"
  border: "#111111"
  primary: "#ff4f9a"
  on-primary: "#111111"
  secondary: "#00b3a7"
  on-secondary: "#111111"
  accent: "#ffd23f"
  on-accent: "#111111"
  violet: "#7c4dff"
  red: "#ff3b30"
typography:
  display:
    fontFamily: "Futura, Avenir Next, Trebuchet MS, sans-serif"
    fontSize: "120px"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Futura, Avenir Next, Trebuchet MS, sans-serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0em"
  body:
    fontFamily: "Avenir Next, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Avenir Next, Helvetica Neue, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  none: "0px"
  sm: "0px"
  md: "0px"
  lg: "0px"
  pill: "999px"
  leaf: "80px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  2xl: "100px"
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

The postmodern style of the Memphis Group, founded in Milan by Ettore Sottsass and active from 1980 to 1987: bright clashing colors, printed laminates, squiggles and speckles, and furniture built from bold, toy-like forms.

Moods: playful, loud, irreverent, postmodern.

Full record: api/styles/memphis.json. Specimen: implementations/memphis/index.html.

## Colors

- **Clashing brights.** Pink, yellow, turquoise, red, and black together, often at full saturation.
- **bg** (#fffdf6)
- **surface** (#ffffff)
- **subtle** (#fff1c1)
- **text** (#111111)
- **muted** (#3a3a3a)
- **border** (#111111)
- **primary** (#ff4f9a): Hot pink.
- **on-primary** (#111111)
- **secondary** (#00b3a7): Turquoise.
- **on-secondary** (#111111)
- **accent** (#ffd23f): Yellow.
- **on-accent** (#111111)
- **violet** (#7c4dff)
- **red** (#ff3b30)

## Typography

- **display** (Futura, "Avenir Next", "Trebuchet MS", sans-serif)
- **body** ("Avenir Next", "Helvetica Neue", Arial, sans-serif)
- **mono** ("Avenir Next", "Helvetica Neue", sans-serif)

## Layout

- **Deliberate imbalance.** Parts meet at odd angles and different scales. Symmetry is avoided.
- **Black-and-white grids.** Grid patterns in black and white act as a neutral foil for strong colors.

## Elevation & Depth

- **md** (8px 8px 0px 0px #111111): Offset black block, used as a graphic shape, not as depth.

## Shapes

- **Printed pattern.** Laminate patterns such as squiggles, speckles, and bacteria-like marks cover whole surfaces.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (999px)
- **leaf** (80px): Leaf corners on the quote panel.

## Do's and Don'ts

- Do: Combine at least four saturated colors, for example pink, yellow, turquoise, and black.
- Do: Fill backgrounds or panels with a pattern: squiggles, confetti dots, or a black-and-white grid.
- Do: Place geometric shapes such as circles, half circles, triangles, and zigzags around content, at odd angles.
- Do: Use a bold display face for headings and keep body text plain for reading.
- Don't: put body text on top of a busy pattern. Use a solid panel under text.
- Don't: use gradients or realistic shadows.
- Don't: reduce the style to cartoon people. That is Corporate Memphis, a different style.
