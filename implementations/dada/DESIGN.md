---
name: "Dada"
description: "The printed graphic work of Dada (about 1916–1924): magazines, posters, broadsides, and invitations in Zürich, Berlin, Hannover, Cologne, Paris, and New York. Pages mix many unrelated typefaces, sizes, and angles from the jobbing printer’s case, and Berlin artists cut press photographs into photomontage. The movement also covers readymades, assemblage, sound poetry, and performance. This record covers its typographic collage and photomontage and treats the other branches as related work."
colors:
  bg: "#ebe3d0"
  surface: "#f4efe2"
  subtle: "#d8cdb5"
  text: "#151311"
  muted: "#4a443d"
  border: "#151311"
  primary: "#c8231b"
  on-primary: "#f6f0e2"
  secondary: "#151311"
  on-secondary: "#ebe3d0"
  accent: "#857d72"
  on-accent: "#151311"
typography:
  display:
    fontFamily: "Impact"
    fontSize: "176px"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Impact"
    fontSize: "46px"
    fontWeight: 700
    lineHeight: 0.84
    letterSpacing: "0em"
  body:
    fontFamily: "Georgia"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Courier New"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.45
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

The printed graphic work of Dada (about 1916–1924): magazines, posters, broadsides, and invitations in Zürich, Berlin, Hannover, Cologne, Paris, and New York. Pages mix many unrelated typefaces, sizes, and angles from the jobbing printer’s case, and Berlin artists cut press photographs into photomontage. The movement also covers readymades, assemblage, sound poetry, and performance. This record covers its typographic collage and photomontage and treats the other branches as related work.

Moods: irreverent, chaotic, ironic, experimental, rebellious, raw.

Full record: api/styles/dada.json. Specimen: implementations/dada/index.html.

## Colors

- **Black on newsprint, sometimes one red.** Most work is printed in black on cheap paper. Red is the usual second color. The grey of the halftone photograph is the third tone.
- **bg** (#ebe3d0): Cheap newsprint, slightly yellowed.
- **surface** (#f4efe2): A whiter pasted slip of paper.
- **subtle** (#d8cdb5): Darker newsprint for a second pasted layer.
- **text** (#151311): Printing black.
- **muted** (#4a443d)
- **border** (#151311)
- **primary** (#c8231b): Overprint red, the one strong hue.
- **on-primary** (#f6f0e2)
- **secondary** (#151311): Printing black, for solid blocks and reversed type.
- **on-secondary** (#ebe3d0)
- **accent** (#857d72): Halftone grey of a reproduced photograph. Not a hue.
- **on-accent** (#151311)

## Typography

- **Mixed cases.** One page or one line combines heavy grotesques, high-contrast romans, condensed gothics, and ornaments from the jobbing printer’s case. Sizes jump from caption to poster scale inside a line.
- **display** (Impact, Haettenschweiler, "Arial Black", sans-serif): Heavy poster grotesque from the jobbing case.
- **body** (Georgia, "Times New Roman", serif): Plain newspaper roman for running text.
- **mono** ("Courier New", Courier, monospace)
- **serif** (Didot, "Bodoni 72", "Bodoni MT", "Times New Roman", serif): High-contrast display roman, set against the grotesque.
- **condensed** ("Franklin Gothic Medium", "Arial Narrow", sans-serif): Condensed gothic for labels and small capitals.

## Layout

- **Lines at several angles.** Lines of type run at different angles, upside down, or vertical on one page. There is no shared grid or axis. Blocks overlap and crowd each other.
- **Printer’s material as image.** Rules, brackets, pointing hands, stock blocks, and ticket fragments become compositional elements, not only dividers.

## Shapes

- **Flat printed paper.** Letterpress and line block on paper, with pasted pieces in original collages. No gloss, gradient, or soft shadow.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Set the page in black on a warm newsprint color. Use red as the only strong hue.
- Do: Use at least three unrelated typefaces: a heavy grotesque, a high-contrast roman, and a condensed gothic. Change face, size, and case inside one heading.
- Do: Rotate headings, labels, and pasted slips to several different small angles.
- Do: Use black-and-white photographs cut to irregular straight-edged shapes, and paste type labels on them.
- Do: Use printer’s ornaments such as the pointing hand (☞), heavy rules, and brackets as visual elements.
- Do: Keep body text in a plain readable roman, so the collage stays in headings, labels, and images.
- Don't: erode, blur, or distress the letterforms. The disorder comes from arrangement, not from damaged type.
- Don't: use gradients, rounded corners, or soft shadows.
- Don't: add more than one strong hue beyond black and paper grey.
- Don't: align everything to one grid. A tidy collage loses the style.
- Don't: rotate or overlap body text or form controls so that they become hard to read or use.
