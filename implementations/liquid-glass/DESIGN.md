---
name: "Liquid Glass"
description: "The design language that Apple announced at WWDC on June 9, 2025 for all its operating systems. Controls and navigation become a separate layer of translucent glass that refracts and reflects the content under it, with bright specular edges, capsule shapes, and corners concentric with the hardware. The content below stays opaque and runs edge to edge. Apple names it after the material."
colors:
  bg: "#f2f2f7"
  surface: "#ffffff"
  subtle: "#f6f6fa"
  text: "#1d1d1f"
  muted: "#5e5e66"
  border: "#e3e3ea"
  primary: "#0a6cff"
  on-primary: "#ffffff"
  secondary: "#ffffff73"
  on-secondary: "#1d1d1f"
  accent: "#ff6a3d"
  on-accent: "#ffffff"
  glass-sheen: "#ffffffb3"
  glass-clear: "#ffffff2e"
  glass-rim: "#ffffffcc"
  wallpaper-blue: "#2f6bff"
  wallpaper-pink: "#ff5c8a"
  wallpaper-orange: "#ffa53d"
  wallpaper-teal: "#21c7c2"
  wallpaper-deep: "#1f4fd8"
  wallpaper-violet: "#6a5cff"
typography:
  display:
    fontFamily: "SF Pro Display"
    fontSize: "80px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  heading:
    fontFamily: "SF Pro Display"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "SF Pro Text"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.47
  label:
    fontFamily: "SF Pro Text"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.47
    letterSpacing: "0.01em"
rounded:
  none: "0px"
  sm: "16px"
  md: "22px"
  lg: "34px"
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

The design language that Apple announced at WWDC on June 9, 2025 for all its operating systems. Controls and navigation become a separate layer of translucent glass that refracts and reflects the content under it, with bright specular edges, capsule shapes, and corners concentric with the hardware. The content below stays opaque and runs edge to edge. Apple names it after the material.

Moods: luminous, liquid, layered, premium, dynamic.

Full record: api/styles/liquid-glass.json. Specimen: implementations/liquid-glass/index.html.

## Colors

- **Color from content.** The glass takes its color from the content under it. Controls are mostly neutral and monochrome. A tint marks only the prominent action. The page carries the color, often in photos and wallpapers.
- **bg** (#f2f2f7): Grouped background, as in iOS system grey 6.
- **surface** (#ffffff): Opaque content cards. Glass is for controls, not content.
- **subtle** (#f6f6fa): Inset content rows and cards inside a section.
- **text** (#1d1d1f)
- **muted** (#5e5e66)
- **border** (#e3e3ea): Separators inside content only. Glass has a lit rim, not a stroke.
- **primary** (#0a6cff): Tint for the prominent glass button.
- **on-primary** (#ffffff)
- **secondary** (#ffffff73): Regular glass fill: about 45 % white over the content.
- **on-secondary** (#1d1d1f)
- **accent** (#ff6a3d)
- **on-accent** (#ffffff)
- **glass-sheen** (#ffffffb3): Specular highlight on the lit edge of the glass.
- **glass-clear** (#ffffff2e): Clear glass: little fill, so the content stays visible.
- **glass-rim** (#ffffffcc)
- **wallpaper-blue** (#2f6bff)
- **wallpaper-pink** (#ff5c8a)
- **wallpaper-orange** (#ffa53d)
- **wallpaper-teal** (#21c7c2)
- **wallpaper-deep** (#1f4fd8)
- **wallpaper-violet** (#6a5cff)

## Typography

- **San Francisco, bold titles.** SF Pro with large, bold, left-aligned titles and vibrant label colors on the glass. Body text sits on opaque content.
- **display** ("SF Pro Display", -apple-system, system-ui, "Segoe UI Variable Display", Inter, "Helvetica Neue", sans-serif)
- **body** ("SF Pro Text", -apple-system, system-ui, "Segoe UI Variable Text", Inter, "Helvetica Neue", sans-serif)
- **mono** ("SF Mono", ui-monospace, Menlo, "Cascadia Mono", monospace)

## Layout

- **Two layers.** A functional layer of glass controls and navigation floats above an opaque content layer. Content scrolls under the controls and shows through them. Content itself does not use glass.
- **Floating capsules.** Tab bars, toolbars, and buttons are capsules inset from the screen edge, not bars pinned to it. Corners are concentric with the window and the hardware: inner radius equals outer radius minus padding.

## Elevation & Depth

- **sm** (inset 1px 1px 0px 0px #ffffffcc, inset -1px -1px 0px 0px #ffffff59, 0px 4px 14px 0px #0000001f): Glass rim: a bright specular line on the top-left edge, a weaker one on the bottom-right, and a soft drop shadow.
- **md** (inset 1.5px 1.5px 1px 0px #ffffffd9, inset -1px -1.5px 1px 0px #ffffff66, inset 0px 0px 12px 0px #ffffff40, 0px 10px 30px 0px #00000029): Floating toolbar: a wider lit rim, an inner glow, and a deeper drop shadow.

## Shapes

- **Lensing glass.** The glass bends and magnifies what is under it, most visibly near its edges, and it reflects the surrounding color. The clear variant blurs very little. The regular variant blurs more and adjusts luminosity for legibility.
- **Specular rim.** The edge of the glass is lit, not stroked: a bright highlight on one side and a weaker one on the opposite side, which move with the device. There is no hairline border and no gloss band.
- **none** (0px)
- **sm** (16px)
- **md** (22px)
- **lg** (34px): Outer radius. Inner radius = outer radius minus padding, so corners stay concentric.
- **pill** (999px)

## Do's and Don'ts

- Do: Put glass only on the control and navigation layer: toolbars, tab bars, buttons, search fields, and sheets. Keep content surfaces opaque.
- Do: Let content run to the edges and scroll under the floating controls, so that the glass has something to show.
- Do: Give glass a light translucent fill, a low blur (2–12 px) with boosted saturation, a soft diagonal sheen, and an inset highlight on the lit edge.
- Do: Make bars and buttons capsules inset from the edges. Keep nested corners concentric: inner radius equals outer radius minus padding.
- Do: Keep controls monochrome. Tint only the prominent action.
- Do: Use the clear variant only over rich media, and add a dark dimming layer of about 35 % under it when the content is bright.
- Do: Respect reduced-transparency and increased-contrast settings with a nearly opaque fill.
- Don't: use glass in the content layer, for example on cards, tables, or article text.
- Don't: stack glass on glass.
- Don't: draw a hairline border around the glass. Light the edge with an inset highlight instead.
- Don't: add a gloss band, reflections of sky, or material textures.
- Don't: put long text or dense forms on clear glass.
- Don't: animate controls without a reason. NN/g reports that pulsing and wobbling controls distract.
- Don't: depend on backdrop-filter or SVG displacement alone. Give each glass element a fill that stays readable without them.

Copyright (c) 2026 Switchback Solutions LLC. MIT License: https://field-guide-to-style.alec-5fe.workers.dev/rights.html#license
