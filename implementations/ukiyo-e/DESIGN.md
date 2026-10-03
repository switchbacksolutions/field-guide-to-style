---
name: "Ukiyo-e"
description: "The graphic language of Japanese woodblock prints from the Edo period (about 1670–1868): black outlines cut in a key block, flat areas of color printed from separate blocks, hand-wiped bokashi gradients, and asymmetric, cropped compositions with a title cartouche."
colors:
  bg: "#f2e8d2"
  surface: "#f7f0df"
  subtle: "#e6d7b8"
  text: "#1d1a16"
  muted: "#5a5145"
  border: "#1d1a16"
  primary: "#1f4e8c"
  on-primary: "#f7f0df"
  secondary: "#c0392b"
  on-secondary: "#f7f0df"
  accent: "#5b8a3c"
  on-accent: "#1d1a16"
  highlight: "#d9a13b"
typography:
  display:
    fontFamily: "Hiragino Mincho ProN"
    fontSize: "96px"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "0.01em"
  heading:
    fontFamily: "Hiragino Mincho ProN"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "0.02em"
  body:
    fontFamily: "Iowan Old Style"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hiragino Mincho ProN"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
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

The graphic language of Japanese woodblock prints from the Edo period (about 1670–1868): black outlines cut in a key block, flat areas of color printed from separate blocks, hand-wiped bokashi gradients, and asymmetric, cropped compositions with a title cartouche.

Moods: calm, graphic, crafted, narrative, traditional.

Full record: api/styles/ukiyo-e.json. Specimen: implementations/ukiyo-e/index.html.

## Colors

- **Flat block colors.** Each color is one flat area from its own block: Prussian blue, indigo, vermilion, beni pink, pale green, and yellow ochre on cream paper. Black is the line color.
- **bg** (#f2e8d2): Cream hosho paper.
- **surface** (#f7f0df)
- **subtle** (#e6d7b8)
- **text** (#1d1a16): Sumi black of the key block.
- **muted** (#5a5145)
- **border** (#1d1a16)
- **primary** (#1f4e8c): Prussian blue, used for bokashi skies and water after the 1820s.
- **on-primary** (#f7f0df)
- **secondary** (#c0392b): Vermilion and beni red, used for seals and garments.
- **on-secondary** (#f7f0df)
- **accent** (#5b8a3c): Green of hills and pine.
- **on-accent** (#1d1a16)
- **highlight** (#d9a13b): Yellow ochre of title cartouches and sky glow.

## Typography

- **Cartouche and seals.** Text sits in a narrow vertical cartouche with a thin border, in a corner of the picture, beside small red seals. Japanese text runs vertically, from right to left.
- **display** ("Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", "Iowan Old Style", "Palatino Linotype", Georgia, serif)
- **body** ("Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif)
- **mono** ("Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", "Iowan Old Style", "Palatino Linotype", Georgia, serif)

## Layout

- **Key-block outline.** One black line block carries the drawing. Its lines are even in weight, thin to medium, and close every color area.
- **Asymmetric, cropped composition.** The subject sits off center. A near object crops the scene at the edge or cuts across it, and a high or low viewpoint opens a deep space behind it.

## Shapes

- **Bokashi gradient.** The printer wiped ink across a wet block, so a band of color fades into the paper. The most common place is a band of blue at the top of the sky or the bottom of the water.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Use cream paper as the ground, black for lines and text, and Prussian blue and vermilion as the main colors.
- Do: Outline panels and cards with thin black lines of one weight.
- Do: Fade one band of blue into the paper at the top of the hero, like a bokashi sky.
- Do: Put the main shape off center, and let it run off one edge.
- Do: Put the title or a label in a narrow vertical cartouche with a thin border, and add a small red square seal.
- Do: Use a repeating wave-crest or stripe pattern only in one bounded area, like a textile.
- Don't: use drop shadows, glows, or rounded cards.
- Don't: shade forms with smooth modelling. A gradient is a band that fades into the paper, not a 3D effect.
- Don't: center the composition symmetrically.
- Don't: use brush-script fonts or fake Japanese lettering for Latin text.
