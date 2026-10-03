---
name: "Skeuomorphism"
description: "A graphical user interface style that imitates physical objects and materials: stitched leather, linen, wood, felt, brushed metal, and ruled paper, with bevels, embossed text, and realistic shadows. It peaked in Apple’s iPhone OS and iOS 1–6 and Mac OS X Lion (2007–2013). The catalogue record covers this interface style, not the wider concept of a skeuomorph in pottery, architecture, or sound."
colors:
  bg: "#cdd0d5"
  surface: "#ffffff"
  subtle: "#e6e8eb"
  text: "#262626"
  muted: "#4c566c"
  border: "#9ea3aa"
  primary: "#2a5fd0"
  on-primary: "#ffffff"
  secondary: "#6d84a2"
  on-secondary: "#ffffff"
  accent: "#5e3b22"
  on-accent: "#f3e5c8"
  linen-thread: "#ffffff2e"
  linen-shade: "#0000000f"
  pinstripe: "#c5ccd4"
  pinstripe-light: "#cbd2d8"
  leather-dark: "#3d2614"
  leather-grain: "#00000026"
  stitch: "#e9d3a4"
  paper: "#fcf4b8"
  paper-rule: "#9dbbd6"
  paper-margin: "#d98b8b"
  wood: "#9a6535"
  wood-light: "#b07a45"
  wood-dark: "#6e4421"
  felt: "#2f6b3a"
  felt-fiber: "#ffffff14"
  metal: "#c8cacd"
  metal-line: "#ffffff59"
  metal-groove: "#0000000d"
  emboss-light: "#ffffffb3"
  emboss-dark: "#00000080"
  bar-edge: "#2d3642"
  pin: "#c8322b"
typography:
  display:
    fontFamily: "Helvetica Neue"
    fontSize: "68px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  heading:
    fontFamily: "Helvetica Neue"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0em"
  body:
    fontFamily: "Helvetica Neue"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Helvetica Neue"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.01em"
rounded:
  none: "0px"
  sm: "5px"
  md: "8px"
  lg: "12px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "18px"
  lg: "30px"
  xl: "50px"
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

A graphical user interface style that imitates physical objects and materials: stitched leather, linen, wood, felt, brushed metal, and ruled paper, with bevels, embossed text, and realistic shadows. It peaked in Apple’s iPhone OS and iOS 1–6 and Mac OS X Lion (2007–2013). The catalogue record covers this interface style, not the wider concept of a skeuomorph in pottery, architecture, or sound.

Moods: tactile, familiar, crafted, warm, ornate.

Full record: api/styles/skeuomorphism.json. Specimen: implementations/skeuomorphism/index.html.

## Colors

- **Material color.** Browns, creams, warm grays, and steel blue come from the materials. Saturated color is kept for small glossy buttons, badges, and pins.
- **bg** (#cdd0d5): Gray linen, the iOS 5–6 and Mac OS X Lion backdrop.
- **surface** (#ffffff): Grouped table cells.
- **subtle** (#e6e8eb)
- **text** (#262626)
- **muted** (#4c566c): Secondary label gray-blue.
- **border** (#9ea3aa)
- **primary** (#2a5fd0): Glossy iOS action blue.
- **on-primary** (#ffffff)
- **secondary** (#6d84a2): Navigation bar steel blue.
- **on-secondary** (#ffffff)
- **accent** (#5e3b22): Stitched leather brown.
- **on-accent** (#f3e5c8)
- **linen-thread** (#ffffff2e)
- **linen-shade** (#0000000f)
- **pinstripe** (#c5ccd4)
- **pinstripe-light** (#cbd2d8)
- **leather-dark** (#3d2614)
- **leather-grain** (#00000026)
- **stitch** (#e9d3a4)
- **paper** (#fcf4b8): Legal-pad yellow.
- **paper-rule** (#9dbbd6)
- **paper-margin** (#d98b8b)
- **wood** (#9a6535)
- **wood-light** (#b07a45)
- **wood-dark** (#6e4421)
- **felt** (#2f6b3a): Card-table felt.
- **felt-fiber** (#ffffff14)
- **metal** (#c8cacd)
- **metal-line** (#ffffff59)
- **metal-groove** (#0000000d)
- **emboss-light** (#ffffffb3): Letterpress highlight under dark text.
- **emboss-dark** (#00000080): Letterpress shade over light text.
- **bar-edge** (#2d3642)
- **pin** (#c8322b)

## Typography

- **Letterpress text.** Labels are pressed into the surface: dark text with a 1 px white shadow below, or light text with a 1 px dark shadow above. Helvetica Neue for interface text, with handwriting faces such as Marker Felt for notes.
- **display** ("Helvetica Neue", Helvetica, Arial, sans-serif)
- **body** ("Helvetica Neue", Helvetica, Arial, sans-serif)
- **mono** (Menlo, Monaco, "Courier New", monospace)
- **hand** ("Marker Felt", Noteworthy, "Chalkboard SE", "Comic Sans MS", cursive): Notes on iOS 6 used Marker Felt.
- **serif** (Georgia, "Times New Roman", serif)

## Layout

- **Object metaphors.** An app becomes the object it replaces: a desk calendar with leather binding and torn pages, a bookshelf, a legal pad, a Rolodex, a reel-to-reel tape deck, or a card table.

## Elevation & Depth

- **sm** (0px 1px 2px 0px #00000059, inset 0px 1px 0px 0px #ffffff66)
- **md** (0px 3px 8px 0px #00000066, inset 0px 1px 0px 0px #ffffff40)
- **lg** (0px 8px 20px 0px #00000073)
- **inset** (inset 0px 1px 3px 0px #00000066, 0px 1px 0px 0px #ffffff99)

## Shapes

- **Material textures.** Surfaces show a real material: linen, stitched leather, wood grain, green felt, brushed aluminium, or ruled paper. Textures tile across whole backgrounds.
- **Bevels and wells.** Buttons and bars have a top highlight line and a vertical gradient, often with a gloss break. Inputs and grouped tables sit in inset wells.
- **none** (0px)
- **sm** (5px)
- **md** (8px)
- **lg** (12px)
- **pill** (999px)

## Do's and Don'ts

- Do: Choose one physical object for each screen, such as a notepad, bookshelf, or desk calendar, and show its materials.
- Do: Tile a subtle material texture (linen, leather grain, wood, felt, or brushed metal) over large surfaces.
- Do: Give bars and buttons a vertical gradient, a 1 px top highlight, and a soft drop shadow.
- Do: Emboss labels: dark text with a 1 px light shadow below, or light text with a 1 px dark shadow above.
- Do: Put inputs and lists in inset wells with slightly rounded corners of about 5 to 10 px.
- Do: Use Helvetica Neue for interface text and a handwriting face only where the object has handwriting.
- Don't: let textures reduce text contrast. Keep text on a calm area of the material.
- Don't: copy a metaphor that makes an action harder, such as a page turn for simple scrolling.
- Don't: mix many materials on one screen without a physical reason.
- Don't: use hard offset shadows or thick black outlines.
- Don't: use pill-shaped glass buttons and sky gradients alone. That is Frutiger Aero.

Copyright (c) 2026 Switchback Solutions LLC. MIT License: https://field-guide-to-style.alec-5fe.workers.dev/rights.html#license
