---
name: "De Stijl"
description: "The Dutch movement around the journal De Stijl (1917–1931) and Mondrian’s neoplasticism: compositions built only from horizontal and vertical lines and rectangular planes, in the three primary colors and the three non-colors black, white, and gray, balanced by asymmetry instead of symmetry."
colors:
  bg: "#f3f2ec"
  surface: "#ffffff"
  subtle: "#d9d8d2"
  text: "#111111"
  muted: "#6b6a66"
  border: "#111111"
  primary: "#d8231b"
  on-primary: "#ffffff"
  secondary: "#1b3e94"
  on-secondary: "#ffffff"
  accent: "#f4cd1b"
  on-accent: "#111111"
typography:
  display:
    fontFamily: "DIN Condensed"
    fontSize: "120px"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "0.01em"
  heading:
    fontFamily: "DIN Condensed"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "0.03em"
  body:
    fontFamily: "Helvetica Neue"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "DIN Alternate"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  none: "0px"
  sm: "0px"
  md: "0px"
  lg: "0px"
  pill: "0px"
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

The Dutch movement around the journal De Stijl (1917–1931) and Mondrian’s neoplasticism: compositions built only from horizontal and vertical lines and rectangular planes, in the three primary colors and the three non-colors black, white, and gray, balanced by asymmetry instead of symmetry.

Moods: orthogonal, balanced, austere, pure.

Full record: api/styles/de-stijl.json. Specimen: implementations/de-stijl/index.html.

## Colors

- **Primaries and non-colors.** Red, yellow, and blue as flat, unmixed planes, with black, white, and gray. Mondrian’s paintings of 1920–1921 use several whites and grays and some solid black planes. White and gray usually cover most of the surface.
- **bg** (#f3f2ec): Off-white ground, like Mondrian’s painted whites.
- **surface** (#ffffff): Pure white planes set against the ground.
- **subtle** (#d9d8d2): Light gray plane: gray is one of the three non-colors.
- **text** (#111111)
- **muted** (#6b6a66): Mid gray: secondary text, and the darker gray plane.
- **border** (#111111): Black lines between planes.
- **primary** (#d8231b): Red.
- **on-primary** (#ffffff)
- **secondary** (#1b3e94): Blue.
- **on-secondary** (#ffffff)
- **accent** (#f4cd1b): Yellow.
- **on-accent** (#111111)

## Typography

- **Rectilinear capitals.** Blocky sans-serif letters built from straight strokes, as in van Doesburg’s 1919 alphabet. Capitals and letter-spaced titles are common.
- **display** ("DIN Condensed", "Avenir Next Condensed", "Arial Narrow", "Helvetica Neue", sans-serif)
- **body** ("Helvetica Neue", Arial, sans-serif)
- **mono** ("DIN Alternate", "Helvetica Neue", Arial, sans-serif)

## Layout

- **Only horizontals and verticals.** Straight black lines of equal or varied weight divide the surface into rectangles. There are no curves and, in the core style, no diagonals.
- **Asymmetric balance.** Planes of unequal size balance by opposition: a large colored plane against small ones in the far corners. Lines run to the edge of the field or stop just short of it.

## Shapes

- **Flat planes.** No modelling, texture, shadow, or gradient. In furniture and buildings, planes and bars overlap without joining, each one painted in its own color.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Build the layout as a visible grid: thick black lines between rectangular cells.
- Do: Use flat red, yellow, and blue for a few cells. Keep most cells white or light gray.
- Do: Make the balance asymmetric: one large colored plane, and smaller ones in the opposite corners.
- Do: Use a condensed or square sans-serif in capitals for headings.
- Do: Let lines run through to the edge of the container.
- Don't: use rounded corners, circles, or curved shapes.
- Don't: use diagonals, rotation, or skew.
- Don't: use green, orange, purple, or tints of the primaries.
- Don't: use gradients, shadows, textures, or photographs.
