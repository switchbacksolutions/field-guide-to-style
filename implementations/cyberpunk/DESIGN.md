---
name: "Cyberpunk"
description: "The visual look of the cyberpunk science-fiction genre, as designers apply it to posters, games, and interfaces: a near-black night city lit by saturated cyan, magenta, and warning-yellow neon, monospace terminal text, heads-up-display frames and brackets, and glitch interference. The name comes from Bruce Bethke’s 1983 story and the 1980s fiction of William Gibson. Blade Runner (1982) and Akira set its look. This record covers the screen and graphic look. Cybergoth fashion, techwear, and cyberdelic art are related branches."
colors:
  bg: "#07080d"
  surface: "#0d1119"
  subtle: "#151b27"
  text: "#d8f3ff"
  muted: "#93a9bf"
  border: "#1f6f86"
  primary: "#fcee0a"
  on-primary: "#07080d"
  secondary: "#00e5ff"
  on-secondary: "#07080d"
  accent: "#ff2a6d"
  on-accent: "#07080d"
  glow: "#00e5ff"
  shade: "#000000"
typography:
  display:
    fontFamily: "Bahnschrift"
    fontSize: "96px"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0.02em"
  heading:
    fontFamily: "Bahnschrift"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0.06em"
  body:
    fontFamily: "Cascadia Mono"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Cascadia Mono"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.16em"
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
  lg: "28px"
  xl: "48px"
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

The visual look of the cyberpunk science-fiction genre, as designers apply it to posters, games, and interfaces: a near-black night city lit by saturated cyan, magenta, and warning-yellow neon, monospace terminal text, heads-up-display frames and brackets, and glitch interference. The name comes from Bruce Bethke’s 1983 story and the 1980s fiction of William Gibson. Blade Runner (1982) and Akira set its look. This record covers the screen and graphic look. Cybergoth fashion, techwear, and cyberdelic art are related branches.

Moods: dystopian, gritty, nocturnal, high-tech, rebellious, tense.

Full record: api/styles/cyberpunk.json. Specimen: implementations/cyberpunk/index.html.

## Colors

- **Neon on black.** A near-black, blue-black ground lit by small areas of saturated cyan, magenta, and acid or warning yellow. Envato: “hot pink neon contrasted with the cool metallic blues and grays”.
- **bg** (#07080d)
- **surface** (#0d1119)
- **subtle** (#151b27)
- **text** (#d8f3ff)
- **muted** (#93a9bf)
- **border** (#1f6f86)
- **primary** (#fcee0a): Acid yellow: primary actions and warnings.
- **on-primary** (#07080d)
- **secondary** (#00e5ff): Cyan: frames, links, and glow.
- **on-secondary** (#07080d)
- **accent** (#ff2a6d): Magenta: emphasis and glitch offsets.
- **on-accent** (#07080d)
- **glow** (#00e5ff): Glow color for frames.
- **shade** (#000000)

## Typography

- **Terminal and HUD type.** Monospace text for data, labels, and body, and condensed or squared sans-serif capitals for display. Labels carry codes, numbers, and status words.
- **display** (Bahnschrift, "DIN Condensed", "Arial Narrow", "Roboto Condensed", sans-serif)
- **body** ("Cascadia Mono", "JetBrains Mono", Consolas, Menlo, "DejaVu Sans Mono", "Courier New", monospace)
- **mono** ("Cascadia Mono", "JetBrains Mono", Consolas, Menlo, "DejaVu Sans Mono", "Courier New", monospace)

## Layout

- **Heads-up-display frames.** Thin 1 px frames, corner brackets, chamfered corners, tick marks, and numbered panels, as on a targeting screen or a terminal window.
- **Dense data panels.** Information sits in many small, labelled panels and tables, like a dashboard or a wall of signs. Diagonal cuts and hazard stripes break the grid.

## Elevation & Depth

- **sm** (0px 0px 6px 0px #00e5ff80): Faint glow for buttons and fields.
- **md** (0px 0px 14px 0px #00e5ff59, inset 0px 0px 2px 0px #00e5ff26): Neon glow for panels: an outer halo and a faint inner one.
- **accent** (0px 0px 16px 0px #ff2a6d73): Magenta glow for the featured panel.

## Shapes

- **Glow, not shadow.** Lines, frames, and letters give off light: blurred halos with no offset, as from neon tubes and screens. There are no drop shadows, because the light source is the object.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Use a near-black, slightly blue background, and keep neon colors to lines, labels, and small fills.
- Do: Pick two or three neon colors: cyan, magenta, and acid yellow. Give each one a job, for example yellow for primary actions and cyan for frames.
- Do: Make frames glow with a blurred box shadow that has no offset.
- Do: Set body text, labels, and data in a monospace font. Set display headings in condensed sans-serif capitals.
- Do: Frame panels with 1 px lines, corner brackets, and chamfered corners, and number or code them like HUD readouts.
- Do: Use color-channel offsets, scan lines, or hazard stripes for emphasis, in small areas.
- Don't: round corners or use pill shapes.
- Don't: use drop shadows with an offset. Light comes from the elements themselves.
- Don't: use pastel colors or sunset gradients. They read as vaporwave or synthwave.
- Don't: put long body text in neon colors. Keep it in a pale, cool off-white with a contrast ratio of at least 7:1.
- Don't: add Japanese or Chinese text that you cannot read or check. Use short, correct phrases, or none.
- Don't: animate flicker or glitch continuously. Respect prefers-reduced-motion.
