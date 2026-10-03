---
name: "Constructivism"
description: "The graphic design of Russian and Soviet Constructivism (about 1919–1934): posters, books, and magazines built from red and black on paper, heavy sans-serif capitals, diagonal bars and wedges, and photomontage. The movement also covers sculpture and architecture. This record covers its printed work and treats the other branches as related styles."
colors:
  bg: "#eee6d6"
  surface: "#eee6d6"
  subtle: "#d6c9b1"
  text: "#161412"
  muted: "#4b4540"
  border: "#161412"
  primary: "#d2231b"
  on-primary: "#f7f0e3"
  secondary: "#161412"
  on-secondary: "#eee6d6"
  accent: "#9c1b14"
  on-accent: "#f7f0e3"
typography:
  display:
    fontFamily: "Avenir Next Condensed, DIN Condensed, Impact, Haettenschweiler, Arial Narrow, sans-serif"
    fontSize: "168px"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  heading:
    fontFamily: "Avenir Next Condensed, DIN Condensed, Impact, Haettenschweiler, Arial Narrow, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "0em"
  body:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Avenir Next Condensed, DIN Condensed, Arial Narrow, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.08em"
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

The graphic design of Russian and Soviet Constructivism (about 1919–1934): posters, books, and magazines built from red and black on paper, heavy sans-serif capitals, diagonal bars and wedges, and photomontage. The movement also covers sculpture and architecture. This record covers its printed work and treats the other branches as related styles.

Moods: agitational, dynamic, urgent, industrial, bold.

Full record: api/styles/constructivism.json. Specimen: implementations/constructivism/index.html.

## Colors

- **Red and black on paper.** Red and black printed on the paper color, sometimes with a darker red or a screened tint of black. A third hue is rare. The Stenberg brothers’ film posters are the colorful exception.
- **bg** (#eee6d6): Unprinted paper.
- **surface** (#eee6d6)
- **subtle** (#d6c9b1): Screened tint of black on paper, used for panels and rows.
- **text** (#161412)
- **muted** (#4b4540)
- **border** (#161412)
- **primary** (#d2231b): Poster red, the one strong hue.
- **on-primary** (#f7f0e3)
- **secondary** (#161412): Printing black: the second color of most posters.
- **on-secondary** (#eee6d6)
- **accent** (#9c1b14): Dark red for a second tone of the same hue, not a new hue.
- **on-accent** (#f7f0e3)

## Typography

- **Heavy block capitals.** Bold sans-serif capitals, often drawn by hand and condensed. Words are stacked, enlarged, turned on the diagonal, or set vertically.
- **display** ("Avenir Next Condensed", "DIN Condensed", Impact, Haettenschweiler, "Arial Narrow", sans-serif)
- **body** ("Helvetica Neue", Helvetica, Arial, sans-serif)
- **mono** ("Avenir Next Condensed", "DIN Condensed", "Arial Narrow", sans-serif)

## Layout

- **Diagonal thrust.** Lines of type, bars, and wedges run at steep angles and cross the page. The composition moves toward one point instead of resting on a grid.
- **Bars, wedges, and circles.** Thick rules, triangular wedges, and circles are active parts of the message, as in Lissitzky’s Red Wedge, not decoration.

## Shapes

- **Flat print.** Solid ink areas from letterpress and lithography. No gradients, shadows, or ornament.
- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Use a paper-colored ground with red and black as the only strong colors.
- Do: Set headings in heavy condensed sans-serif capitals. Stack words and use a steep scale contrast.
- Do: Put at least one element on a diagonal: a red wedge, a black bar, or a rotated heading or label.
- Do: Use large solid red fields for the elements that need the most emphasis, such as the hero, a quote, or the featured offer.
- Do: Use thick black bars and rules to direct the eye across the page.
- Do: When a page needs images, use black-and-white photographs, cut out and combined with type.
- Don't: add a third strong hue such as yellow or blue. The page then reads as Bauhaus or De Stijl.
- Don't: use gradients, soft shadows, rounded corners, or ornament.
- Don't: rotate body text. Rotate headings, labels, and shapes only.
- Don't: use Soviet emblems such as the hammer and sickle or the red star as decoration. They carry political meaning.
- Don't: imitate Cyrillic with Latin letters, for example a reversed R for Я.
