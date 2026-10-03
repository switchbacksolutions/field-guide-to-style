---
name: "International Typographic Style"
description: "A modernist graphic design approach, formalized in Switzerland in the 1950s, that builds every layout on a modular grid, sets flush-left sans-serif type, and prefers objective photography to illustration."
colors:
  bg: "#ffffff"
  surface: "#ffffff"
  subtle: "#f0f0f0"
  text: "#111111"
  muted: "#5c5c5c"
  border: "#111111"
  primary: "#e30613"
  on-primary: "#ffffff"
  accent: "#e30613"
  on-accent: "#ffffff"
typography:
  display:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "160px"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.045em"
  heading:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
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
  lg: "36px"
  xl: "72px"
  2xl: "120px"
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

A modernist graphic design approach, formalized in Switzerland in the 1950s, that builds every layout on a modular grid, sets flush-left sans-serif type, and prefers objective photography to illustration.

Moods: objective, rational, clear, restrained.

Full record: api/styles/international-typographic-style.json. Specimen: implementations/international-typographic-style/index.html.

## Colors

- **Limited palette.** Black and white with one or two flat colors, often red. No gradients.
- **bg** (#ffffff)
- **surface** (#ffffff)
- **subtle** (#f0f0f0)
- **text** (#111111)
- **muted** (#5c5c5c)
- **border** (#111111)
- **primary** (#e30613): Signal red. One idea per view.
- **on-primary** (#ffffff)
- **accent** (#e30613)
- **on-accent** (#ffffff)

## Typography

- **Grotesque sans-serif.** Akzidenz-Grotesk, Helvetica, and Univers in a small number of sizes and weights. Text is flush left and ragged right.
- **Scale contrast.** One very large element, such as a headline or number, against small, even body text.
- **display** ("Helvetica Neue", Helvetica, Arial, sans-serif): A grotesque: Helvetica, Akzidenz-Grotesk, or Univers when licensed.
- **body** ("Helvetica Neue", Helvetica, Arial, sans-serif)
- **mono** ("Helvetica Neue", Helvetica, Arial, sans-serif)

## Layout

- **Modular grid.** Columns and rows set every position and every image size. The grid is often visible through alignment alone.
- **Asymmetric balance.** Content hangs from a strong axis. Large empty areas are part of the composition, not leftover space.

## Shapes

- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Build the page on a 12-column grid and align every block to column edges.
- Do: Use one grotesque family in two weights. Set body text flush left.
- Do: Make one element very large, for example the headline or a date, and keep the rest small.
- Do: Use black, white, and one accent color. Use the accent for one idea per view.
- Do: Keep generous empty space around groups.
- Don't: center headings and paragraphs by default.
- Don't: add rounded corners, drop shadows, or gradients.
- Don't: use more than two type sizes for body content.
- Don't: fill empty grid areas with decoration.
