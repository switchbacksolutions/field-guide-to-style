---
name: "Mid-century modern"
description: "The graphic and illustrative side of mid-century modern design (about 1945–1969): flat, overlapping shapes in mustard, burnt orange, teal, and olive on warm paper, simplified figures and objects, biomorphic and atomic motifs, and a loose mix of sans-serif, slab, and brush lettering. This record covers that graphic core. The architecture and furniture of the same name are related branches."
colors:
  bg: "#f3ead6"
  surface: "#fbf5e8"
  subtle: "#e8dcc0"
  text: "#2a2522"
  muted: "#5a4f45"
  border: "#2a2522"
  primary: "#c9582b"
  on-primary: "#fbf5e8"
  secondary: "#1d7a78"
  on-secondary: "#fbf5e8"
  accent: "#dea133"
  on-accent: "#2a2522"
  olive: "#8a8f2e"
  on-olive: "#fbf5e8"
typography:
  display:
    fontFamily: "Futura, Century Gothic, Avenir Next, Trebuchet MS, sans-serif"
    fontSize: "104px"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  heading:
    fontFamily: "Futura, Century Gothic, Avenir Next, Trebuchet MS, sans-serif"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0em"
  body:
    fontFamily: "Iowan Old Style, Palatino, Book Antiqua, Georgia, serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Futura, Century Gothic, Avenir Next, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0.12em"
rounded:
  none: "0px"
  sm: "4px"
  md: "24px"
  lg: "72px"
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

The graphic and illustrative side of mid-century modern design (about 1945–1969): flat, overlapping shapes in mustard, burnt orange, teal, and olive on warm paper, simplified figures and objects, biomorphic and atomic motifs, and a loose mix of sans-serif, slab, and brush lettering. This record covers that graphic core. The architecture and furniture of the same name are related branches.

Moods: optimistic, warm, playful, crafted, modern.

Full record: api/styles/mid-century-modern.json. Specimen: implementations/mid-century-modern/index.html.

## Colors

- **Warm secondary palette.** Mustard, burnt orange, teal, olive, and brick on cream or off-white paper, with charcoal for type. Colors are flat and slightly muted, as in two- to four-color offset and screen printing.
- **bg** (#f3ead6): Warm cream paper.
- **surface** (#fbf5e8)
- **subtle** (#e8dcc0)
- **text** (#2a2522): Charcoal ink, not pure black.
- **muted** (#5a4f45)
- **border** (#2a2522)
- **primary** (#c9582b): Burnt orange.
- **on-primary** (#fbf5e8)
- **secondary** (#1d7a78): Teal.
- **on-secondary** (#fbf5e8)
- **accent** (#dea133): Mustard.
- **on-accent** (#2a2522)
- **olive** (#8a8f2e): Olive, the fourth print color.
- **on-olive** (#fbf5e8)

## Typography

Each fontFamily in the front matter is a CSS font stack, first choice first.

- **Mixed, playful lettering.** Geometric sans-serif or slab headings next to brush script or hand lettering. Words may bounce off the baseline or tilt. Body text is a plain serif or sans-serif.
- **display** (Futura, "Century Gothic", "Avenir Next", "Trebuchet MS", sans-serif)
- **body** ("Iowan Old Style", Palatino, "Book Antiqua", Georgia, serif)
- **mono** (Futura, "Century Gothic", "Avenir Next", sans-serif)
- **script** ("Brush Script MT", "Snell Roundhand", "Segoe Script", cursive): Brush lettering for one word at a time.

## Layout

- **Poster composition.** One large image or shape group carries the page. Text sits beside it on open paper. Layouts are asymmetric but less strict than a Swiss grid.
- **Pattern as a band.** Textile-like repeats of small stars, dots, or plant forms fill one band or panel, not the whole page.

## Shapes

- **Overprint.** Flat shapes overlap, and the overlap makes a third, darker color. Registration is loose, and edges can look cut or printed.
- **none** (0px)
- **sm** (4px)
- **md** (24px)
- **lg** (72px)
- **pill** (999px)

## Do's and Don'ts

- Do: Use a warm cream or off-white ground with charcoal text.
- Do: Use three or four flat, slightly muted hues: mustard, burnt orange, teal, and olive.
- Do: Build the hero from overlapping flat shapes: circles, half circles, pebbles, and one starburst. Let overlaps darken with a multiply blend.
- Do: Pair a geometric sans-serif or slab heading with one brush-script word.
- Do: Give panels one or two large rounded corners, like a leaf or pebble, and keep the other corners square.
- Do: Use a small textile-like repeat in one band only.
- Don't: use gradients, gloss, or drop shadows.
- Don't: use neon, fluorescent, or pure primary colors.
- Don't: outline every shape in black. Shapes meet by color.
- Don't: fill the whole page with pattern. Keep open paper around the shapes.
- Don't: use a strict Swiss grid with only one accent. That points to the International Typographic Style.
