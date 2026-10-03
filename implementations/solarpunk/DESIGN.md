---
name: "Solarpunk"
description: "The visual side of solarpunk, a speculative-fiction and activist movement named in 2008 that imagines ecologically sustainable futures as the inverse of cyberpunk. Its aesthetic took shape on Tumblr from 2014: bright greens and blues, sunlight as a motif, plants that grow over buildings, visible solar and wind technology, and Art Nouveau curves and stained glass. This record covers that illustrative and graphic core. The fiction, the politics, and green architecture are treated as related branches."
colors:
  bg: "#fbf8ec"
  surface: "#ffffff"
  subtle: "#e2f1d0"
  text: "#1d3326"
  muted: "#4f6655"
  border: "#2a5636"
  primary: "#00a843"
  on-primary: "#10241a"
  secondary: "#0b8fd0"
  on-secondary: "#ffffff"
  accent: "#f5b922"
  on-accent: "#1d3326"
typography:
  display:
    fontFamily: "Seravek"
    fontSize: "78px"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  heading:
    fontFamily: "Seravek"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "0em"
  body:
    fontFamily: "Charter"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Seravek"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  sm: "10px"
  md: "22px"
  lg: "200px"
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

The visual side of solarpunk, a speculative-fiction and activist movement named in 2008 that imagines ecologically sustainable futures as the inverse of cyberpunk. Its aesthetic took shape on Tumblr from 2014: bright greens and blues, sunlight as a motif, plants that grow over buildings, visible solar and wind technology, and Art Nouveau curves and stained glass. This record covers that illustrative and graphic core. The fiction, the politics, and green architecture are treated as related branches.

Moods: hopeful, sunlit, verdant, communal, handmade.

Full record: api/styles/solarpunk.json. Specimen: implementations/solarpunk/index.html.

## Colors

- **Sunlit greens, sky, and gold.** Bright leaf and moss green, sky and water blue, and sun yellow or gold on white or warm cream. The colours are clear and bright, not neon and not muted to earth tones. The Aesthetics Wiki gives green, yellow, blue, and white.
- **bg** (#fbf8ec): Warm, sunlit cream.
- **surface** (#ffffff)
- **subtle** (#e2f1d0): Pale new-leaf green.
- **text** (#1d3326): Deep forest green, used for text instead of black.
- **muted** (#4f6655)
- **border** (#2a5636): Deep green outline, like the lead lines of stained glass.
- **primary** (#00a843): Bright leaf green.
- **on-primary** (#10241a)
- **secondary** (#0b8fd0): Clear sky and water blue.
- **on-secondary** (#ffffff)
- **accent** (#f5b922): Sun gold.
- **on-accent** (#1d3326)

## Typography

- **Humanist and Art Nouveau lettering.** Friendly humanist sans-serifs and readable serifs in mixed case. Display lettering can borrow Art Nouveau curves. Wide-spaced capitals and monospace terminal type belong to cyberpunk and other styles.
- **display** (Seravek, "Gill Sans", "Gill Sans MT", Candara, "Segoe UI", sans-serif)
- **body** (Charter, "Bitstream Charter", "Sitka Text", Cambria, Georgia, serif)
- **mono** (Seravek, "Gill Sans", "Gill Sans MT", Candara, "Segoe UI", sans-serif)

## Layout

- **Arches and stained-glass panes.** Arched windows, domes, and greenhouses frame the scene. Their glazing is split into leaded panes, and the solar panel itself is drawn as stained glass: a grid of cells in green, gold, and blue.
- **Open, layered, and lived-in.** Scenes are wide and bright, with a sky above terraces and gardens. Illustrations are full of small details of daily life. Graphic layouts put content in rounded, framed panels on a light ground, with generous space.

## Shapes

- **Matte, handmade surfaces.** Flat colour, painted or drawn by hand, with thin dark outlines. Wood, clay, woven fabric, and patched textiles. No gloss, chrome, glass blur, or drop shadows.
- **none** (0px)
- **sm** (10px)
- **md** (22px)
- **lg** (200px): Arch or dome: applied to the two top corners of a panel.
- **pill** (999px)

## Do's and Don'ts

- Do: Use a white or warm cream ground with three colour families: leaf green, sky blue, and sun gold.
- Do: Keep colours bright and clear, stronger than earth tones and weaker than neon.
- Do: Frame key content in arched or domed panels, like a greenhouse or a window.
- Do: Fill one or two panels with a stained-glass grid of cells in green, gold, and blue, as a solar panel drawn in leaded glass.
- Do: Outline panels and buttons with a thin deep-green line, and keep surfaces flat and matte.
- Do: Set text in a humanist sans-serif or a readable serif in mixed case.
- Do: Show plants and visible, simple technology together: leaves, a sun, a turbine, a sail.
- Don't: use a dark ground, neon colours, or glitch effects. That points to cyberpunk.
- Don't: use glossy gradients, glass blur, bubbles, or drop shadows. That points to Frutiger Aero.
- Don't: use brass, gears, or sepia. That points to steampunk.
- Don't: mute every colour to earth tones on parchment. That points to Art Nouveau.
- Don't: use stepped corners, chevrons, or sunbursts in metallic colours. That points to Art Deco.
- Don't: use solarpunk imagery as a green veneer for a product that is not sustainable. Critics call this greenwashing.
