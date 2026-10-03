---
name: "Art Deco"
description: "The decorative style named after the 1925 Paris Exposition internationale des arts décoratifs et industriels modernes: geometric and stylized ornament, symmetry, stepped and radiating forms, and luxurious or new materials such as ebony, lacquer, chrome, and gold leaf, applied to everything from skyscrapers to jewelry."
colors:
  bg: "#101418"
  surface: "#161c22"
  subtle: "#1f2830"
  text: "#f1e8d4"
  muted: "#b9ad94"
  border: "#c9a24a"
  primary: "#c9a24a"
  on-primary: "#101418"
  secondary: "#1d5c50"
  on-secondary: "#f1e8d4"
  accent: "#e0c67a"
  on-accent: "#101418"
typography:
  display:
    fontFamily: "Futura, Avenir Next Condensed, Gill Sans, Century Gothic, sans-serif"
    fontSize: "88px"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "0.12em"
  heading:
    fontFamily: "Futura, Avenir Next Condensed, Gill Sans, Century Gothic, sans-serif"
    fontSize: "34px"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "0.16em"
  body:
    fontFamily: "Gill Sans, Avenir Next, Futura, Trebuchet MS, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Futura, Gill Sans, Century Gothic, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.24em"
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
  xl: "72px"
  2xl: "112px"
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

The decorative style named after the 1925 Paris Exposition internationale des arts décoratifs et industriels modernes: geometric and stylized ornament, symmetry, stepped and radiating forms, and luxurious or new materials such as ebony, lacquer, chrome, and gold leaf, applied to everything from skyscrapers to jewelry.

Moods: glamorous, luxurious, geometric, formal, optimistic.

Full record: api/styles/art-deco.json. Specimen: implementations/art-deco/index.html.

## Colors

- **Metal on dark ground.** Gold, brass, silver, and chrome against black lacquer, ebony, or deep jewel tones, with ivory for relief. Early Deco also used the bright colors of the Fauves and the Ballets Russes.
- **bg** (#101418): Black lacquer with a trace of blue.
- **surface** (#161c22)
- **subtle** (#1f2830)
- **text** (#f1e8d4): Ivory.
- **muted** (#b9ad94)
- **border** (#c9a24a)
- **primary** (#c9a24a): Gold leaf and brass.
- **on-primary** (#101418)
- **secondary** (#1d5c50): Deep jade, the one jewel tone.
- **on-secondary** (#f1e8d4)
- **accent** (#e0c67a): Light gold for highlights on the rays.
- **on-accent** (#101418)

## Typography

Each fontFamily in the front matter is a CSS font stack, first choice first.

- **Spaced geometric capitals.** Headings and labels use capitals with wide letter spacing. Letters are geometric, condensed, or high in contrast.
- **display** (Futura, "Avenir Next Condensed", "Gill Sans", "Century Gothic", sans-serif)
- **body** ("Gill Sans", "Avenir Next", Futura, "Trebuchet MS", sans-serif)
- **mono** (Futura, "Gill Sans", "Century Gothic", sans-serif)

## Layout

- **Symmetry and stepped forms.** Compositions are symmetrical about a central axis. Outlines step back in tiers, like a ziggurat or a setback skyscraper.
- **Framed and centered.** Content sits in frames of thin parallel rules and stepped corners. Text blocks center on the axis.

## Shapes

- **Luxury and new materials.** Ebony, ivory, lacquer, mother of pearl, and gold leaf, alongside chrome, stainless steel, and bakelite. Surfaces are polished and edges are crisp.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Use a near-black or deep jewel-tone ground with one metallic gold accent and ivory text.
- Do: Center headings, ledes, and key blocks on one vertical axis.
- Do: Set headings and labels in capitals with letter spacing of 0.1em or more.
- Do: Frame sections with thin double or parallel rules in the accent color.
- Do: Add one sunburst, fan, or chevron field as a repeated ornament, for example behind the hero.
- Do: Give frames and buttons stepped or chamfered corners.
- Don't: use rounded corners, soft shadows, or glass effects.
- Don't: use more than one strong hue in addition to the metallic accent.
- Don't: use flowing plant curves. That points to Art Nouveau.
- Don't: lay out the page asymmetrically. Keep the central axis.
- Don't: use ornament at random. Each ornament repeats in a regular rhythm.
