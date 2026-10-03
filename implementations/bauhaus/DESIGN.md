---
name: "Bauhaus"
description: "The visual language associated with the Bauhaus school (1919–1933): primary colors, circles, squares, and triangles, heavy rules, sans-serif and lowercase type, and objects designed for industrial production."
colors:
  bg: "#f4efe6"
  surface: "#f4efe6"
  subtle: "#e7dfd0"
  text: "#111111"
  muted: "#474440"
  border: "#111111"
  primary: "#d42a20"
  on-primary: "#ffffff"
  secondary: "#1f4e9c"
  on-secondary: "#ffffff"
  accent: "#f2c12e"
  on-accent: "#111111"
typography:
  display:
    fontFamily: "Futura, Century Gothic, Avenir Next, Trebuchet MS, sans-serif"
    fontSize: "128px"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Futura, Century Gothic, Avenir Next, Trebuchet MS, sans-serif"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0em"
  body:
    fontFamily: "Avenir Next, Futura, Century Gothic, Helvetica Neue, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Futura, Century Gothic, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.14em"
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

The visual language associated with the Bauhaus school (1919–1933): primary colors, circles, squares, and triangles, heavy rules, sans-serif and lowercase type, and objects designed for industrial production.

Moods: constructive, bold, geometric, experimental.

Full record: api/styles/bauhaus.json. Specimen: implementations/bauhaus/index.html.

## Colors

- **Primary triad.** Red, yellow, and blue with black, white, and gray. Colors are flat and saturated.
- **bg** (#f4efe6)
- **surface** (#f4efe6)
- **subtle** (#e7dfd0)
- **text** (#111111)
- **muted** (#474440)
- **border** (#111111)
- **primary** (#d42a20): Red: square in Kandinsky's 1923 questionnaire.
- **on-primary** (#ffffff)
- **secondary** (#1f4e9c): Blue: circle.
- **on-secondary** (#ffffff)
- **accent** (#f2c12e): Yellow: triangle.
- **on-accent** (#111111)

## Typography

- **Sans-serif, often lowercase.** Geometric or grotesque letters. Herbert Bayer’s universal alphabet (1925) removed capitals.
- **display** (Futura, "Century Gothic", "Avenir Next", "Trebuchet MS", sans-serif)
- **body** ("Avenir Next", Futura, "Century Gothic", "Helvetica Neue", sans-serif)
- **mono** (Futura, "Century Gothic", sans-serif)

## Layout

- **Bars and rules.** Thick black bars divide and direct the page. Diagonals add movement.
- **Asymmetric montage.** Type, photographs, and shapes combine in dynamic, off-center compositions.

## Shapes

- **Honest materials.** In objects: tubular steel, glass, metal, and plain wood, with visible construction.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Use flat red, yellow, and blue on white or off-white, with black for text and bars.
- Do: Use large circles, squares, and triangles as layout elements, for example behind a heading.
- Do: Use a geometric sans-serif. Lowercase headings are appropriate.
- Do: Separate sections with thick black bars.
- Do: Break symmetry with one strong diagonal or off-center shape.
- Don't: use gradients, soft shadows, or rounded cards.
- Don't: add more than three hues beyond black, white, and gray.
- Don't: scatter shapes as random decoration. Each shape needs a place in the composition.
