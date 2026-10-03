---
name: "Arts and Crafts"
description: "The British-led design reform movement of about 1880 to 1920, named after the Arts and Crafts Exhibition Society (1887), that set handwork and honest materials against factory production. This record covers its graphic and pattern core, the wallpapers and textiles of Morris & Co. and C. F. A. Voysey and the private-press books of the Kelmscott Press: flat, stylized plants in dense repeats, framed text blocks, and heavy old-style type. The American Craftsman and Glasgow branches are treated as related styles."
colors:
  bg: "#eee6d3"
  surface: "#f6f0e1"
  subtle: "#e2d5b8"
  text: "#1e1a15"
  muted: "#594f42"
  border: "#1e1a15"
  primary: "#9b3324"
  on-primary: "#f6f0e1"
  secondary: "#24497f"
  on-secondary: "#f6f0e1"
  accent: "#4b7a2b"
  on-accent: "#f6f0e1"
typography:
  display:
    fontFamily: "Hoefler Text"
    fontSize: "82px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0em"
  heading:
    fontFamily: "Hoefler Text"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0em"
  body:
    fontFamily: "Iowan Old Style"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Hoefler Text"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
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
  md: "22px"
  lg: "36px"
  xl: "56px"
  2xl: "88px"
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

The British-led design reform movement of about 1880 to 1920, named after the Arts and Crafts Exhibition Society (1887), that set handwork and honest materials against factory production. This record covers its graphic and pattern core, the wallpapers and textiles of Morris & Co. and C. F. A. Voysey and the private-press books of the Kelmscott Press: flat, stylized plants in dense repeats, framed text blocks, and heavy old-style type. The American Craftsman and Glasgow branches are treated as related styles.

Moods: handmade, earnest, medieval, dense, rustic.

Full record: api/styles/arts-and-crafts.json. Specimen: implementations/arts-and-crafts/index.html.

## Colors

- **Vegetable-dye palette.** Indigo blue, madder red, leaf and olive green, weld yellow, and walnut brown on unbleached linen or cream paper. Morris rejected aniline dyes for indigo, madder, and walnut, so colours are deep but not bright.
- **bg** (#eee6d3): Unbleached linen and handmade paper.
- **surface** (#f6f0e1)
- **subtle** (#e2d5b8)
- **text** (#1e1a15): Dense printer’s ink.
- **muted** (#594f42)
- **border** (#1e1a15): Ink rules that frame text blocks.
- **primary** (#9b3324): Madder red, the rubric colour of private-press books.
- **on-primary** (#f6f0e1)
- **secondary** (#24497f): Indigo, the ground of discharge-printed textiles.
- **on-secondary** (#f6f0e1)
- **accent** (#4b7a2b): Leaf green, from weld over woad.
- **on-accent** (#f6f0e1)

## Typography

- **Heavy old-style roman and blackletter.** Dark, sturdy type after 15th-century printers: Morris’s Golden type is a Venetian roman, and his Troy and Chaucer types are gothic. Text is black, and red marks headings, initials, and side notes.
- **display** ("Hoefler Text", "Iowan Old Style", Palatino, "Palatino Linotype", "Book Antiqua", Georgia, serif)
- **body** ("Iowan Old Style", Palatino, "Palatino Linotype", "Book Antiqua", Georgia, serif)
- **mono** ("Hoefler Text", Palatino, "Palatino Linotype", "Book Antiqua", Georgia, serif)

## Layout

- **Dense all-over repeat.** Pattern covers the whole surface on a hidden lattice, a trellis, a meander, or a turnover repeat, so that stems and leaves interlace with little plain ground showing. The repeat is symmetrical and static rather than flowing.
- **Framed text block.** In private-press books the text is a dense rectangular block with narrow word spaces and wide outer margins, framed by a floral border and opened by a decorated initial. Craftsman and Roycroft print frames text in heavy ruled boxes. Corners are square.

## Shapes

- **Visible handwork.** Hand-block printing, woodcut, embroidery, and hand-hammered metal. Ashbee’s Guild of Handicraft used plain hammered silver and simple stone settings; furniture shows its oak and its joints.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px): Frames are rectilinear, like a woodcut border or a joined box.

## Do's and Don'ts

- Do: Use an unbleached linen or cream ground with near-black ink for text, and madder red for headings, initials, and key numbers.
- Do: Fill one or two large fields with a flat, dense repeat of leaves and flowers on a lattice, in indigo, green, and red.
- Do: Frame text blocks with a double rule or a patterned border, and keep every corner square.
- Do: Set text in a sturdy old-style serif in mixed case. Open sections with a decorated initial or a fleuron such as ❦ or ❧.
- Do: Use italic for labels and secondary text instead of spaced capitals.
- Don't: use whiplash curves or arched panels. That points to Art Nouveau.
- Don't: use gradients, gloss, blur, or drop shadows. Pattern and colour stay flat.
- Don't: use bright aniline or fluorescent colours.
- Don't: shade or model the motifs. Draw them flat with outlines.
- Don't: round corners or use pill buttons.
- Don't: set headings in a sans-serif or in widely spaced capitals.

Copyright (c) 2026 Switchback Solutions LLC. MIT License: https://field-guide-to-style.alec-5fe.workers.dev/rights.html#license
