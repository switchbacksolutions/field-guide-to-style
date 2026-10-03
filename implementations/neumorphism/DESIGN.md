---
name: "Neumorphism"
description: "An interface style from late 2019 in which buttons, cards, and wells have the same color as the background and appear to rise out of it or sink into it. Each shape gets two soft shadows, a light one toward the light source and a dark one away from it, on a pale, low-contrast, near-monochrome surface. Designers named it as a “new skeuomorphism” and describe it as a middle point between skeuomorphism and flat design. Its popularity fell by 2021, mainly because of weak contrast."
colors:
  bg: "#e4e9f0"
  surface: "#e4e9f0"
  subtle: "#dde3eb"
  text: "#31344b"
  muted: "#565c73"
  border: "#d1d9e6"
  primary: "#4d5ee8"
  on-primary: "#ffffff"
  secondary: "#e4e9f0"
  on-secondary: "#31344b"
  accent: "#4d5ee8"
  on-accent: "#ffffff"
  shade: "#a3b1c6"
  light: "#ffffff"
typography:
  display:
    fontFamily: "SF Pro Rounded, Nunito, Varela Round, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "88px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "SF Pro Rounded, Nunito, Varela Round, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Nunito, Avenir Next, Segoe UI, system-ui, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Nunito, Avenir Next, Segoe UI, system-ui, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "28px"
  lg: "48px"
  xl: "72px"
  2xl: "112px"
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

An interface style from late 2019 in which buttons, cards, and wells have the same color as the background and appear to rise out of it or sink into it. Each shape gets two soft shadows, a light one toward the light source and a dark one away from it, on a pale, low-contrast, near-monochrome surface. Designers named it as a “new skeuomorphism” and describe it as a middle point between skeuomorphism and flat design. Its popularity fell by 2021, mainly because of weak contrast.

Moods: soft, calm, tactile, quiet, minimal.

Full record: api/styles/neumorphism.json. Specimen: implementations/neumorphism/index.html.

## Colors

- **One pale surface.** Background and elements share one light, slightly tinted gray or pastel, such as blue-gray #e0e5ec. The background cannot be pure white or black, because one of the two shadows would disappear.
- **One soft accent.** A single accent color, often blue, violet, or orange, marks the active control, an icon, or a progress value. The rest of the palette is the surface color and two or three grays for text.
- **bg** (#e4e9f0): One pale blue-gray surface. Not white, so the light shadow shows.
- **surface** (#e4e9f0): Cards and controls share the background color.
- **subtle** (#dde3eb): Pressed wells, a shade darker.
- **text** (#31344b)
- **muted** (#565c73)
- **border** (#d1d9e6): Hairline for focus and table rows only.
- **primary** (#4d5ee8): The single accent: primary action and active state.
- **on-primary** (#ffffff)
- **secondary** (#e4e9f0): Secondary actions are raised surface, not a second hue.
- **on-secondary** (#31344b)
- **accent** (#4d5ee8): Same hue as primary; neumorphism keeps one accent.
- **on-accent** (#ffffff)
- **shade** (#a3b1c6): Dark shadow, down and right.
- **light** (#ffffff): Light shadow, up and left.

## Typography

Each fontFamily in the front matter is a CSS font stack, first choice first.

- **Rounded sans-serif.** Geometric or rounded sans-serif type (Poppins, Nunito, Montserrat, SF Pro Rounded) in slate gray, medium to bold, with no borders and no text shadows.
- **display** ("SF Pro Rounded", Nunito, "Varela Round", "Avenir Next", "Segoe UI", system-ui, sans-serif)
- **body** (Nunito, "Avenir Next", "Segoe UI", system-ui, -apple-system, "Helvetica Neue", sans-serif)
- **mono** ("SF Mono", Menlo, Consolas, monospace)

## Layout

- **Controls as physical objects.** Round knobs, pill switches, sliders, dials, and square keys that look molded from one piece of soft plastic. Device remotes, music players, smart-home panels, and calculators are the usual subjects.
- **Large radii, wide spacing.** Corners are round, 12–30 px on cards and fully round on buttons and knobs. Elements need wide gaps so that their shadows do not overlap.

## Elevation & Depth

- **sm** (5px 5px 10px 0px #a3b1c6, -5px -5px 10px 0px #ffffff): Raised: buttons, chips, knobs.
- **md** (10px 10px 20px 0px #a3b1c6, -10px -10px 20px 0px #ffffff): Raised: cards and panels.
- **lg** (16px 16px 32px 0px #a3b1c6, -16px -16px 32px 0px #ffffff): Raised: hero panel.
- **inset** (inset 6px 6px 12px 0px #a3b1c6, inset -6px -6px 12px 0px #ffffff): Pressed: inputs, wells, active states.

## Shapes

- **Paired soft shadows.** Every raised shape has two blurred shadows with equal and opposite offsets: a dark one toward the lower right and a white one toward the upper left, as if lit from the upper left. The blur is about twice the offset.
- **Raised and pressed.** The same shadows set inside the shape make it look pressed into the surface. Inputs, progress tracks, and active toggles sink; cards, buttons, and knobs rise. The change from raised to pressed shows state.
- **none** (0px)
- **sm** (12px)
- **md** (20px)
- **lg** (32px)
- **pill** (999px)

## Do's and Don'ts

- Do: Choose one light, slightly tinted background, such as #e0e5ec, and give cards, buttons, and inputs the same color.
- Do: Give each raised element two shadows with equal and opposite offsets: dark (surface darkened by about 15–25 %) to the lower right, white to the upper left. Use a blur of about twice the offset.
- Do: Set inputs, tracks, and active or selected states as pressed wells with the same pair of shadows inset.
- Do: Keep text and icons dark enough for a contrast of at least 4.5:1, because the shapes themselves have almost none.
- Do: Mark the primary action with the single accent color, in its fill or its text, so it is visible without the shadows.
- Do: Use large radii and wide gaps so each shadow has room.
- Don't: use a pure white or pure black background. One of the two shadows would disappear.
- Don't: add borders, outlines, or a different card color. The shape must come from the surface.
- Don't: use only one dark drop shadow. That is Material Design.
- Don't: put important information into the shadow alone. Many people cannot see a contrast this low.
- Don't: add textures, gloss, or translucency.
- Don't: crowd elements. Overlapping shadows turn into gray smears.
