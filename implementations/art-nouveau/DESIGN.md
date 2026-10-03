---
name: "Art Nouveau"
description: "The international decorative style of about 1890 to 1910, named after Siegfried Bing’s Paris gallery, the Maison de l’Art Nouveau: fluid, undulating lines taken from plant stems, flowers, and hair, the whiplash curve, and modern materials such as iron and glass, applied to posters, buildings, furniture, glass, and jewelry alike. This record covers the curvilinear core of Brussels and Paris. The geometric Vienna Secession and Glasgow branches are treated as related styles."
colors:
  bg: "#f1e6cc"
  surface: "#f8f0dc"
  subtle: "#e4d4ad"
  text: "#33291c"
  muted: "#6b5a3f"
  border: "#4a3d27"
  primary: "#56792a"
  on-primary: "#f8f0dc"
  secondary: "#a9583f"
  on-secondary: "#f8f0dc"
  accent: "#c4922f"
  on-accent: "#33291c"
typography:
  display:
    fontFamily: "Optima, Candara, Segoe UI, URW Classico, sans-serif"
    fontSize: "84px"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0em"
  heading:
    fontFamily: "Optima, Candara, Segoe UI, URW Classico, sans-serif"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.01em"
  body:
    fontFamily: "Iowan Old Style, Palatino, Palatino Linotype, Book Antiqua, Georgia, serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Optima, Candara, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  sm: "8px"
  md: "24px"
  lg: "160px"
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

The international decorative style of about 1890 to 1910, named after Siegfried Bing’s Paris gallery, the Maison de l’Art Nouveau: fluid, undulating lines taken from plant stems, flowers, and hair, the whiplash curve, and modern materials such as iron and glass, applied to posters, buildings, furniture, glass, and jewelry alike. This record covers the curvilinear core of Brussels and Paris. The geometric Vienna Secession and Glasgow branches are treated as related styles.

Moods: organic, sensuous, flowing, ornate, romantic.

Full record: api/styles/art-nouveau.json. Specimen: implementations/art-nouveau/index.html.

## Colors

- **Earthy, muted colours.** Moss and olive green, ochre and old gold, terracotta and dusty rose, and peacock blue, on a cream or parchment ground, with sepia or dark green outlines. Colours are soft rather than saturated.
- **bg** (#f1e6cc): Parchment, the ground of a colour lithograph.
- **surface** (#f8f0dc)
- **subtle** (#e4d4ad)
- **text** (#33291c): Sepia brown, the colour of a lithograph key line.
- **muted** (#6b5a3f)
- **border** (#4a3d27): Dark outline around panels, as in poster key lines.
- **primary** (#56792a): Moss and stem green.
- **on-primary** (#f8f0dc)
- **secondary** (#a9583f): Terracotta and dusty rose.
- **on-secondary** (#f8f0dc)
- **accent** (#c4922f): Ochre gold, for halos and highlights.
- **on-accent** (#33291c)

## Typography

- **Hand-drawn, flared letters.** Lettering is drawn to match the image, with swelling strokes, soft terminals, and unusual proportions. Mixed case and capitals both appear. Typefaces such as Eckmann and Arnold Böcklin copy this lettering.
- **display** (Optima, Candara, "Segoe UI", "URW Classico", sans-serif)
- **body** ("Iowan Old Style", Palatino, "Palatino Linotype", "Book Antiqua", Georgia, serif)
- **mono** (Optima, Candara, "Segoe UI", sans-serif)

## Layout

- **Whiplash line.** A long, S-shaped curve that swells and snaps back, taken from plant stems (Obrist’s Cyclamen, 1894). It runs through ornament, ironwork, and lettering, and it avoids parallels and right angles.
- **Arches and framed panels.** Figures and text sit in arched, circular, or leaf-shaped panels framed by a dark outline. In posters a halo or medallion sits behind the head, and ornament flows across the frame edge.

## Shapes

- **Iron, glass, and patterned fields.** Curved wrought iron, stained and opalescent glass, mosaic, and ceramic tile. Flat areas carry a repeated plant or feather pattern, as in wallpaper and textiles.
- **none** (0px)
- **sm** (8px)
- **md** (24px): Leaf corner: applied to two opposite corners only.
- **lg** (160px): Arch: applied to the two top corners of a panel.
- **pill** (999px)

## Do's and Don'ts

- Do: Use a cream or parchment ground, sepia text, and two or three muted colours such as moss green, ochre, and terracotta.
- Do: Give panels an arched top, a round medallion shape, or a leaf cut with two opposite corners curved.
- Do: Outline panels, cards, and buttons with a thin dark line in sepia or dark green.
- Do: Add one repeated plant or feather pattern on a framed field, for example behind key figures.
- Do: Draw dividers as one flowing S-curve, not as a straight rule.
- Do: Set headings in a flared or humanist face in mixed case, and allow italics for accents.
- Don't: use stepped corners, chevrons, or sunbursts. That points to Art Deco.
- Don't: use saturated or fluorescent colours.
- Don't: use glossy gradients, glass blur, or soft drop shadows.
- Don't: use a geometric sans-serif with wide letter spacing for headings.
- Don't: fill every surface with ornament. Keep a calm ground around the framed fields.
