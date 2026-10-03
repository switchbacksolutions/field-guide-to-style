---
name: "Italian Futurism"
description: "The art and graphic design of the Italian Futurist movement (1909–1944), launched by F. T. Marinetti’s manifesto: lines of force, shapes repeated to show motion, words set free from the line in mixed typefaces and sizes, and bright flat inks in advertising and books. The movement also covers literature, music, theatre, architecture, and a Russian branch. This record covers the Italian painted and printed work and treats the other branches as related styles."
colors:
  bg: "#f1e9d6"
  surface: "#f1e9d6"
  subtle: "#ddd2bb"
  text: "#15130f"
  muted: "#4d463c"
  border: "#15130f"
  primary: "#d9261c"
  on-primary: "#fbf4e4"
  secondary: "#0f7a4c"
  on-secondary: "#fbf4e4"
  accent: "#f2b20c"
  on-accent: "#15130f"
typography:
  display:
    fontFamily: "Impact"
    fontSize: "176px"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.01em"
  heading:
    fontFamily: "Impact"
    fontSize: "46px"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "0.02em"
  body:
    fontFamily: "Bodoni 72"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Courier New"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.12em"
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

The art and graphic design of the Italian Futurist movement (1909–1944), launched by F. T. Marinetti’s manifesto: lines of force, shapes repeated to show motion, words set free from the line in mixed typefaces and sizes, and bright flat inks in advertising and books. The movement also covers literature, music, theatre, architecture, and a Russian branch. This record covers the Italian painted and printed work and treats the other branches as related styles.

Moods: fast, loud, mechanical, exuberant, aggressive, theatrical.

Full record: api/styles/futurism.json. Specimen: implementations/futurism/index.html.

## Colors

- **Several loud inks.** Paintings use prismatic, divisionist color. Printed work uses red, black, and one or two more strong inks such as yellow, green, or blue on paper. Depero’s advertising uses flat, bright fields.
- **bg** (#f1e9d6): Unbleached book paper.
- **surface** (#f1e9d6)
- **subtle** (#ddd2bb): Screened black on paper, for panels and table rows.
- **text** (#15130f)
- **muted** (#4d463c)
- **border** (#15130f)
- **primary** (#d9261c): Futurist red, the loudest ink.
- **on-primary** (#fbf4e4)
- **secondary** (#0f7a4c): Depero's advertising green. A second strong ink, not a background.
- **on-secondary** (#fbf4e4)
- **accent** (#f2b20c): Chrome yellow for force lines and motion echoes.
- **on-accent** (#15130f)

## Typography

- **Words in freedom.** Words leave the straight line. They run at many angles, in curves, and in many typefaces and sizes on one page: bold grotesques beside Bodoni italics and typewriter type. Onomatopoeia and numbers are set very large.
- **Type as image.** The arrangement of the letters shows the subject: an explosion, a train, the noise of a battle (Marinetti’s Zang Tumb Tumb, 1914). Depero builds figures and buildings from capital letters.
- **display** (Impact, Haettenschweiler, "Arial Black", sans-serif): Heavy poster grotesque for shouted words.
- **body** ("Bodoni 72", "Bodoni MT", Didot, Georgia, serif): The Bodoni of Italian book printing, which words-in-freedom pages set against grotesques.
- **mono** ("Courier New", Courier, monospace): Typewriter type for dates, times, and labels.
- **grotesque** ("Helvetica Neue", Arial, "Liberation Sans", sans-serif): A plain grotesque for small capitals and navigation.
- **slab** (Rockwell, Clarendon, "Courier 10 Pitch", serif): A slab or Egyptian face, a fifth voice in the typographic mix.

## Layout

- **Lines of force.** Sharp wedges, rays, and curves fan out from a point or cut across the picture to show energy and direction. Planes interpenetrate instead of sitting side by side.

## Elevation & Depth

- **sm** (-12px 0px 0px 0px #f2b20c, -24px 0px 0px 0px #d9261c): Two hard echoes trailing to the left: the shape repeated along its path of motion, after Balla. Not depth.
- **md** (-14px 6px 0px 0px #f2b20c, -28px 12px 0px 0px #d9261c, -42px 18px 0px 0px #15130f): Three hard echoes along a diagonal path, for cards and panels.

## Shapes

- **Flat print, hard edges.** Printed work is flat letterpress or lithography with hard edges and no soft shadows. Paintings use broken, divided brushwork.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Mix at least four type families on the page: a heavy grotesque for shouted words, a Bodoni-style italic, a typewriter face, and a slab or a plain grotesque.
- Do: Tilt headings, labels, and cards at several different small angles, between about 2 and 12 degrees, in both directions.
- Do: Show motion by repetition: give key shapes two or three hard echoes offset along one path, in the accent colors.
- Do: Use lines of force: sharp red and yellow wedges and rays that fan from one edge behind the hero.
- Do: Use a paper ground with red, black, and one or two more strong inks such as yellow or green.
- Do: Set one word or number much larger than everything around it.
- Don't: tilt body text or form fields. Tilt headings, labels, numbers, and boxes only.
- Don't: use soft or blurred shadows. Echoes are hard copies of the shape, not depth.
- Don't: use gradients, rounded corners, or glossy surfaces.
- Don't: use one type family for everything. The page then reads as Constructivism or Swiss style.
- Don't: use Fascist emblems, such as the fasces, or war imagery as decoration. Many Futurists supported Fascism, and the movement glorified war.
- Don't: let echoes cover text or reduce the contrast of controls.

Copyright (c) 2026 Switchback Solutions LLC. MIT License: https://field-guide-to-style.alec-5fe.workers.dev/rights.html#license
