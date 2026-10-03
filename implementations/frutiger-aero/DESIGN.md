---
name: "Frutiger Aero"
description: "A design style common from the mid-2000s to the early 2010s: glossy and translucent interface elements, blue and green gradients, water, bubbles, sky, and grass, and humanist sans-serif type. The Consumer Aesthetics Research Institute named it in 2018."
colors:
  bg: "#e7f6ff"
  surface: "#ffffffc2"
  subtle: "#d6effb"
  text: "#0c2a47"
  muted: "#3d6282"
  border: "#ffffffe6"
  primary: "#0b6fc4"
  on-primary: "#ffffff"
  accent: "#23801a"
  on-accent: "#ffffff"
  sky: "#9fdcff"
  water: "#34b6e4"
  leaf: "#7ed957"
typography:
  display:
    fontFamily: "Frutiger, Segoe UI, Myriad Pro, Lucida Grande, Helvetica Neue, sans-serif"
    fontSize: "80px"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Frutiger, Segoe UI, Myriad Pro, Lucida Grande, Helvetica Neue, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Segoe UI, Frutiger, Myriad Pro, Lucida Grande, Helvetica Neue, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Segoe UI, Lucida Grande, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0.02em"
rounded:
  none: "0px"
  sm: "6px"
  md: "12px"
  lg: "20px"
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

A design style common from the mid-2000s to the early 2010s: glossy and translucent interface elements, blue and green gradients, water, bubbles, sky, and grass, and humanist sans-serif type. The Consumer Aesthetics Research Institute named it in 2018.

Moods: optimistic, fresh, glossy, eco-technological.

Full record: api/styles/frutiger-aero.json. Specimen: implementations/frutiger-aero/index.html.

## Colors

- **Sky and water.** Blues, aquas, and fresh greens on white, usually as vertical gradients.
- **bg** (#e7f6ff)
- **surface** (#ffffffc2): Translucent white glass.
- **subtle** (#d6effb)
- **text** (#0c2a47)
- **muted** (#3d6282)
- **border** (#ffffffe6)
- **primary** (#0b6fc4)
- **on-primary** (#ffffff)
- **accent** (#23801a)
- **on-accent** (#ffffff)
- **sky** (#9fdcff)
- **water** (#34b6e4)
- **leaf** (#7ed957)

## Typography

Each fontFamily in the front matter is a CSS font stack, first choice first.

- **Humanist sans-serif.** Frutiger, Segoe UI, Myriad, and similar open, friendly typefaces.
- **display** (Frutiger, "Segoe UI", "Myriad Pro", "Lucida Grande", "Helvetica Neue", sans-serif)
- **body** ("Segoe UI", Frutiger, "Myriad Pro", "Lucida Grande", "Helvetica Neue", sans-serif)
- **mono** ("Segoe UI", "Lucida Grande", sans-serif)

## Elevation & Depth

- **sm** (0px 1px 3px 0px #0c2a4733)
- **md** (0px 10px 30px 0px #0c2a4733)
- **glow** (0px 0px 18px 0px #9fdcffcc)

## Shapes

- **Gloss and glass.** Buttons and panels have a bright highlight on the upper half, reflections, and translucency.
- **Soft depth.** Rounded corners, soft drop shadows, and floor reflections under objects.
- **none** (0px)
- **sm** (6px)
- **md** (12px)
- **lg** (20px)
- **pill** (999px)

## Do's and Don'ts

- Do: Use a sky-to-white or aqua-to-blue vertical gradient for the page or hero background.
- Do: Give primary buttons a pill shape, a gradient fill, and a white highlight on the upper half.
- Do: Use translucent white panels with a light border and a soft shadow.
- Do: Use a humanist sans-serif such as Segoe UI, Frutiger, or Myriad.
- Do: Add nature imagery: water, bubbles, clouds, or grass.
- Don't: use hard offset shadows or thick black outlines.
- Don't: use dark mode or desaturated palettes as the base.
- Don't: reduce contrast for gloss effects. Keep text readable on every gradient.
