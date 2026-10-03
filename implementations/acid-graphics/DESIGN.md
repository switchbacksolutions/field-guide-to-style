---
name: "Acid graphics"
description: "A graphic trend of the mid-2010s onward, spread through Instagram, club posters, and record sleeves: chrome and liquid-metal lettering, warped, stretched, spiky, or blackletter type, wireframes and 3D renders, and dense compositions that borrow from 1990s rave flyers, often with a great deal of acid green. AIGA Eye on Design called it “acid graphics” in 2019. The Consumer Aesthetics Research Institute (CARI) lists it as Acidgrafix, also called Neu-Grunge. The name is loose: the works that Eye on Design shows also include flat-color blackletter posters and photo collages. This record covers the chrome-type core that CARI names. Flat-color club posters, the 1970s desert-sky branch, “Y3K” fashion chrome, and the rough “New Ugly” trend are related looks, not the core."
colors:
  bg: "#050505"
  surface: "#0f0f0f"
  subtle: "#1c1c1c"
  text: "#ececec"
  muted: "#a6a6a6"
  border: "#3d3d3d"
  primary: "#b4ff00"
  on-primary: "#050505"
  secondary: "#c8c8c8"
  on-secondary: "#050505"
  accent: "#ffffff"
  on-accent: "#050505"
  glow: "#b4ff00"
  shade: "#000000"
typography:
  display:
    fontFamily: "Old English Text MT"
    fontSize: "200px"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Old English Text MT"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: "0em"
  body:
    fontFamily: "Helvetica Neue"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Menlo"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.5
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
  lg: "24px"
  xl: "48px"
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

A graphic trend of the mid-2010s onward, spread through Instagram, club posters, and record sleeves: chrome and liquid-metal lettering, warped, stretched, spiky, or blackletter type, wireframes and 3D renders, and dense compositions that borrow from 1990s rave flyers, often with a great deal of acid green. AIGA Eye on Design called it “acid graphics” in 2019. The Consumer Aesthetics Research Institute (CARI) lists it as Acidgrafix, also called Neu-Grunge. The name is loose: the works that Eye on Design shows also include flat-color blackletter posters and photo collages. This record covers the chrome-type core that CARI names. Flat-color club posters, the 1970s desert-sky branch, “Y3K” fashion chrome, and the rough “New Ugly” trend are related looks, not the core.

Moods: dystopian, hedonistic, cynical, loud, nocturnal, futuristic, underground.

Full record: api/styles/acid-graphics.json. Specimen: implementations/acid-graphics/index.html.

## Colors

- **Black, chrome, and one hot accent.** The ground is usually black or near-black. One very saturated accent, most often acid or lime green, sits against the grays of the chrome. Eye on Design: “there's a hell of a lot of neon green”. In the works it shows, some posters use orange, red, or lilac instead, so treat green as typical, not required.
- **bg** (#050505)
- **surface** (#0f0f0f)
- **subtle** (#1c1c1c)
- **text** (#ececec)
- **muted** (#a6a6a6)
- **border** (#3d3d3d)
- **primary** (#b4ff00): Acid green: actions, links, and accents.
- **on-primary** (#050505)
- **secondary** (#c8c8c8): Mid chrome: the gray band of the metal gradient and secondary actions.
- **on-secondary** (#050505)
- **accent** (#ffffff): Chrome highlight: the white glint of the metal gradient.
- **on-accent** (#050505)
- **glow** (#b4ff00): Acid green glow for the display type.
- **shade** (#000000): Chrome horizon: the dark band in the metal gradient.

## Typography

- **Liquid chrome lettering.** Display words look cast in polished metal: gray-to-white gradients with a hard dark band at the horizon line, highlights, and drips or melted edges. Eye on Design: type that “takes on the appearance of viscously dripping liquid metal”.
- **Warped, stretched, and blackletter type.** Letters are stretched very wide or very tall, mirrored, set on curves, or bent through a mesh. Spiky blackletter and sharp, thorny custom letterforms are common. Eye on Design: type that is “warped, back to front, upside down”.
- **display** ("Old English Text MT", UnifrakturMaguntia, "Arial Black", "Helvetica Neue", Arial, "Liberation Sans", sans-serif): Blackletter where the system has one, otherwise a heavy sans that the specimen stretches.
- **body** ("Helvetica Neue", Arial, "Liberation Sans", "Nimbus Sans", sans-serif)
- **mono** (Menlo, Consolas, "DejaVu Sans Mono", monospace)

## Layout

- **Rave-flyer density.** Huge display words next to very small text: line-ups, dates, credits, and logos packed into the margins. CARI calls it “full of horror vacui”. Elements run to the edges and overlap.
- **Sharp and spiky.** Corners are square or cut to points. Thorny, tribal-tattoo-like shapes and stars with long spikes frame the type. There are almost no rounded capsules.

## Elevation & Depth

- **sm** (0px 0px 0px 1px #b4ff00): A hard acid-green edge line for fields and buttons.
- **md** (inset 0px 1px 0px 0px #ffffff59, inset 0px -1px 0px 0px #000000): Hard chrome bevel: a white top edge and a black bottom edge.
- **accent** (4px 4px 0px 0px #b4ff00): Hard acid-green offset for the featured pass.

## Shapes

- **Digital gloss, not dirt.** Surfaces are rendered, glossy, iridescent, or metallic. CARI notes “oddball textures”, but they are digital: noise, scans, or liquid effects, not photocopy grime.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Use a black or near-black ground. Use one hot accent, typically acid green, for accents, links, and actions.
- Do: Set the main display words in a chrome effect: a gray-to-white gradient with a hard dark band near the middle, clipped to the text.
- Do: Make the display words very large, and the supporting text small and dense, like a flyer line-up.
- Do: Stretch, skew, or mirror the display type with transforms, or use a blackletter face. Keep the body text in a plain, legible sans-serif.
- Do: Add a wireframe grid or mesh as a pattern on a real element behind the content.
- Do: Keep corners square or cut to points.
- Don't: round corners or use pill buttons. They read as Y2K.
- Don't: use cyan and magenta neon with monospace HUD labels. They read as cyberpunk.
- Don't: add a striped sunset or a grid horizon. They read as synthwave.
- Don't: put body text in chrome or in acid green on chrome. Keep it in a light gray with a contrast ratio of at least 7:1.
- Don't: mirror or warp text that people must read to act, such as prices, dates, and form labels.
- Don't: animate chrome or meshes continuously. Respect prefers-reduced-motion.
