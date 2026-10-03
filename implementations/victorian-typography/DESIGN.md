---
name: "Victorian typography"
description: "The display typography of nineteenth-century letterpress posters, playbills, broadsides, and handbills in Britain and the United States (about 1810–1890). The printer centres each line and sets it in a different face and size from the case: fat faces, slab serifs, sans-serifs, condensed theatre letters, and Tuscan or ornamented types, cut in wood for the large sizes. Brass rules, fleurons, and stock cuts divide the lines. This record covers the poster and jobbing core. Victorian book design, chromolithography, and the late “Artistic Printing” of the 1870s and 1880s are related branches."
colors:
  bg: "#efe4cc"
  surface: "#f6eedb"
  subtle: "#e3d3b0"
  text: "#1b1712"
  muted: "#4b4236"
  border: "#1b1712"
  primary: "#b3261e"
  on-primary: "#f6eedb"
  secondary: "#1b1712"
  on-secondary: "#f6eedb"
  accent: "#1f3a6e"
  on-accent: "#f6eedb"
typography:
  display:
    fontFamily: "Bodoni Poster"
    fontSize: "144px"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  heading:
    fontFamily: "Bodoni Poster"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "0.02em"
  body:
    fontFamily: "Century Schoolbook"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Courier New"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.18em"
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

The display typography of nineteenth-century letterpress posters, playbills, broadsides, and handbills in Britain and the United States (about 1810–1890). The printer centres each line and sets it in a different face and size from the case: fat faces, slab serifs, sans-serifs, condensed theatre letters, and Tuscan or ornamented types, cut in wood for the large sizes. Brass rules, fleurons, and stock cuts divide the lines. This record covers the poster and jobbing core. Victorian book design, chromolithography, and the late “Artistic Printing” of the 1870s and 1880s are related branches.

Moods: loud, showy, nostalgic, theatrical, commercial, handmade.

Full record: api/styles/victorian-typography.json. Specimen: implementations/victorian-typography/index.html.

## Colors

- **Black, with red or blue.** Black ink on white, buff, or tinted paper. The second colour is usually a red or a blue for one or two lines. Larger posters print colours from separate wood blocks.
- **bg** (#efe4cc): Buff poster paper.
- **surface** (#f6eedb)
- **subtle** (#e3d3b0)
- **text** (#1b1712)
- **muted** (#4b4236)
- **border** (#1b1712)
- **primary** (#b3261e): Vermilion: the usual second ink on bills.
- **on-primary** (#f6eedb)
- **secondary** (#1b1712): Black ink.
- **on-secondary** (#f6eedb)
- **accent** (#1f3a6e): Blue: the rarer third ink.
- **on-accent** (#f6eedb)

## Typography

- **A different face on every line.** One sheet uses five to ten display faces: fat face romans and italics, slab serifs (Egyptians), French Clarendons, sans-serifs, very condensed theatre letters, and Tuscan, outline, or shaded types. Most display lines are in capitals.
- **Width, not weight, fits the line.** Wood type came in widths from extra condensed to extended. The printer picks the width that makes a word fill the line, so a long name goes very narrow and a short word goes very wide.
- **display** ("Bodoni Poster", "Bodoni MT Black", Didot, "Bodoni 72", "Liberation Serif", "Times New Roman", serif): Fat face: an ultra-bold Didone for the main lines.
- **body** ("Century Schoolbook", Georgia, "DejaVu Serif", serif): Plain roman for small print.
- **mono** ("Courier New", Courier, "Liberation Mono", monospace)
- **slab** ("Rockwell Extra Bold", Rockwell, Clarendon, "DejaVu Serif", serif): Egyptian slab serif.
- **condensed** (Haettenschweiler, Impact, "Ubuntu Sans", "Arial Narrow", sans-serif): Condensed theatre gothic; set with font-stretch condensed.
- **ornamented** (Playbill, Algerian, "Rosewood Std", "Bitstream Charter", serif): Stand-in for Tuscan and ornamented wood letters.

## Layout

- **A centred stack of lines.** Every line is centred on one vertical axis. Each line fills the measure, so the line length and type size change from line to line. The most important words get the biggest line.
- **Brass rules and fleurons.** Thick-and-thin rules, short dashes, stars, pointing hands, and fleurons separate the lines. A border of type ornaments or a double rule often frames the sheet.

## Shapes

- **Impressed ink on paper.** Flat ink with the grain of the wood, worn edges, and uneven inking in the big letters. No gradient, gloss, or shadow except the printed drop shade of a shaded type.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Centre every heading, label, and short line on one axis.
- Do: Use at least five faces: a fat face, a slab serif, a condensed gothic, an ornamented or Tuscan face, and a plain roman for small text. Change the face from line to line.
- Do: Set display lines in capitals and size each line so it fills the measure.
- Do: Separate blocks with thick-and-thin rules, short centred dashes, and fleurons such as ❦ and ✦.
- Do: Print in black on a warm paper colour. Use one red for the most important lines, and at most one blue.
- Do: Keep body text in a readable roman at a normal size.
- Don't: rotate or overlap lines. The Victorian bill is noisy but orderly.
- Don't: use gradients, soft shadows, rounded corners, or photographs.
- Don't: use more than two inks beyond black.
- Don't: set long paragraphs in display faces or capitals.
- Don't: centre form controls and data tables so far that they become hard to scan.
