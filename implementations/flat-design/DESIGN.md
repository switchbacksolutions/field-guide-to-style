---
name: "Flat design"
description: "An interface style of about 2010–2016 that removed gradients, gloss, textures, and shadows from screens. Surfaces are solid fields of saturated color, type is a plain sans-serif that is often light, and icons are simple glyphs. This record covers the core of the style: Microsoft’s Metro design language and the flat web and app design that followed it. Material Design and “flat 2.0” are related branches that bring back some depth."
colors:
  bg: "#ffffff"
  surface: "#ffffff"
  subtle: "#ecf0f1"
  text: "#2c3e50"
  muted: "#4f6273"
  border: "#bdc3c7"
  primary: "#1abc9c"
  on-primary: "#2c3e50"
  secondary: "#8e44ad"
  on-secondary: "#ffffff"
  accent: "#c0392b"
  on-accent: "#ffffff"
  blue: "#1a6fb0"
  on-blue: "#ffffff"
  orange: "#f39c12"
  on-orange: "#2c3e50"
typography:
  display:
    fontFamily: "Segoe UI"
    fontSize: "120px"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Segoe UI"
    fontSize: "42px"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "0em"
  body:
    fontFamily: "Segoe UI"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Segoe UI"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.02em"
rounded:
  none: "0px"
  sm: "4px"
  md: "4px"
  lg: "0px"
  pill: "4px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  2xl: "96px"
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

An interface style of about 2010–2016 that removed gradients, gloss, textures, and shadows from screens. Surfaces are solid fields of saturated color, type is a plain sans-serif that is often light, and icons are simple glyphs. This record covers the core of the style: Microsoft’s Metro design language and the flat web and app design that followed it. Material Design and “flat 2.0” are related branches that bring back some depth.

Moods: clean, bright, direct, digital.

Full record: api/styles/flat-design.json. Specimen: implementations/flat-design/index.html.

## Colors

- **Saturated solid fields.** Several bright, clean hues, such as turquoise, blue, purple, orange, and red, fill whole bands, tiles, and buttons. Text is often a dark blue-gray instead of black, and the pale neutral is a cool gray.
- **bg** (#ffffff)
- **surface** (#ffffff)
- **subtle** (#ecf0f1): Clouds, the pale gray of the Flat UI kit (2013).
- **text** (#2c3e50): Midnight blue from the Flat UI kit. Text is a dark blue-gray, not black.
- **muted** (#4f6273)
- **border** (#bdc3c7): Silver. Rarely used: surfaces separate by fill, not by outline.
- **primary** (#1abc9c): Turquoise, the Flat UI kit's secondary brand color. Carries dark text.
- **on-primary** (#2c3e50)
- **secondary** (#8e44ad): Wisteria from the Flat UI kit.
- **on-secondary** (#ffffff)
- **accent** (#c0392b): Pomegranate from the Flat UI kit.
- **on-accent** (#ffffff)
- **blue** (#1a6fb0): Belize hole (#2980b9) darkened so that white body text reaches 4.5:1.
- **on-blue** (#ffffff)
- **orange** (#f39c12): Orange from the Flat UI kit. Carries dark text.
- **on-orange** (#2c3e50)

## Typography

- **Plain, often light sans-serif.** Segoe UI in Metro, Helvetica Neue in iOS 7, and Lato or Open Sans on the web. Large headings are often light or regular weight. Zune and Windows Phone set titles in large lowercase letters.
- **display** ("Segoe UI", "Helvetica Neue", Lato, "Open Sans", Arial, sans-serif)
- **body** ("Segoe UI", "Helvetica Neue", Lato, "Open Sans", Arial, sans-serif)
- **mono** (Consolas, Menlo, monospace)

## Layout

- **Fills, not outlines.** Areas separate by a change of fill color and by space. Borders are rare or absent.
- **Tiles and bands.** Content sits in a grid of square or rectangular tiles, or in full-width color bands that stack down the page. Content replaces chrome.

## Shapes

- **No simulated depth.** No gradients, gloss, bevels, textures, or drop shadows. A button is a solid color rectangle, and a panel is a solid color field.
- **none** (0px)
- **sm** (4px): Controls, as in the Flat UI kit's 4 px base radius. Metro tiles stay square.
- **md** (4px)
- **lg** (0px)
- **pill** (4px)

## Do's and Don'ts

- Do: Fill buttons, tiles, and bands with solid colors. Change the fill on hover and press.
- Do: Use three to five saturated hues with a dark blue-gray for text and a cool pale gray for quiet areas.
- Do: Separate areas with color and space. Leave out borders on cards and panels.
- Do: Use one plain sans-serif. Set large headings in a light or regular weight and keep labels semibold.
- Do: Arrange content as tiles or full-width bands. Keep corners square, or round controls by 4 px or less.
- Do: Keep contrast at 4.5:1 for body text. Put dark text on light hues such as turquoise and white text on dark hues.
- Don't: use gradients, gloss, bevels, inner shadows, or textures.
- Don't: add drop shadows to cards or buttons. Shadows turn the page into Material Design.
- Don't: outline cards and tiles. Outlines turn the page into a wireframe or neo-brutalism.
- Don't: remove every signifier from links and buttons. NN/g found that flat elements without cues cause click uncertainty.
- Don't: put white text on light hues such as turquoise or yellow.
