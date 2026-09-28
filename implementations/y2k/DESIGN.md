---
name: "Y2K aesthetic"
description: "The techno-optimist look of the late 1990s and early 2000s: chrome and silver surfaces, translucent candy-colored plastic, blobby capsule shapes, glows, and wide techno type. The Consumer Aesthetics Research Institute and its founder Evan Collins collected and named it. Since about 2020 “Y2K” also means 2000s fashion in general. This record covers the retrofuturist core, which Wikipedia says is sometimes called Cybercore."
colors:
  bg: "#dfe4ea"
  surface: "#f4f6f9"
  subtle: "#c9d0d9"
  text: "#0d1330"
  muted: "#3c4566"
  border: "#8e97a6"
  primary: "#0079a8"
  on-primary: "#ffffff"
  secondary: "#ff6a13"
  on-secondary: "#0d1330"
  accent: "#a6e22e"
  on-accent: "#0d1330"
  grape: "#8a3ffc"
  pink: "#ff3ea5"
  ice: "#8ee6ff"
typography:
  display:
    fontFamily: "Eurostile Extended"
    fontSize: "76px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
  heading:
    fontFamily: "Eurostile Extended"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
  body:
    fontFamily: "Verdana"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "OCR A Std"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.2em"
rounded:
  none: "0px"
  sm: "10px"
  md: "22px"
  lg: "36px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "22px"
  lg: "36px"
  xl: "60px"
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

The techno-optimist look of the late 1990s and early 2000s: chrome and silver surfaces, translucent candy-colored plastic, blobby capsule shapes, glows, and wide techno type. The Consumer Aesthetics Research Institute and its founder Evan Collins collected and named it. Since about 2020 “Y2K” also means 2000s fashion in general. This record covers the retrofuturist core, which Wikipedia says is sometimes called Cybercore.

Moods: techno-optimistic, shiny, playful, futuristic.

Full record: api/styles/y2k.json. Specimen: implementations/y2k/index.html.

## Colors

- **Silver with electric accents.** Silver, white, and icy blue carry the surface. Lime, orange, hot pink, and purple appear as bright accents.
- **bg** (#dfe4ea): Cool silver.
- **surface** (#f4f6f9)
- **subtle** (#c9d0d9)
- **text** (#0d1330)
- **muted** (#3c4566)
- **border** (#8e97a6): Brushed steel edge.
- **primary** (#0079a8): Bondi blue, from the 1998 iMac casing.
- **on-primary** (#ffffff)
- **secondary** (#ff6a13): Tangerine.
- **on-secondary** (#0d1330)
- **accent** (#a6e22e): Lime.
- **on-accent** (#0d1330)
- **grape** (#8a3ffc)
- **pink** (#ff3ea5)
- **ice** (#8ee6ff): Icy blue for glows.

## Typography

- **Techno and bubble type.** Wide extended sans-serifs such as Eurostile and Microgramma, rounded or inflated letters, and pixel or OCR faces at small sizes. Headings are often uppercase and widely spaced.
- **display** ("Eurostile Extended", "Microgramma D Extended", Microgramma, "Bank Gothic", Krungthep, "Arial Black", sans-serif)
- **body** (Verdana, Tahoma, Geneva, sans-serif)
- **mono** ("OCR A Std", "OCR A Extended", "Andale Mono", Menlo, monospace)

## Layout

- **Blobs and capsules.** Curves, pills, droplets, and soft organic “blobjects”. Sharp corners are rare.
- **Interface as device.** Panels frame content like a device screen or a spacecraft console, with thin technical lines, small coded labels, and capsule controls.

## Elevation & Depth

- **glow** (0px 0px 22px 2px #8ee6ffb3): Halo, not a drop shadow: the light comes from the object.
- **glow-lime** (0px 0px 18px 1px #a6e22ecc)
- **glow-tangerine** (0px 0px 26px 2px #ff6a13a6)

## Shapes

- **Chrome and mirror.** Silver metallic gradients with a hard highlight line, reflective text and logos, and lens flares.
- **Translucent candy plastic.** See-through colored casings, as on the 1998 iMac G3, in blue, tangerine, lime, grape, and pink. Frosted or glittered finishes are common.
- **none** (0px)
- **sm** (10px)
- **md** (22px)
- **lg** (36px)
- **pill** (999px)

## Do's and Don'ts

- Do: Use silver chrome gradients with a hard highlight line for bars, frames, and headings.
- Do: Give panels a translucent candy color, such as Bondi blue, tangerine, or lime, with a light inner glow.
- Do: Round corners generously. Use capsules, pills, and blob shapes.
- Do: Set headings in a wide techno sans-serif, uppercase and widely spaced. Use a pixel or OCR face for small labels.
- Do: Make light come from objects: use glows with no offset instead of drop shadows.
- Do: Add small futuristic motifs: sparkle stars, orbit rings, loading bars, coded labels.
- Don't: use nature imagery such as water, grass, or clouds as the theme. That is Frutiger Aero.
- Don't: use square gray window bevels or sunset grids. That is Vaporwave.
- Don't: let iridescent rainbow film dominate. It was rarer in the period than in the revival.
- Don't: put body text on chrome or saturated plastic without checking contrast.
- Don't: use serif, script, or condensed grotesque display type.
