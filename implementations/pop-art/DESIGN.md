---
name: "Pop art"
description: "The graphic idiom of 1960s Pop art, which took its look from comic strips, advertising, and packaging: flat red, yellow, and blue printed in solid areas or Ben-Day dots, heavy black key lines, speech balloons and caption boxes, and bold condensed lettering. This record covers that hard-edged, mass-print core of Lichtenstein, Warhol’s screenprints, and Robert Indiana. British collage, soft sculpture, and later Neo-pop are related branches."
colors:
  bg: "#fffbea"
  surface: "#ffffff"
  subtle: "#fff4b8"
  text: "#111111"
  muted: "#3a3a3a"
  border: "#111111"
  primary: "#d8202a"
  on-primary: "#ffffff"
  secondary: "#1d5fc4"
  on-secondary: "#ffffff"
  accent: "#ffd400"
  on-accent: "#111111"
  dot: "#f4a3a8"
typography:
  display:
    fontFamily: "Impact, Haettenschweiler, Franklin Gothic Bold, Arial Black, sans-serif"
    fontSize: "140px"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.01em"
  heading:
    fontFamily: "Impact, Haettenschweiler, Franklin Gothic Bold, Arial Black, sans-serif"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.02em"
  body:
    fontFamily: "Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Avenir Next Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  sm: "0px"
  md: "0px"
  lg: "0px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "56px"
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

The graphic idiom of 1960s Pop art, which took its look from comic strips, advertising, and packaging: flat red, yellow, and blue printed in solid areas or Ben-Day dots, heavy black key lines, speech balloons and caption boxes, and bold condensed lettering. This record covers that hard-edged, mass-print core of Lichtenstein, Warhol’s screenprints, and Robert Indiana. British collage, soft sculpture, and later Neo-pop are related branches.

Moods: loud, brash, ironic, commercial, graphic.

Full record: api/styles/pop-art.json. Specimen: implementations/pop-art/index.html.

## Colors

- **Process primaries.** Flat red, yellow, and blue with black and white, the colors of cheap four-color printing. Warhol’s screenprints add hot pink, orange, and turquoise. No gradients and no modeled shading.
- **bg** (#fffbea): Newsprint white: the paper the comic panels were printed on.
- **surface** (#ffffff): Speech balloons and caption boxes.
- **subtle** (#fff4b8)
- **text** (#111111)
- **muted** (#3a3a3a)
- **border** (#111111): Key-line black: every shape carries a heavy black outline.
- **primary** (#d8202a): Process red. Lichtenstein used it for lips, explosions, and Ben-Day flesh tones.
- **on-primary** (#ffffff)
- **secondary** (#1d5fc4): Process blue, for skies, hair, and dot fields.
- **on-secondary** (#ffffff)
- **accent** (#ffd400): Process yellow, for blondes, blasts, and caption boxes.
- **on-accent** (#111111)
- **dot** (#f4a3a8): Pale red for flesh-tone Ben-Day dots on white, where full red would be too dark.

## Typography

- **Balloon and sound-effect lettering.** Capital letters in speech balloons and yellow caption boxes. Sound effects in huge condensed or blocky letters with a black outline and a drop. Robert Indiana used stacked slab-serif words.
- **display** (Impact, Haettenschweiler, "Franklin Gothic Bold", "Arial Black", sans-serif): Condensed heavy sans for sound-effect lettering and headlines. These faces are heavy at weight 400.
- **body** ("Helvetica Neue", Arial, sans-serif)
- **mono** ("Avenir Next Condensed", "Arial Narrow", "Helvetica Neue", sans-serif): Caption-box and balloon lettering: bold capitals in a narrow sans, not a monospace.

## Layout

- **Heavy key lines.** Every shape has a thick black outline of even weight, as in a comic’s inked line. Hairlines do not appear.
- **Comic panel.** The image is framed as one panel cropped from a strip, or as a grid of panels or repeated units, like Warhol’s rows of cans and faces.

## Shapes

- **Ben-Day dots.** Tints are made of large, even dots in one ink on white or on a second flat color: red dots for skin, blue dots for sky. The dots are big enough to see as dots.
- **none** (0px)
- **sm** (0px)
- **md** (0px): Comic panels and caption boxes are square.
- **lg** (0px)
- **pill** (999px): Only for speech balloons and round badges.

## Do's and Don'ts

- Do: Frame sections as comic panels with 4 to 6 px black borders and square corners.
- Do: Fill some panels with Ben-Day dots: a tiled radial gradient of one strong ink on white or on a second flat color, at a pitch of about 10 to 14 px.
- Do: Use flat red, yellow, blue, black, and white. Add hot pink or turquoise only for a Warhol variant.
- Do: Put headings in yellow caption boxes and short statements in white speech balloons with an outlined tail.
- Do: Set display type in a condensed heavy sans in capitals. Give the biggest words a black outline and a hard drop, like a sound effect.
- Do: Put body text on solid white or yellow, never directly on dots.
- Do: Use starbursts and speed lines as decoration around the main headline.
- Don't: use gradients, blurred shadows, or glossy highlights.
- Don't: use thin gray borders. Outlines must read as black ink.
- Don't: give every block a hard offset shadow. That is neo-brutalism.
- Don't: use squiggle, confetti, or grid patterns. The only pattern is the dot.
- Don't: make the dots so small that they read as a smooth tint.
- Don't: reproduce a specific artist’s painting or a comic publisher’s characters.
