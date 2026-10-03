---
name: "Material Design"
description: "Google’s design language of 2014 to 2020. Interface parts are sheets of “material” that sit at fixed elevations above a pale ground, and soft shadows show how high each sheet floats. Color is flat: one bold primary fills the app bar, and a contrasting accent marks the floating action button. This record covers Material Design 1 (2014) and Material Design 2 (2018). Material You (Material Design 3, 2021) is a related branch with tonal color from the wallpaper and large rounded shapes."
colors:
  bg: "#f5f5f5"
  surface: "#ffffff"
  subtle: "#eeeeee"
  text: "#212121"
  muted: "#757575"
  border: "#e0e0e0"
  primary: "#3f51b5"
  on-primary: "#ffffff"
  secondary: "#303f9f"
  on-secondary: "#ffffff"
  accent: "#ff4081"
  on-accent: "#ffffff"
  primary-light: "#c5cae9"
typography:
  display:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "96px"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  heading:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "34px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0em"
  body:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.09em"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  lg: "8px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
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

Google’s design language of 2014 to 2020. Interface parts are sheets of “material” that sit at fixed elevations above a pale ground, and soft shadows show how high each sheet floats. Color is flat: one bold primary fills the app bar, and a contrasting accent marks the floating action button. This record covers Material Design 1 (2014) and Material Design 2 (2018). Material You (Material Design 3, 2021) is a related branch with tonal color from the wallpaper and large rounded shapes.

Moods: orderly, tactile, bright, systematic.

Full record: api/styles/material-design.json. Specimen: implementations/material-design/index.html.

## Colors

- **Bold primary, contrasting accent.** One saturated primary, usually the 500 shade of a 19-hue palette such as indigo or teal, fills the app bar, and its 700 shade fills the status bar. A contrasting accent, often an A200 pink or amber, marks the floating action button, switches, and links. Everything else is white sheets on a pale gray ground, with text as black at 87 % and 54 % opacity.
- **bg** (#f5f5f5): Grey 100: the pale ground under the sheets.
- **surface** (#ffffff): Cards, sheets, and dialogs.
- **subtle** (#eeeeee)
- **text** (#212121): Black at 87 % opacity on white.
- **muted** (#757575): Black at 54 % opacity on white.
- **border** (#e0e0e0): Dividers: black at 12 % opacity.
- **primary** (#3f51b5): Indigo 500: the app bar.
- **on-primary** (#ffffff)
- **secondary** (#303f9f): Indigo 700: the dark primary for the status bar.
- **on-secondary** (#ffffff)
- **accent** (#ff4081): Pink A200: the floating action button and selection indicators. Use it for icons and large shapes, not small text.
- **on-accent** (#ffffff)
- **primary-light** (#c5cae9): Indigo 100.

## Typography

- **Roboto on a fixed scale.** Roboto in named styles: Display, Headline, Title, Subheading, Body, and Caption. Titles are Medium 20 sp, large display lines are Regular or Light, and buttons are Medium 14 sp in all capitals. Material 2 brings Google Sans to Google’s own products.
- **display** (Roboto, "Helvetica Neue", Arial, sans-serif)
- **body** (Roboto, "Helvetica Neue", Arial, sans-serif)
- **mono** ("Roboto Mono", Menlo, Consolas, monospace)

## Layout

- **Sheets at set elevations.** Every surface is a 1 dp sheet of material with a fixed resting height: a card at 2 dp, the app bar at 4 dp, the floating action button at 6 dp, the navigation drawer at 16 dp, and a dialog at 24 dp. Sheets can overlap but cannot pass through each other.
- **8 dp grid and keylines.** Everything aligns to an 8 dp grid with 16 dp screen margins and a 72 dp text keyline. A colored app bar sits at the top, cards and lists fill a pale column, and a 56 dp circular action button floats near the lower right, often across the seam between two surfaces.

## Elevation & Depth

- **sm** (0px 2px 2px 0px #00000024, 0px 3px 1px -2px #0000001f, 0px 1px 5px 0px #00000033): 2 dp: resting cards and raised buttons.
- **md** (0px 4px 5px 0px #00000024, 0px 1px 10px 0px #0000001f, 0px 2px 4px -1px #00000033): 4 dp: the app bar.
- **fab** (0px 6px 10px 0px #00000024, 0px 1px 18px 0px #0000001f, 0px 3px 5px -1px #00000033): 6 dp: the resting floating action button.
- **lg** (0px 8px 10px 1px #00000024, 0px 3px 14px 2px #0000001f, 0px 5px 5px -3px #00000033): 8 dp: raised cards, menus, and pressed buttons.

## Shapes

- **Soft shadows from above.** Shadows are the only cue for separation. They fall downward from a key light with a soft ambient halo, and a higher sheet casts a larger, softer shadow. Surfaces are matte and flat: no gradients, gloss, or texture. Cards round their corners by 2 dp in Material 1 and 4 dp in Material 2.
- **none** (0px)
- **sm** (2px): Material 1 cards and buttons.
- **md** (4px): Material 2 cards and buttons.
- **lg** (8px)
- **pill** (999px): The circular floating action button.

## Do's and Don'ts

- Do: Put content on white cards over a pale gray ground (#fafafa or #f5f5f5).
- Do: Give each surface a resting elevation and a matching soft shadow: 2 dp for cards and raised buttons, 4 dp for the app bar, 6 dp for the action button.
- Do: Fill the app bar with one saturated primary color and use a darker shade of it for the top edge.
- Do: Use one contrasting accent color for the circular action button, links, and selected controls.
- Do: Set type in Roboto or a system grotesque. Make titles medium weight and button labels medium weight in all capitals.
- Do: Align to an 8 px grid. Round cards and buttons by 2 to 4 px, and make the action button a 56 px circle.
- Don't: use gradients, gloss, or textures. Material is matte and flat in color.
- Don't: use hard shadows with no blur, or outlines to separate cards. Separation comes from soft shadows.
- Don't: put two surfaces at the same height with different shadows, or different heights with the same shadow.
- Don't: use more than one floating action button on a screen, and do not use it for a destructive action.
- Don't: round cards into pills or large soft blobs. Those belong to Material You.
