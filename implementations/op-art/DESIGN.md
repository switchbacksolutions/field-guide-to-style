---
name: "Op art"
description: "Optical art as a design style: hard-edged geometric patterns in black and white, such as parallel stripes, checkerboards, and concentric rings, set so close and so sharp that the eye sees vibration, swelling, and moiré. The movement peaked in 1964–1966 in painting and passed at once into fashion, textiles, and graphic design. This record covers that black-and-white graphic core. Color op painting (Anuszkiewicz, Riley after 1967) and kinetic art are related branches."
colors:
  bg: "#ffffff"
  surface: "#ffffff"
  subtle: "#e6e6e6"
  text: "#000000"
  muted: "#3d3d3d"
  border: "#000000"
  primary: "#000000"
  on-primary: "#ffffff"
  secondary: "#ffffff"
  on-secondary: "#000000"
  accent: "#6b6b6b"
  on-accent: "#ffffff"
typography:
  display:
    fontFamily: "Avenir Next Condensed"
    fontSize: "148px"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  heading:
    fontFamily: "Avenir Next Condensed"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "0em"
  body:
    fontFamily: "Helvetica Neue"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Helvetica Neue"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  none: "0px"
  sm: "0px"
  md: "0px"
  lg: "0px"
  pill: "9999px"
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

Optical art as a design style: hard-edged geometric patterns in black and white, such as parallel stripes, checkerboards, and concentric rings, set so close and so sharp that the eye sees vibration, swelling, and moiré. The movement peaked in 1964–1966 in painting and passed at once into fashion, textiles, and graphic design. This record covers that black-and-white graphic core. Color op painting (Anuszkiewicz, Riley after 1967) and kinetic art are related branches.

Moods: vibrating, high-contrast, precise, disorienting, mod.

Full record: api/styles/op-art.json. Specimen: implementations/op-art/index.html.

## Colors

- **Black and white.** Pure black on pure white, sometimes with a scale of grays. The maximum value contrast makes edges flicker. Color, when it appears, is one hue or a set of close tones, and it does not replace the black-and-white structure.
- **bg** (#ffffff)
- **surface** (#ffffff)
- **subtle** (#e6e6e6): Light gray: a second step in the scale.
- **text** (#000000)
- **muted** (#3d3d3d)
- **border** (#000000)
- **primary** (#000000): Black: the figure. Op art works at the maximum value contrast.
- **on-primary** (#ffffff)
- **secondary** (#ffffff): White: the ground, used as an inverted button and panel.
- **on-secondary** (#000000)
- **accent** (#6b6b6b): Mid gray: a step in Riley's gray scales, not a hue.
- **on-accent** (#ffffff)

## Typography

- **Plain sans-serif, patterned display.** Text is a neutral or condensed grotesque, set black on white. Display letters sometimes carry stripes or concentric outlines, as in Grignani’s work, but body text stays plain.
- **display** ("Avenir Next Condensed", Futura, "Helvetica Neue", "Arial Narrow", sans-serif)
- **body** ("Helvetica Neue", Helvetica, Arial, sans-serif)
- **mono** ("Helvetica Neue", Helvetica, Arial, sans-serif): Labels use the body grotesque. The style has no monospaced voice.

## Layout

- **Progression and distortion.** A regular pattern changes step by step: stripes narrow toward an edge, squares compress, or rings swell, so that the flat surface seems to bulge or sink. A field of one orientation meets a field of another, and the edge seems to float.
- **All-over field.** The pattern runs to the edges of the canvas, the dress, or the page. In graphic design, a large pattern panel sits beside plain type, or type is cut out of the pattern.

## Shapes

- **Hard edges and moiré.** Flat, sharp, even paint or print with no texture, gradient, or shadow. Two fine patterns laid over each other at a small offset make moiré fringes.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (9999px): Only for circles: discs and ring targets.

## Do's and Don'ts

- Do: Use pure black and pure white. Add grays only as steps in a scale.
- Do: Fill large panels edge to edge with one repeating pattern: stripes, checks, or rings.
- Do: Make the pattern change by steps, for example stripes that narrow or rings that swell, to suggest a bulge.
- Do: Put a field of one orientation inside a field of another, such as a horizontal-stripe disc on vertical stripes.
- Do: Overlap two fine patterns at a small offset for moiré in one place.
- Do: Put text on solid white or black panels with hard edges, never directly on the pattern.
- Do: Use a plain or condensed grotesque. Stripes inside large display letters are allowed.
- Do: Give patterns a fixed size so that the effect is the same at every width, and offer a calm alternative for people who are sensitive to it.
- Don't: set body text, form fields, or table cells on top of stripes or checks.
- Don't: use gradients, drop shadows, glass, or gloss.
- Don't: add illustrations, photographs of people, or ornament to the pattern.
- Don't: use several saturated hues. One accent at most.
- Don't: animate patterns quickly or flash them. Fast flicker can trigger seizures.

Copyright (c) 2026 Switchback Solutions LLC. MIT License: https://field-guide-to-style.alec-5fe.workers.dev/rights.html#license
