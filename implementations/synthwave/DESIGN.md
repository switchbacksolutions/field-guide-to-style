---
name: "Synthwave"
description: "The visual side of the synthwave music microgenre of the late 2000s and 2010s, usually called the Outrun aesthetic after the 1986 Sega game Out Run: a dark night sky, a striped retrosun on the horizon, a glowing magenta laser grid that recedes to a vanishing point, chrome and airbrush-script logotypes, and 1980s sports cars and palm trees, in magenta, cyan, and violet. Wikipedia describes outrun as a term for “retro 1980s aesthetics such as VHS tracking artefacts, magenta neon, and gridlines”. Unlike vaporwave, it celebrates its sources without irony and keeps a polished, high-contrast finish."
colors:
  bg: "#0d0221"
  surface: "#160536"
  subtle: "#2a0e5c"
  text: "#f5ecff"
  muted: "#c2b0e8"
  border: "#ff2bd6"
  primary: "#ff2bd6"
  on-primary: "#0d0221"
  secondary: "#2de2e6"
  on-secondary: "#0d0221"
  accent: "#ffb000"
  on-accent: "#0d0221"
  violet: "#7a2cff"
  horizon: "#4a0d67"
  sun-top: "#ffe45c"
  chrome-light: "#eaf6ff"
  chrome-mid: "#6fa8ff"
  chrome-dark: "#1b1446"
  chrome-glint: "#ffc2ec"
  panel: "#160536b3"
typography:
  display:
    fontFamily: "Futura"
    fontSize: "128px"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "0.02em"
  heading:
    fontFamily: "Futura"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "0.08em"
  body:
    fontFamily: "Avenir Next"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Eurostile"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.24em"
rounded:
  none: "0px"
  sm: "0px"
  md: "2px"
  lg: "2px"
  pill: "999px"
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

The visual side of the synthwave music microgenre of the late 2000s and 2010s, usually called the Outrun aesthetic after the 1986 Sega game Out Run: a dark night sky, a striped retrosun on the horizon, a glowing magenta laser grid that recedes to a vanishing point, chrome and airbrush-script logotypes, and 1980s sports cars and palm trees, in magenta, cyan, and violet. Wikipedia describes outrun as a term for “retro 1980s aesthetics such as VHS tracking artefacts, magenta neon, and gridlines”. Unlike vaporwave, it celebrates its sources without irony and keeps a polished, high-contrast finish.

Moods: nostalgic, cinematic, energetic, nocturnal, retrofuturist.

Full record: api/styles/synthwave.json. Specimen: implementations/synthwave/index.html.

## Colors

- **Neon on night.** Deep black, navy, and violet grounds carry magenta, cyan, and violet light. The sun adds yellow and orange. Colors glow rather than fill.
- **bg** (#0d0221): Night sky behind the grid.
- **surface** (#160536)
- **subtle** (#2a0e5c)
- **text** (#f5ecff)
- **muted** (#c2b0e8)
- **border** (#ff2bd6)
- **primary** (#ff2bd6): Neon magenta: grid lines, borders, glows.
- **on-primary** (#0d0221)
- **secondary** (#2de2e6): Neon cyan: the second tube color.
- **on-secondary** (#0d0221)
- **accent** (#ffb000): Sun orange-yellow.
- **on-accent** (#0d0221)
- **violet** (#7a2cff)
- **horizon** (#4a0d67): Sky color just above the horizon.
- **sun-top** (#ffe45c)
- **chrome-light** (#eaf6ff)
- **chrome-mid** (#6fa8ff)
- **chrome-dark** (#1b1446)
- **chrome-glint** (#ffc2ec)
- **panel** (#160536b3): Panel fill at 70% opacity: the sky shows through.

## Typography

- **Chrome logotype and neon script.** Heavy italic capitals rendered as chrome, with a sky-blue top, a hard horizon line, and a pink reflection below, often paired with a glowing airbrush or brush script. Secondary text is wide, spaced techno capitals.
- **display** (Futura, "Avenir Next Condensed", "Arial Black", "Helvetica Neue", sans-serif)
- **body** ("Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif)
- **mono** (Eurostile, Microgramma, "Bank Gothic", "Arial Narrow", sans-serif): Wide techno caps for labels. Not a monospace face; synthwave labels are not terminal text.
- **script** ("Brush Script MT", "Segoe Script", "Snell Roundhand", cursive): Airbrush-style script for a second word under the chrome logotype.

## Layout

- **Horizon and vanishing point.** A flat plane, usually a laser grid, recedes to a central vanishing point under a striped sun or a skyline. Compositions are symmetrical and centered on the horizon.
- **Neon outlines.** Panels and buttons are dark, square boxes outlined with a thin glowing line, like a neon sign or a vector display.

## Elevation & Depth

- **sm** (0px 0px 10px 0px #ff2bd6): Neon tube glow: centered, blurred, no offset.
- **md** (0px 0px 4px 0px #ff2bd6, 0px 0px 22px 2px #ff2bd680): Panel glow with a tight core and a wide halo.
- **cyan** (0px 0px 4px 0px #2de2e6, 0px 0px 20px 2px #2de2e680)

## Shapes

- **Glow and gloss.** Neon tube glows, chrome highlights, star fields, and lens flares. The finish is clean and high-definition. VHS scan lines appear as an accent, not as decay.
- **none** (0px)
- **sm** (0px)
- **md** (2px)
- **lg** (2px)
- **pill** (999px)

## Do's and Don'ts

- Do: Use a near-black navy-to-violet sky gradient as the page background, warming toward magenta at the horizon.
- Do: Put a striped sun on the horizon of the hero and a receding magenta laser grid below it.
- Do: Set display headings in heavy italic capitals with a chrome gradient: light top, hard horizon line at the middle, pink reflection below.
- Do: Outline panels and buttons with a 1 px neon line and a centered, blurred glow. Keep the corners square.
- Do: Use magenta and cyan as the two neon colors, and yellow-orange only for the sun and for figures such as prices.
- Do: Keep body text light on the dark part of the sky or on a dark translucent panel.
- Don't: use pastel or faded colors as the base. That reads as vaporwave.
- Don't: add glitch decay, Windows 95 windows, or classical statues.
- Don't: use offset or hard drop shadows. Neon glows are centered and blurred.
- Don't: put body text on the sun, the grid, or the bright horizon band.
- Don't: set long text in script or chrome type. Keep them for one or two words.
- Don't: animate the grid or flicker the neon for users who prefer reduced motion.

Copyright (c) 2026 Switchback Solutions LLC. MIT License: https://field-guide-to-style.alec-5fe.workers.dev/rights.html#license
