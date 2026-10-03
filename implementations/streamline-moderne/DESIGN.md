---
name: "Streamline Moderne"
description: "A 1930s style of architecture, industrial design, and graphics that took its forms from aerodynamic streamlining: curving forms, rounded corners, long horizontal lines, and nautical details such as portholes and railings, in smooth new materials such as chrome, Bakelite, and glass block. Wikipedia treats it as a late, stripped form of Art Deco; the Getty AAT lists it as a separate style."
colors:
  bg: "#f1e9d8"
  surface: "#faf5ea"
  subtle: "#e2d8c2"
  text: "#15263f"
  muted: "#4d5a68"
  border: "#8f99a3"
  primary: "#c23a2b"
  on-primary: "#faf5ea"
  secondary: "#1c3354"
  on-secondary: "#f1e9d8"
  accent: "#bcc4cb"
  on-accent: "#15263f"
typography:
  display:
    fontFamily: "Futura, Avenir Next, Century Gothic, Trebuchet MS, sans-serif"
    fontSize: "112px"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.02em"
  heading:
    fontFamily: "Futura, Avenir Next, Century Gothic, Trebuchet MS, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0.06em"
  body:
    fontFamily: "Avenir Next, Futura, Century Gothic, Helvetica Neue, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Futura, Avenir Next, Century Gothic, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0.18em"
rounded:
  none: "0px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  pill: "999px"
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

A 1930s style of architecture, industrial design, and graphics that took its forms from aerodynamic streamlining: curving forms, rounded corners, long horizontal lines, and nautical details such as portholes and railings, in smooth new materials such as chrome, Bakelite, and glass block. Wikipedia treats it as a late, stripped form of Art Deco; the Getty AAT lists it as a separate style.

Moods: streamlined, optimistic, sleek, nautical, machine-age.

Full record: api/styles/streamline-moderne.json. Specimen: implementations/streamline-moderne/index.html.

## Colors

- **White or pastel with chrome trim.** Wikipedia: structures were often white or in subdued pastel colors. Chrome and stainless steel give silver trim. Transport graphics add navy and signal red.
- **bg** (#f1e9d8)
- **surface** (#faf5ea)
- **subtle** (#e2d8c2)
- **text** (#15263f)
- **muted** (#4d5a68)
- **border** (#8f99a3): Chrome: polished steel trim.
- **primary** (#c23a2b): Signal red, as on streamliner noses and diner trim.
- **on-primary** (#faf5ea)
- **secondary** (#1c3354): Navy enamel.
- **on-secondary** (#f1e9d8)
- **accent** (#bcc4cb): Chrome highlight.
- **on-accent** (#15263f)

## Typography

Each fontFamily in the front matter is a CSS font stack, first choice first.

- **Bold geometric sans, leaning forward.** Lettering is geometric or monoline sans serif, often in capitals, often slanted forward or with speed lines attached. Interpretation from 1930s transport graphics; to confirm with references.
- **display** (Futura, "Avenir Next", "Century Gothic", "Trebuchet MS", sans-serif)
- **body** ("Avenir Next", Futura, "Century Gothic", "Helvetica Neue", sans-serif)
- **mono** (Futura, "Avenir Next", "Century Gothic", sans-serif)

## Layout

- **Horizontal emphasis.** Long, low forms. Bands, ribbon windows, and grooves run horizontally, so the eye moves sideways, as if the object were moving.
- **Rounded corners and ends.** Corners are rounded, and bands and panels often end in a full semicircle, like a racetrack or the nose of a train. Sharp angles are rare.

## Shapes

- **Smooth and unornamented.** Smooth render, glass block, polished chrome, stainless steel, enamel, Bakelite, Formica, and Vitrolite. Applied ornament gives way to the line itself.
- **none** (0px)
- **sm** (12px)
- **md** (24px)
- **lg** (48px)
- **pill** (999px)

## Do's and Don'ts

- Do: Use a cream or off-white ground, navy for text and large bands, one red accent, and silver-gray for rules and rings.
- Do: Round every panel. Give buttons, badges, and inputs fully rounded ends, and give at least one large band a semicircular end.
- Do: Draw speed lines as groups of two to four parallel horizontal lines, for example trailing from each section heading or running along the hero.
- Do: Set headings and labels in a bold geometric sans in capitals. Slant display text forward with an italic or oblique face.
- Do: Keep alignment to the left and let bands run the full width, so the page reads as long and horizontal.
- Do: Put small figures or icons in circular portholes with a thick silver ring.
- Don't: use sunbursts, chevrons, stepped outlines, or gold on black. That points to Art Deco.
- Don't: center the whole page on a vertical axis.
- Don't: use square corners on panels, cards, or buttons.
- Don't: use glossy gradients, glass blur, or glow effects.
- Don't: add applied ornament. The lines and curves are the decoration.
- Don't: use diagonal speed lines or starbursts. Speed lines stay horizontal.
