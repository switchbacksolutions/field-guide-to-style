---
name: "Pixel Art"
description: "Pictures and interfaces built from visible square pixels in a small palette, after the graphics of 8-bit and 16-bit computers, arcade machines, and game consoles. This record covers that core look in interfaces and graphics."
colors:
  bg: "#fff1e8"
  surface: "#fff1e8"
  subtle: "#ffccaa"
  text: "#1d2b53"
  muted: "#5f574f"
  border: "#000000"
  primary: "#ff004d"
  on-primary: "#000000"
  secondary: "#29adff"
  on-secondary: "#000000"
  accent: "#ffec27"
  on-accent: "#000000"
  grass: "#00e436"
  grass-dark: "#008751"
typography:
  display:
    fontFamily: "Fixedsys"
    fontSize: "72px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.02em"
  heading:
    fontFamily: "Fixedsys"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.04em"
  body:
    fontFamily: "Monaco"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Fixedsys"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "0px"
  md: "0px"
  lg: "0px"
  pill: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
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

Pictures and interfaces built from visible square pixels in a small palette, after the graphics of 8-bit and 16-bit computers, arcade machines, and game consoles. This record covers that core look in interfaces and graphics.

Moods: playful, nostalgic, crisp, game-like, handmade.

Full record: api/styles/pixel-art.json. Specimen: implementations/pixel-art/index.html.

## Colors

- **Small fixed palette.** About 8 to 16 saturated, hardware-like colors with black and a light ground. Shading is in flat palette steps or checkerboard dithering, not gradients.
- **bg** (#fff1e8)
- **surface** (#fff1e8)
- **subtle** (#ffccaa): Peach: alternate rows and the light dither step.
- **text** (#1d2b53): Night blue: text, and the ground of title screens and dialogue boxes.
- **muted** (#5f574f)
- **border** (#000000): Pixel outlines.
- **primary** (#ff004d)
- **on-primary** (#000000)
- **secondary** (#29adff)
- **on-secondary** (#000000)
- **accent** (#ffec27)
- **on-accent** (#000000)
- **grass** (#00e436): Light step of the tiled ground strip.
- **grass-dark** (#008751): Dark step of the tiled ground strip.

## Typography

- **Bitmap letters.** Monospaced or bitmap pixel faces in one weight, often in capitals, for headings, labels, and counters.
- **display** (Fixedsys, Terminal, Monaco, "Lucida Console", Consolas, "DejaVu Sans Mono", monospace): Bitmap faces first. Every fallback is monospaced.
- **body** (Monaco, "Lucida Console", Consolas, "DejaVu Sans Mono", "Liberation Mono", monospace)
- **mono** (Fixedsys, Terminal, Monaco, "Lucida Console", Consolas, "DejaVu Sans Mono", monospace)

## Layout

- **One pixel unit.** Every size, gap, outline, and step is a whole multiple of one enlarged pixel, often 4 px on screen.
- **Game screens.** Title screens, menu windows, dialogue boxes, score counters, and status bars organize the page.

## Elevation & Depth

- **sm** (4px 0px 0px 0px #000000, -4px 0px 0px 0px #000000, 0px 4px 0px 0px #000000, 0px -4px 0px 0px #000000): Stepped outline: four hard one-unit offsets leave notched corners.
- **md** (4px 0px 0px 0px #000000, -4px 0px 0px 0px #000000, 0px 4px 0px 0px #000000, 0px -4px 0px 0px #000000, inset 0px -4px 0px 0px #00000040): Stepped outline with a one-unit shade on the inside bottom. Move the shade to the top on press.
- **lg** (4px 0px 0px 0px #000000, -4px 0px 0px 0px #000000, 0px 4px 0px 0px #000000, 0px -4px 0px 0px #000000, inset 0px -4px 0px 0px #00000040, 8px 8px 0px 0px #000000): Raised window: stepped outline plus a two-unit drop step.

## Shapes

- **Stepped edges.** Frames are drawn pixel by pixel: hard outlines with notched corners and one-step bevels. No anti-aliasing, blur, or gloss.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Choose one pixel unit, for example 4 px, and make every size, outline, and gap a whole multiple of it.
- Do: Limit the palette to about 8 to 16 colors. Shade with palette steps or checkerboard dithering.
- Do: Draw frames with hard, unblurred outlines and notched corners. Give buttons a one-unit bevel that moves when pressed.
- Do: Enlarge pixel images by whole numbers and set image-rendering: pixelated.
- Do: Use a bitmap or monospaced face for headings and labels. Keep body text at a readable size and line length.
- Do: Animate in steps, and stop the animation when the user asks for reduced motion.
- Don't: blur, smooth, or anti-alias edges, shadows, or enlarged sprites.
- Don't: use smooth gradients, glows, or rounded corners.
- Don't: set long body text in a small pixel font.
- Don't: mix pixel sizes in one view. A sprite drawn with 2 px pixels next to one drawn with 8 px pixels breaks the grid.
- Don't: run a photograph through a pixelate filter and call it pixel art.

Copyright (c) 2026 Switchback Solutions LLC. MIT License: https://field-guide-to-style.alec-5fe.workers.dev/rights.html#license
