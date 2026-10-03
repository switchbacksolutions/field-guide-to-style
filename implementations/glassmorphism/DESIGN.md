---
name: "Glassmorphism"
description: "An interface style of the 2020s: semi-transparent panels with a strong background blur, rounded corners, and a thin light edge, placed over vivid gradients or colorful shapes so that the color shows through as a soft glow. The designer Michał Malewicz named it in 2020. Microsoft’s Fluent design system calls the same material Acrylic."
colors:
  bg: "#120e35"
  surface: "#ffffff1f"
  subtle: "#ffffff14"
  text: "#ffffff"
  muted: "#ddd8fb"
  border: "#ffffff47"
  primary: "#ffffff"
  on-primary: "#2b1a78"
  secondary: "#ffffff29"
  on-secondary: "#ffffff"
  accent: "#ffb86b"
  on-accent: "#120e35"
  violet: "#7c3aed"
  fuchsia: "#b0209f"
  blue: "#2459e0"
  orange: "#f0661f"
typography:
  display:
    fontFamily: "SF Pro Display, Segoe UI Variable Display, Inter, system-ui, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "76px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "SF Pro Display, Segoe UI Variable Display, Inter, system-ui, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  body:
    fontFamily: "SF Pro Text, Segoe UI Variable Text, Inter, system-ui, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "SF Pro Text, Segoe UI Variable Text, Inter, system-ui, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: "0.04em"
  code:
    fontFamily: "SF Mono, Cascadia Mono, ui-monospace, Menlo, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: "0px"
  sm: "12px"
  md: "18px"
  lg: "26px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "20px"
  lg: "32px"
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

An interface style of the 2020s: semi-transparent panels with a strong background blur, rounded corners, and a thin light edge, placed over vivid gradients or colorful shapes so that the color shows through as a soft glow. The designer Michał Malewicz named it in 2020. Microsoft’s Fluent design system calls the same material Acrylic.

Moods: airy, layered, luminous, premium, calm.

Full record: api/styles/glassmorphism.json. Specimen: implementations/glassmorphism/index.html.

## Colors

- **Vivid backdrop.** Saturated gradients or large colored blobs sit behind the glass, often violet, pink, blue, and orange on a dark or light base. The glass itself stays neutral.
- **bg** (#120e35): Deep indigo base under the color blobs.
- **surface** (#ffffff1f): Frosted glass: 12 % white. Use with blur.md.
- **subtle** (#ffffff14): A fainter glass layer for rows and chips.
- **text** (#ffffff)
- **muted** (#ddd8fb)
- **border** (#ffffff47): The light edge of the glass.
- **primary** (#ffffff): Opaque white action on translucent glass.
- **on-primary** (#2b1a78)
- **secondary** (#ffffff29)
- **on-secondary** (#ffffff)
- **accent** (#ffb86b)
- **on-accent** (#120e35)
- **violet** (#7c3aed)
- **fuchsia** (#b0209f)
- **blue** (#2459e0)
- **orange** (#f0661f)

## Typography

- **Clean sans-serif.** Geometric or neo-grotesque sans-serif type, often white on dark glass or dark on light glass, with little decoration.
- **display** ("SF Pro Display", "Segoe UI Variable Display", Inter, system-ui, -apple-system, "Helvetica Neue", sans-serif)
- **body** ("SF Pro Text", "Segoe UI Variable Text", Inter, system-ui, -apple-system, "Helvetica Neue", sans-serif)
- **mono** ("SF Mono", "Cascadia Mono", ui-monospace, Menlo, monospace)

## Layout

- **Floating cards.** Content sits in separate rounded cards that float above the backdrop. Depth comes from layer order and from different levels of opacity, not from perspective.
- **Large radii.** Corners are round, typically 12–24 px on cards and fully rounded on buttons and chips.

## Elevation & Depth

- **sm** (0px 4px 16px 0px #0a062433)
- **md** (0px 12px 40px 0px #0a06244d)

## Shapes

- **Frosted glass.** Panels have a semi-transparent white or tinted fill and a strong background blur. Shapes behind them show as soft, out-of-focus color.
- **Light edge.** A 1 px border in translucent white marks the edge of the glass. A soft, wide shadow lifts the panel.
- **none** (0px)
- **sm** (12px)
- **md** (18px)
- **lg** (26px)
- **pill** (999px)

## Do's and Don'ts

- Do: Put a vivid gradient or large colored shapes behind the content, so that the glass has something to blur.
- Do: Give panels a translucent fill (10–40 % white or a tinted dark), a background blur of 12–40 px, a 1 px translucent white border, and a radius of 16–24 px.
- Do: Lift panels with a wide, soft shadow of low opacity.
- Do: Use layers of different opacity to show hierarchy: the more opaque the panel, the more important the content.
- Do: Use a clean sans-serif and keep the content inside the glass flat.
- Do: Give the primary action an opaque fill so that it stands out from the glass.
- Don't: put text directly on the busy backdrop. Put it on glass that is opaque and blurred enough for a contrast of at least 4.5:1.
- Don't: use translucency without blur. Clear transparency makes text hard to read.
- Don't: stack many glass layers on top of each other.
- Don't: add gloss highlights, reflections, or material textures.
- Don't: depend on backdrop-filter alone. Give the panel a fill that stays readable when the browser does not support blur or the user asks for reduced transparency.
