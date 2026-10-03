---
name: "Brutalist web design"
description: "A web style that deliberately looks raw and unadorned: near-default HTML with black text on white, blue underlined links, browser-default type and controls, and almost no decoration. Designers chose it from about 2014 as a reaction against polished, template-like sites. This record covers that raw core. The loud, chaotic branch that also uses the name is treated as antidesign."
colors:
  bg: "#ffffff"
  surface: "#ffffff"
  subtle: "#efefef"
  text: "#000000"
  muted: "#555555"
  border: "#808080"
  primary: "#0000ee"
  on-primary: "#ffffff"
  secondary: "#551a8b"
  on-secondary: "#ffffff"
  accent: "#ee0000"
  on-accent: "#ffffff"
typography:
  display:
    fontFamily: "Times New Roman"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0em"
  heading:
    fontFamily: "Times New Roman"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0em"
  body:
    fontFamily: "Times New Roman"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.15
  label:
    fontFamily: "Courier New"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0em"
rounded:
  none: "0px"
  sm: "0px"
  md: "0px"
  lg: "0px"
  pill: "0px"
spacing:
  xs: "2px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "40px"
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

A web style that deliberately looks raw and unadorned: near-default HTML with black text on white, blue underlined links, browser-default type and controls, and almost no decoration. Designers chose it from about 2014 as a reaction against polished, template-like sites. This record covers that raw core. The loud, chaotic branch that also uses the name is treated as antidesign.

Moods: raw, honest, plain, utilitarian, contrarian.

Full record: api/styles/brutalist-web-design.json. Specimen: implementations/brutalist-web-design/index.html.

## Colors

- **Black, white, and link blue.** Pure black text on pure white. Links are the default blue (#0000EE) and underlined; visited links turn purple. Other color is rare and flat, often a single red for emphasis.
- **bg** (#ffffff)
- **surface** (#ffffff)
- **subtle** (#efefef): Chrome's default ButtonFace gray.
- **text** (#000000)
- **muted** (#555555)
- **border** (#808080): Default table and rule gray.
- **primary** (#0000ee): The default unvisited link color.
- **on-primary** (#ffffff)
- **secondary** (#551a8b): The default visited link color.
- **on-secondary** (#ffffff)
- **accent** (#ee0000): The default active link color.
- **on-accent** (#ffffff)

## Typography

- **Default type.** Times or another browser-default serif for body text, sometimes a monospace throughout. Headings are bold and only one to two times the body size.
- **display** ("Times New Roman", Times, serif)
- **body** ("Times New Roman", Times, serif)
- **mono** ("Courier New", Courier, monospace)

## Layout

- **HTML as material.** The page shows its document structure: headings, paragraphs, bulleted lists, definition lists, and tables in their default form. Little or no layout grid.
- **Document flow.** Content runs top to bottom at full width with the browser’s 8 px margin and default indents. Elements are not arranged into cards or columns.

## Shapes

- **No polish.** No shadows, gradients, or rounded corners. Borders come from default tables, inset rules, and gray push buttons.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Write semantic HTML first and keep most elements at their browser-default look.
- Do: Use black text on white, a default serif or monospace, and blue underlined links. Let visited links turn purple.
- Do: Keep headings bold and small: h1 at about 2em, h2 at 1.5em.
- Do: Use native buttons, inputs, and tables with their default borders.
- Do: Put content in one column of document flow. Use rules and headings to separate sections.
- Don't: add shadows, gradients, rounded corners, or animation.
- Don't: turn content into cards, tiles, or hero banners.
- Don't: confuse raw with broken. Keep the page readable, keep links obvious, and keep the back button working.
- Don't: add clashing colors, overlapping layers, or odd cursors. That is antidesign, a different style.
