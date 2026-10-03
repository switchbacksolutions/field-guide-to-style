---
name: "Psychedelic art"
description: "The graphic style of the 1966–1972 psychedelic rock poster, centered on San Francisco: saturated complementary colors that vibrate against each other, hand lettering that swells and melts to fill a shape, dense symmetrical compositions, and Art Nouveau curves borrowed from Mucha and the Vienna Secession. This record covers that graphic core. Visionary painting, liquid light shows, and later revivals are related branches."
colors:
  bg: "#ff6a13"
  surface: "#4a0e8f"
  subtle: "#ffd21f"
  text: "#240046"
  muted: "#4a1a5e"
  border: "#240046"
  primary: "#ff3fa4"
  on-primary: "#240046"
  secondary: "#2a4dff"
  on-secondary: "#fff4d6"
  accent: "#b8f02a"
  on-accent: "#240046"
  cream: "#fff4d6"
typography:
  display:
    fontFamily: "Cooper Black, Cooper Std, Arial Rounded MT Bold, Arial Rounded MT, Trebuchet MS, sans-serif"
    fontSize: "144px"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Cooper Black, Cooper Std, Arial Rounded MT Bold, Arial Rounded MT, Trebuchet MS, sans-serif"
    fontSize: "44px"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Optima, Candara, Segoe UI, Trebuchet MS, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Optima, Candara, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "18px"
  md: "40px"
  lg: "96px"
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

The graphic style of the 1966–1972 psychedelic rock poster, centered on San Francisco: saturated complementary colors that vibrate against each other, hand lettering that swells and melts to fill a shape, dense symmetrical compositions, and Art Nouveau curves borrowed from Mucha and the Vienna Secession. This record covers that graphic core. Visionary painting, liquid light shows, and later revivals are related branches.

Moods: hallucinatory, saturated, dense, fluid, countercultural.

Full record: api/styles/psychedelic-art.json. Specimen: implementations/psychedelic-art/index.html.

## Colors

- **Vibrating complements.** Saturated complementary pairs of similar value, such as orange and blue, red and green, or magenta and lime, placed side by side so that the edge between them seems to flicker. Color covers the whole sheet. Black is rare.
- **bg** (#ff6a13): Hot orange ground. Color fills the whole sheet, as on a Fillmore handbill.
- **surface** (#4a0e8f): Deep violet panel, the dark partner of the orange ground.
- **subtle** (#ffd21f)
- **text** (#240046): Aubergine ink instead of black. Body text keeps 4.5:1 or more on every light fill.
- **muted** (#4a1a5e)
- **border** (#240046)
- **primary** (#ff3fa4): Magenta: vibrates against the orange ground and the lime accent.
- **on-primary** (#240046)
- **secondary** (#2a4dff): Electric blue: the complement of the orange ground.
- **on-secondary** (#fff4d6)
- **accent** (#b8f02a): Acid lime: the complement of magenta and violet.
- **on-accent** (#240046)
- **cream** (#fff4d6): Light ink for text on violet and blue.

## Typography

- **Swollen, melting lettering.** Hand-drawn letters stretch, bulge, and bend to fill a shape, often at the cost of legibility. Words and image merge. Soft, fat letterforms and echo outlines are common.
- **display** ("Cooper Black", "Cooper Std", "Arial Rounded MT Bold", "Arial Rounded MT", "Trebuchet MS", sans-serif): Swollen, soft letters. Period posters used hand lettering. Cooper Black and rounded faces are the nearest system fonts.
- **body** (Optima, Candara, "Segoe UI", "Trebuchet MS", sans-serif): Flared humanist sans with an Art Nouveau echo.
- **mono** (Optima, Candara, "Segoe UI", sans-serif)

## Layout

- **Horror vacui and symmetry.** The composition fills every part of the sheet. A central figure, medallion, or word block sits on a vertical axis, with text wrapped around it.
- **Billowing forms.** Panels and frames are blobs, arches, and bulging lozenges. Straight edges and square corners are rare.

## Elevation & Depth

- **md** (0px 0px 0px 8px #b8f02a, 0px 0px 0px 16px #ff3fa4): Concentric echo rings around a shape, in two vibrating colors. Not depth.

## Shapes

- **Flat ink.** Offset or screen-printed flat colors. A split-fountain rainbow roll sometimes blends two inks across the sheet. No gloss and no modeled depth.
- **none** (0px)
- **sm** (18px)
- **md** (40px)
- **lg** (96px)
- **pill** (999px)

## Do's and Don'ts

- Do: Fill the whole page with saturated color. Use a colored ground, not white.
- Do: Put complementary colors next to each other: orange with blue, magenta with lime, violet with yellow.
- Do: Set display lettering in a soft, fat face, very large, with tight leading, and let it fill its panel.
- Do: Add echo outlines to display type and shapes in a second and third color.
- Do: Center the composition on a vertical axis. Use a medallion, blob, or arch as the main frame.
- Do: Use concentric rings, spirals, or ripples as background pattern.
- Do: Give panels and buttons bulging, organic, or pill shapes.
- Do: Keep body text at 4.5:1 contrast or more. Save the low-contrast vibrating pairs for display lettering and ornament.
- Do: Use a split-fountain blend of two inks on one section at most. Keep the rest of the color flat.
- Don't: use black text on white paper as the base.
- Don't: use glossy highlights, glass blur, or soft drop shadows for depth.
- Don't: set headings in a neutral grotesque on a strict grid.
- Don't: use square cards and hard rectangular frames as the main shapes.
- Don't: put vibrating low-contrast pairs on body text, form labels, or table cells.
