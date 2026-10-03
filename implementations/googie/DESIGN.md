---
name: "Googie"
description: "A futurist style of American commercial architecture and signage of about 1945 to the early 1970s, influenced by car culture, jets, the Atomic Age, and the Space Age: upswept roofs, acute angles, boomerangs, starbursts, atoms, and flying saucers, in steel, glass, and neon. This record covers the sign and graphic core that roadside businesses used to catch the eye of drivers. The buildings are its source, and the wider Atomic Age) design of textiles and household goods is a related branch."
colors:
  bg: "#0f1a33"
  surface: "#18284a"
  subtle: "#223761"
  text: "#fbf3e2"
  muted: "#b8c3d9"
  border: "#2fd3c6"
  primary: "#ff4f9a"
  on-primary: "#0f1a33"
  secondary: "#2fd3c6"
  on-secondary: "#0f1a33"
  accent: "#ff8a1f"
  on-accent: "#0f1a33"
  highlight: "#ffd23f"
typography:
  display:
    fontFamily: "Futura"
    fontSize: "112px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
  heading:
    fontFamily: "Futura"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.04em"
  body:
    fontFamily: "Avenir Next"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Futura"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.16em"
rounded:
  none: "0px"
  sm: "4px"
  md: "10px"
  lg: "24px"
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

A futurist style of American commercial architecture and signage of about 1945 to the early 1970s, influenced by car culture, jets, the Atomic Age, and the Space Age: upswept roofs, acute angles, boomerangs, starbursts, atoms, and flying saucers, in steel, glass, and neon. This record covers the sign and graphic core that roadside businesses used to catch the eye of drivers. The buildings are its source, and the wider Atomic Age) design of textiles and household goods is a related branch.

Moods: exuberant, optimistic, futuristic, retro, flashy, roadside.

Full record: api/styles/googie.json. Specimen: implementations/googie/index.html.

## Colors

- **Neon on a night sky.** Turquoise, flamingo pink, tangerine, and atomic yellow, saturated and flat, with white and chrome. At night the colors glow on dark sky; by day they sit on white walls. Getty AAT names intensive use of steel, glass, and neon.
- **bg** (#0f1a33): Night sky over the strip.
- **surface** (#18284a)
- **subtle** (#223761)
- **text** (#fbf3e2): Warm white of a lit plastic panel.
- **muted** (#b8c3d9)
- **border** (#2fd3c6)
- **primary** (#ff4f9a): Flamingo pink neon.
- **on-primary** (#0f1a33)
- **secondary** (#2fd3c6): Turquoise sign paint.
- **on-secondary** (#0f1a33)
- **accent** (#ff8a1f): Tangerine.
- **on-accent** (#0f1a33)
- **highlight** (#ffd23f): Atomic yellow for starbursts.

## Typography

- **Neon script and sign capitals.** The name is in a connected script, as a neon tube would draw it, next to bold sans-serif capitals on a panel. Letters can sit on tilted or starred panels. Interpretation from roadside signs; to confirm with references.
- **display** (Futura, "Century Gothic", "Avenir Next", "Trebuchet MS", sans-serif)
- **body** ("Avenir Next", "Century Gothic", "Trebuchet MS", "Helvetica Neue", sans-serif)
- **mono** (Futura, "Century Gothic", "Trebuchet MS", sans-serif)
- **script** ("Brush Script MT", "Snell Roundhand", "Segoe Script", cursive): Neon script for one sign word at a time.

## Layout

- **Upswept angles.** Roofs, sign panels, and pylons slope up at an angle, like an inverted wedge or a tail fin. Edges are diagonal or cantilevered, so forms seem to lift off the ground. Wikipedia and Getty AAT both name bold angular forms.
- **The building is a sign.** One large sign panel or pylon carries the name and is meant to be read from a moving car. Several themes and shapes stack on one composition; Haskell’s third rule asks for more than one structural system.

## Shapes

- **Illuminated plastic and chrome.** Wikipedia lists illuminated plastic paneling, plate glass, stainless steel, and neon. Color areas are flat sign paint and lit panels, outlined by bright tubes.
- **none** (0px)
- **sm** (4px)
- **md** (10px)
- **lg** (24px)
- **pill** (999px)

## Do's and Don'ts

- Do: Use a deep night-blue ground, warm white text, and three or four saturated sign colors: turquoise, flamingo pink, tangerine, and atomic yellow.
- Do: Put the name on a sign panel with an upswept, angled edge, cut with clip-path, and set one word in a connected script.
- Do: Outline key panels, buttons, and inputs with a bright line and a soft glow in the same color, like a neon tube.
- Do: Scatter four- and eight-point starbursts as ornament, and repeat a small star pattern on one real panel.
- Do: Tilt sign panels and card tops a few degrees, so the page has diagonals, not only horizontal bands.
- Do: Use boomerang and atom shapes for bullets, badges, and dividers.
- Don't: use gradients, sunset grids, or chrome reflections. That points to Synthwave, Vaporwave, or Y2K.
- Don't: use muted earthy colors or cut-paper overprint. That points to mid-century modern.
- Don't: use only rounded bands with horizontal speed lines. That points to Streamline Moderne.
- Don't: center everything on a vertical axis with stepped outlines. That points to Art Deco.
- Don't: put glow on body text. Keep long text plain and readable.
- Don't: make lights blink without a reduced-motion fallback.
