---
name: "Bento grid"
description: "An interface and presentation style of the 2020s: content sits in rounded, borderless tiles of different sizes that fill one grid with equal, narrow gutters, like the compartments of a Japanese bento box. Each tile holds one fact, often a very large number or a product image with a short label. Apple’s keynote summary slides, with rounded tiles from 2020, and its product pages made the look popular, and designers named it “bento” from about 2022. This record covers that core look. The same tile layout drawn in other styles, for example with thick black outlines or frosted glass, belongs to those styles."
colors:
  bg: "#f5f5f7"
  surface: "#ffffff"
  subtle: "#e8e8ed"
  text: "#1d1d1f"
  muted: "#6e6e73"
  border: "#d2d2d7"
  primary: "#0071e3"
  on-primary: "#ffffff"
  secondary: "#1d1d1f"
  on-secondary: "#f5f5f7"
  accent: "#bf4800"
  on-accent: "#ffffff"
typography:
  display:
    fontFamily: "-apple-system"
    fontSize: "152px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  heading:
    fontFamily: "-apple-system"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "-apple-system"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.47
  label:
    fontFamily: "-apple-system"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: "0em"
rounded:
  none: "0px"
  sm: "12px"
  md: "20px"
  lg: "28px"
  pill: "980px"
spacing:
  xs: "8px"
  sm: "16px"
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

An interface and presentation style of the 2020s: content sits in rounded, borderless tiles of different sizes that fill one grid with equal, narrow gutters, like the compartments of a Japanese bento box. Each tile holds one fact, often a very large number or a product image with a short label. Apple’s keynote summary slides, with rounded tiles from 2020, and its product pages made the look popular, and designers named it “bento” from about 2022. This record covers that core look. The same tile layout drawn in other styles, for example with thick black outlines or frosted glass, belongs to those styles.

Moods: organized, premium, confident, calm, modern.

Full record: api/styles/bento-grid.json. Specimen: implementations/bento-grid/index.html.

## Colors

- **Neutral ground, few accents.** The ground and most tiles are white, light grey, black, or dark grey. One or two tiles use a solid accent color or a product color. Apple’s dark slides add gradient-filled type for key words.
- **bg** (#f5f5f7)
- **surface** (#ffffff)
- **subtle** (#e8e8ed)
- **text** (#1d1d1f)
- **muted** (#6e6e73)
- **border** (#d2d2d7)
- **primary** (#0071e3): Link and action blue of Apple product pages.
- **on-primary** (#ffffff)
- **secondary** (#1d1d1f): Dark tile on the light ground.
- **on-secondary** (#f5f5f7)
- **accent** (#bf4800): One warm product-color tile.
- **on-accent** (#ffffff)

## Typography

- **Very large numerals.** A neo-grotesque sans-serif, usually the system font, in bold weights with tight letter spacing. Key numbers (battery hours, chip names, prices) are set many times the body size and fill their tile.
- **display** (-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", "Helvetica Neue", Arial, sans-serif)
- **body** (-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "Helvetica Neue", Arial, sans-serif)
- **mono** ("SF Mono", ui-monospace, Menlo, Consolas, monospace)

## Layout

- **Tiles of unequal size.** One grid holds tiles that span different numbers of columns and rows. The largest tile carries the main point, and the smaller tiles around it carry details. The tiles fill the whole frame with no gaps left over.
- **Narrow, equal gutters.** All tiles are separated by the same narrow gutter, about 8–20 px on screens. The gutter is the only divider.
- **One fact per tile.** Each tile is self-contained: one number, one feature, one image, or one quote, with a short label. Text is brief, and there is a lot of empty space inside each tile.

## Shapes

- **Soft, plain tiles.** Tiles have large corner radii (about 16–32 px), no outline, and no shadow, or a shadow so faint that it does not read as depth. A tile differs from the ground only by a tonal step, for example white on light grey, or dark grey on black.
- **none** (0px)
- **sm** (12px)
- **md** (20px)
- **lg** (28px)
- **pill** (980px)

## Do's and Don'ts

- Do: Lay out the section on one CSS grid and give tiles different column and row spans. Make one tile clearly the largest and put the main point in it.
- Do: Use one narrow gutter (12–20 px) between all tiles, and the same padding inside every tile.
- Do: Give every tile the same large radius (20–32 px), no border, and no shadow. Separate tiles from the ground by tone: white on light grey, or dark grey on black.
- Do: Put one fact in each tile: a large number with a short label, one feature with one sentence, or one product image.
- Do: Set key numbers in a bold system sans-serif at five to ten times the body size, with tight negative letter spacing.
- Do: Keep most tiles neutral. Give one or two tiles a solid accent color.
- Do: On small screens, stack the tiles in one column in order of importance.
- Don't: give every tile the same size. A grid of equal cards is not a bento grid.
- Don't: outline tiles or lift them with shadows.
- Don't: fill tiles with paragraphs. Move long text out of the grid.
- Don't: mix corner radii or gutter widths inside one grid.
- Don't: leave holes in the grid. The tiles must fill the frame.
- Don't: use the grid order alone to carry meaning. Keep the source order logical, because screen readers and small screens read it in that order.

Copyright (c) 2026 Switchback Solutions LLC. MIT License: https://field-guide-to-style.alec-5fe.workers.dev/rights.html#license
