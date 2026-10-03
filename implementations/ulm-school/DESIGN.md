---
name: "Ulm School"
description: "The functionalist product and graphic design of the Ulm School of Design (HfG Ulm, 1953–1968) and its work for Braun: white and light-grey housings with gently rounded corners, perforated speaker faces, small precise labels in a grotesque, and color kept to one switch or dial. This record covers the product core of Hans Gugelot, Dieter Rams, and the Braun program. Otl Aicher’s Ulm graphic design is close to the International Typographic Style and is treated as a related branch."
colors:
  bg: "#e4e3df"
  surface: "#f5f5f2"
  subtle: "#d5d4cf"
  text: "#2b2b29"
  muted: "#5f5e59"
  border: "#bdbcb6"
  primary: "#d9531e"
  on-primary: "#ffffff"
  secondary: "#3b3b39"
  on-secondary: "#f5f5f2"
  accent: "#d9531e"
  on-accent: "#ffffff"
typography:
  display:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "52px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  heading:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "30px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0em"
  body:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Akzidenz-Grotesk"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  sm: "4px"
  md: "7px"
  lg: "10px"
  pill: "7px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "24px"
  lg: "40px"
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

The functionalist product and graphic design of the Ulm School of Design (HfG Ulm, 1953–1968) and its work for Braun: white and light-grey housings with gently rounded corners, perforated speaker faces, small precise labels in a grotesque, and color kept to one switch or dial. This record covers the product core of Hans Gugelot, Dieter Rams, and the Braun program. Otl Aicher’s Ulm graphic design is close to the International Typographic Style and is treated as a related branch.

Moods: calm, precise, restrained, rational, quiet.

Full record: api/styles/ulm-school.json. Specimen: implementations/ulm-school/index.html.

## Colors

- **White, grey, and one signal.** Housings are white, light grey, or anthracite. The Design Museum describes Rams’ Braun products as “made in white and grey” with “only splash of colour” from switches and dials.
- **bg** (#e4e3df)
- **surface** (#f5f5f2)
- **subtle** (#d5d4cf)
- **text** (#2b2b29)
- **muted** (#5f5e59)
- **border** (#bdbcb6)
- **primary** (#d9531e): Signal orange: the one colored control, as on a Braun switch.
- **on-primary** (#ffffff)
- **secondary** (#3b3b39): Anthracite: the dark housing variant.
- **on-secondary** (#f5f5f2)
- **accent** (#d9531e): Same signal as primary. The style allows one hue.
- **on-accent** (#ffffff)

## Typography

- **Small, exact labels.** A grotesque in small sizes, often lowercase, marks each control. Labels sit beside the control they describe. Headings are medium weight, not heavy.
- **display** (Akzidenz-Grotesk, "Helvetica Neue", Helvetica, Arial, sans-serif)
- **body** (Akzidenz-Grotesk, "Helvetica Neue", Helvetica, Arial, sans-serif)
- **mono** (Akzidenz-Grotesk, "Helvetica Neue", Helvetica, Arial, sans-serif)

## Layout

- **Rounded-rectangle housings.** Bodies are flat rectangular boxes with a small, even corner radius. Panels meet at clean seams. Parts are modular units that line up, as in Rams’ 606 shelving “series of interchangeable units”.
- **Controls in rows.** Knobs, keys, and scales align on one axis. Large calm surfaces surround a dense, ordered control area.

## Shapes

- **Perforated faces.** Speaker and vent areas are fields of small round holes or fine parallel slots in a regular grid. The perforation is the only texture.
- **none** (0px)
- **sm** (4px)
- **md** (7px)
- **lg** (10px)
- **pill** (7px)

## Do's and Don'ts

- Do: Use a light-grey page with white or off-white panels, and dark grey text instead of black.
- Do: Give panels and buttons a small, equal corner radius of about 6 to 8 px.
- Do: Use one accent color, for one primary control only.
- Do: Add one field of small round dots in a regular grid, like a speaker grille, on a real element.
- Do: Set small grotesque labels, often lowercase, next to the values or controls that they name.
- Do: Align controls and data in rows and columns with generous empty space around them.
- Don't: use more than one accent hue.
- Don't: use gradients, gloss, or drop shadows. Surfaces are matte.
- Don't: use heavy or very large display type. Headings are medium weight.
- Don't: use square, hard-edged blocks or pill shapes everywhere. The radius is small and even.
- Don't: add illustration or ornament.
