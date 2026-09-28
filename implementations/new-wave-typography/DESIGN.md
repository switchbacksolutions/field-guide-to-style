---
name: "New Wave typography"
description: "A typographic approach that started at the Basel School of Design around 1968, when Wolfgang Weingart took the tools of the International Typographic Style and broke its grid. Type stays sans-serif, but its spacing, weight, angle, and alignment change inside one composition, and dot screens, rules, and film layers pile up around it. Students such as April Greiman and Dan Friedman took it to the United States."
colors:
  bg: "#f1efe9"
  surface: "#f1efe9"
  subtle: "#d9d6ce"
  text: "#111111"
  muted: "#4a4a48"
  border: "#111111"
  primary: "#e4007c"
  on-primary: "#ffffff"
  secondary: "#0094d4"
  on-secondary: "#111111"
  accent: "#ffe000"
  on-accent: "#111111"
typography:
  display:
    fontFamily: "Helvetica Neue"
    fontSize: "150px"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.04em"
  heading:
    fontFamily: "Helvetica Neue"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "0.3em"
  body:
    fontFamily: "Helvetica Neue"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Helvetica Neue"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.5em"
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

A typographic approach that started at the Basel School of Design around 1968, when Wolfgang Weingart took the tools of the International Typographic Style and broke its grid. Type stays sans-serif, but its spacing, weight, angle, and alignment change inside one composition, and dot screens, rules, and film layers pile up around it. Students such as April Greiman and Dan Friedman took it to the United States.

Moods: kinetic, rebellious, layered, experimental, intuitive.

Full record: api/styles/new-wave-typography.json. Specimen: implementations/new-wave-typography/index.html.

## Colors

- **Black plus process colors.** Weingart’s Basel work is mostly black and grey on paper, with cyan, magenta, or yellow film layers. Greiman’s California work adds pastels such as pink, turquoise, and lavender.
- **bg** (#f1efe9): Uncoated offset paper.
- **surface** (#f1efe9)
- **subtle** (#d9d6ce): Grey screen tint.
- **text** (#111111)
- **muted** (#4a4a48)
- **border** (#111111)
- **primary** (#e4007c): Process magenta: an overprinted film layer.
- **on-primary** (#ffffff)
- **secondary** (#0094d4): Process cyan: a second film layer.
- **on-secondary** (#111111)
- **accent** (#ffe000): Process yellow, used in small bars.
- **on-accent** (#111111)

## Typography

- **Swiss grotesques, set loose.** Akzidenz-Grotesk, Univers, and Helvetica, as in the Swiss style. The difference is the handling: very wide or uneven letterspacing, several weights inside one word or line, and very large type next to very small type.
- **display** ("Helvetica Neue", Helvetica, "Arial Black", Arial, sans-serif)
- **body** ("Helvetica Neue", Helvetica, Arial, sans-serif)
- **mono** ("Helvetica Neue", Helvetica, Arial, sans-serif)

## Layout

- **Broken grid.** Blocks shift off the column lines. Lines of type step down in a staircase, tilt at angles that are not right angles, and change between flush left, flush right, and centered in one composition.
- **Layers and overlaps.** Type, screens, and images overlap. Transparent film layers overprint, so a shape can sit half on top of a headline.
- **Heavy rules and small marks.** Thick black bars, short rules, small squares, and bullets act as punctuation and point the eye through the layout.

## Shapes

- **Dot screens and line screens.** Coarse halftone dots, ruled line screens, and grey tints fill panels and bars. They come from the film and screen material of offset lithography.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Use one grotesque sans-serif family. Change its weight, size, and letterspacing inside headings.
- Do: Set headings and labels with wide letterspacing, from 0.2em to 0.5em, and keep the display line tight.
- Do: Break the grid in a few places: indent lines in steps, rotate a label or number, and change the alignment of one block.
- Do: Fill panels and bars with dot screens or line screens made from repeating gradients.
- Do: Add thick black bars and small squares as punctuation.
- Do: Let a screen or color block overlap part of a heading.
- Do: Keep body text flush left and readable. Put the disorder in display type and structure.
- Don't: use rounded corners, soft shadows, or glossy gradients.
- Don't: use serif, script, or decorative display faces.
- Don't: distress, blur, or break the letterforms themselves.
- Don't: rotate or overlap body text, form fields, or table data.
- Don't: align everything to one grid.
