---
name: "Vienna Secession"
description: "The style of the Vienna Secession, the artists’ association founded in 1897 by Klimt, Hoffmann, Moser, Olbrich, and Wagner, and of the Wiener Werkstätte workshops that Hoffmann and Moser founded in 1903: black and white surfaces, squares and grids of small squares, symmetrical framed compositions, and gold, applied to posters, the magazine Ver Sacrum, buildings, furniture, silver, and textiles. This record covers the geometric phase from about 1899. The early floral Secession work belongs to Art Nouveau."
colors:
  bg: "#faf8f2"
  surface: "#ffffff"
  subtle: "#ece8dc"
  text: "#111111"
  muted: "#55524a"
  border: "#111111"
  primary: "#111111"
  on-primary: "#faf8f2"
  secondary: "#faf8f2"
  on-secondary: "#111111"
  accent: "#b08a2e"
  on-accent: "#111111"
typography:
  display:
    fontFamily: "Avenir Next Condensed"
    fontSize: "84px"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "0em"
  heading:
    fontFamily: "Avenir Next Condensed"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "0.01em"
  body:
    fontFamily: "Baskerville"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Avenir Next Condensed"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.04em"
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

The style of the Vienna Secession, the artists’ association founded in 1897 by Klimt, Hoffmann, Moser, Olbrich, and Wagner, and of the Wiener Werkstätte workshops that Hoffmann and Moser founded in 1903: black and white surfaces, squares and grids of small squares, symmetrical framed compositions, and gold, applied to posters, the magazine Ver Sacrum, buildings, furniture, silver, and textiles. This record covers the geometric phase from about 1899. The early floral Secession work belongs to Art Nouveau.

Moods: geometric, austere, elegant, precise, refined.

Full record: api/styles/vienna-secession.json. Specimen: implementations/vienna-secession/index.html.

## Colors

- **Black, white, and gold.** Black on white paper carries most designs. Gold leaf is the one luxury (Klimt, the Secession dome). Some posters add one flat accent colour, never a full spectrum.
- **bg** (#faf8f2): White paper, as in Ver Sacrum and the Werkstätte catalogues.
- **surface** (#ffffff)
- **subtle** (#ece8dc)
- **text** (#111111): Printer's black.
- **muted** (#55524a)
- **border** (#111111)
- **primary** (#111111): Black, the main colour of the square and the checkerboard.
- **on-primary** (#faf8f2)
- **secondary** (#faf8f2): White, the other half of the checkerboard.
- **on-secondary** (#111111)
- **accent** (#b08a2e): Gold leaf, used sparingly (Klimt, the Secession dome).
- **on-accent** (#111111)

## Typography

- **Capitals fitted to a block.** Lettering is hand-drawn capitals, often condensed or squared, set close and stretched to fill a rectangle. Body text in Ver Sacrum and Werkstätte printing is a plain roman.
- **display** ("Avenir Next Condensed", "DIN Condensed", "Arial Narrow", "Roboto Condensed", sans-serif)
- **body** (Baskerville, Georgia, "Times New Roman", serif)
- **mono** ("Avenir Next Condensed", "DIN Condensed", "Arial Narrow", sans-serif)

## Layout

- **The square as module.** Squares and cubes organize the design, from posters and book pages to lattice silver and windows divided into small squares. Hoffmann used them so much that he was called Quadratl-Hoffmann, “Square Hoffmann”.
- **Central axis and framed fields.** Pages, posters, and façades are symmetrical. Text and images sit in rectangles outlined by thin black lines, ornament stays in the frame and in bands, and a wide margin of plain paper surrounds the block.

## Shapes

- **Checkerboard and square lattice.** Black and white checks and grids of small squares fill borders, bands, floors, and fabrics, as in the Fledermaus cabaret floor (1907). Surfaces are flat, without shading, relief, or gloss.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Use a white paper ground, black for text, rules, and solid blocks, and gold for one or two accents.
- Do: Build from squares: square fact boxes, square number badges, and a grid module based on the square.
- Do: Put a black and white checkerboard or square lattice in bands, borders, or one framed field.
- Do: Center headings and key blocks on one axis, and outline panels with thin black lines.
- Do: Set headings in condensed capitals with tight letter spacing and tight line spacing. Set body text in a roman serif.
- Do: Use a group of three small squares as a divider or a bullet.
- Don't: use whiplash curves or flowing plant stems. That points to Art Nouveau.
- Don't: use sunbursts, chevrons, stepped setbacks, or wide letter spacing. That points to Art Deco.
- Don't: round corners, and do not add gradients or drop shadows.
- Don't: use more than one strong colour beside gold.
- Don't: cover every surface with checks. Keep ornament in frames and bands, and keep wide plain areas.
