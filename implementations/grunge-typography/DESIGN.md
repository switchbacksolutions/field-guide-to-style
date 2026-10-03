---
name: "Grunge typography"
description: "An expressive typography of the 1990s, led by David Carson’s art direction of the magazine Ray Gun (1992–1995). Letters are torn, eroded, blurred, and redrawn. Several unrelated typefaces collide in one layout, lines are packed until they overlap, and type sits over murky, photocopied, and collaged textures. Legibility is secondary to mood."
colors:
  bg: "#d6cdb8"
  surface: "#e8e1d0"
  subtle: "#b9ad93"
  text: "#1a1814"
  muted: "#4d463b"
  border: "#1a1814"
  primary: "#a13c22"
  on-primary: "#efe8d8"
  secondary: "#1a1814"
  on-secondary: "#e8e1d0"
  accent: "#c39a3c"
  on-accent: "#1a1814"
typography:
  display:
    fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif"
    fontSize: "196px"
    fontWeight: 400
    lineHeight: 0.78
    letterSpacing: "-0.07em"
  heading:
    fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif"
    fontSize: "72px"
    fontWeight: 400
    lineHeight: 0.78
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Times New Roman, Times, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "American Typewriter, Courier New, Courier, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.02em"
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
  xl: "60px"
  2xl: "100px"
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

An expressive typography of the 1990s, led by David Carson’s art direction of the magazine Ray Gun (1992–1995). Letters are torn, eroded, blurred, and redrawn. Several unrelated typefaces collide in one layout, lines are packed until they overlap, and type sits over murky, photocopied, and collaged textures. Legibility is secondary to mood.

Moods: raw, angsty, chaotic, intuitive, dirty.

Full record: api/styles/grunge-typography.json. Specimen: implementations/grunge-typography/index.html.

## Colors

- **Murky, subdued ink.** Black on newsprint or dirty off-white, with muted rust, olive, brown, or mustard. Photographs are murky, miscolored, or high-contrast black and white.
- **bg** (#d6cdb8): Photocopied newsprint.
- **surface** (#e8e1d0): A lighter scrap of paper pasted on top.
- **subtle** (#b9ad93): Toner smudge and aged paper.
- **text** (#1a1814)
- **muted** (#4d463b)
- **border** (#1a1814)
- **primary** (#a13c22): Rust: a second ink that looks misregistered and dirty, not bright.
- **on-primary** (#efe8d8)
- **secondary** (#1a1814): Xerox black: solid bands where the copier filled in.
- **on-secondary** (#e8e1d0)
- **accent** (#c39a3c): Yellowed tape.
- **on-accent** (#1a1814)

## Typography

Each fontFamily in the front matter is a CSS font stack, first choice first.

- **Distressed letterforms.** Letters look photocopied too many times, torn, scratched, blurred, or eroded. Fonts such as Droplet, Morire, and Reactor were drawn damaged. Carson also ripped and remade existing letters.
- **Clashing typefaces.** Five or more unrelated faces in one layout: a heavy condensed grotesque, a high-contrast serif, a typewriter face, hand scrawl, and the default desktop serif. Case, size, and weight change without a system.
- **Crushed spacing.** Letters are packed until they touch or overlap, and lines of display type overlap their neighbours. Kerning, leading, and baselines are ignored on purpose.
- **display** (Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif): Heavy condensed grotesque, set tight until the letters touch.
- **body** ("Times New Roman", Times, serif): Default desktop serif, as in photocopied zines.
- **mono** ("American Typewriter", "Courier New", Courier, monospace): Typewriter captions, in the spirit of FF Trixie.
- **serif** (Didot, "Bodoni 72", "Bodoni MT", serif): A high-contrast serif that clashes with the grotesque.
- **condensed** ("Avenir Next Condensed", "Arial Narrow", sans-serif)
- **scrawl** (Chalkduster, "Marker Felt", "Bradley Hand", cursive): Rough hand lettering. Chalkduster already has broken edges.

## Layout

- **Collage without a grid.** Blocks of text, photos, and scraps are placed by eye, tilted, and allowed to overlap. Columns are narrow, very wide, or broken by gutters in odd places. Text can run over images.

## Shapes

- **Photocopy and grime.** Toner specks, scan lines, halftone noise, stains, tape, and torn paper edges. Surfaces look handled and reproduced, never clean.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Mix at least five unrelated typefaces: a heavy condensed grotesque for display, a high-contrast serif, a typewriter face for captions, a rough hand face, and a plain serif for body text.
- Do: Set display type very large with negative letterspacing (about -0.05em to -0.08em) and leading below 0.85, so letters and lines touch.
- Do: Erode display letters with a speckled mask or a misregistered second print, so they look photocopied.
- Do: Cover the page with a subtle photocopy texture: toner specks, scan lines, or halftone noise.
- Do: Place blocks by eye. Tilt scraps by one to three degrees, let them overlap, and tear their edges with a jagged clip path.
- Do: Use black, newsprint, and one or two muted inks such as rust and mustard.
- Do: Keep body text, form labels, and table data readable. Put the damage in display type and surfaces.
- Don't: use rounded corners, glossy gradients, or soft drop shadows.
- Don't: use bright, clean, saturated fills.
- Don't: align everything to one grid or use one type family throughout.
- Don't: space letters widely. That points to New Wave typography.
- Don't: erode, rotate, or overlap body text, form fields, or table data until they cannot be read.
