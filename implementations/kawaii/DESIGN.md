---
name: "Kawaii"
description: "The graphic side of kawaii, the Japanese culture of cuteness that grew from girls’ magazines and round teenage handwriting in the 1970s and from character goods such as Sanrio’s Hello Kitty (1974): soft pastel colors, rounded shapes, and big-headed characters with dot eyes, small mouths, and pink cheeks. This record covers that pastel, character-led graphic and interface core. Fashion styles such as Decora, Fairy Kei, and Lolita, and the darker yami-kawaii and kimo-kawaii, are related branches."
colors:
  bg: "#fff6f9"
  surface: "#ffffff"
  subtle: "#ffe4ee"
  text: "#5b3a4a"
  muted: "#7d5a6a"
  border: "#5b3a4a"
  primary: "#ff9ec7"
  on-primary: "#5b3a4a"
  secondary: "#8fe3c4"
  on-secondary: "#5b3a4a"
  accent: "#ffe08a"
  on-accent: "#5b3a4a"
  sky: "#8fcbff"
  on-sky: "#5b3a4a"
  lavender: "#c4a8ff"
  on-lavender: "#5b3a4a"
  peach: "#ffb59a"
  blush: "#ff7fa8"
typography:
  display:
    fontFamily: "ui-rounded"
    fontSize: "96px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0.01em"
  heading:
    fontFamily: "ui-rounded"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0.01em"
  body:
    fontFamily: "ui-rounded"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: "ui-rounded"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  sm: "16px"
  md: "28px"
  lg: "44px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
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

The graphic side of kawaii, the Japanese culture of cuteness that grew from girls’ magazines and round teenage handwriting in the 1970s and from character goods such as Sanrio’s Hello Kitty (1974): soft pastel colors, rounded shapes, and big-headed characters with dot eyes, small mouths, and pink cheeks. This record covers that pastel, character-led graphic and interface core. Fashion styles such as Decora, Fairy Kei, and Lolita, and the darker yami-kawaii and kimo-kawaii, are related branches.

Moods: cute, sweet, gentle, playful, innocent, friendly, cheerful.

Full record: api/styles/kawaii.json. Specimen: implementations/kawaii/index.html.

## Colors

- **Pastels on near-white.** Sakura pink, mint, baby blue, butter yellow, lavender, and peach on a white or pale pink ground. Several pastels appear together. Text and outlines are a warm dark brown or plum rather than pure black.
- **bg** (#fff6f9): Pale strawberry milk: the page is almost white with a pink cast.
- **surface** (#ffffff)
- **subtle** (#ffe4ee)
- **text** (#5b3a4a): Cocoa: text and character outlines are warm dark brown, not black.
- **muted** (#7d5a6a)
- **border** (#5b3a4a)
- **primary** (#ff9ec7): Sakura pink.
- **on-primary** (#5b3a4a)
- **secondary** (#8fe3c4): Mint.
- **on-secondary** (#5b3a4a)
- **accent** (#ffe08a): Butter yellow.
- **on-accent** (#5b3a4a)
- **sky** (#8fcbff): Baby blue.
- **on-sky** (#5b3a4a)
- **lavender** (#c4a8ff): Lavender.
- **on-lavender** (#5b3a4a)
- **peach** (#ffb59a): Peach.
- **blush** (#ff7fa8): Cheek blush on character faces.

## Typography

- **Round letters.** Rounded gothic (maru gothic) or round handwritten letters, from the 1970s marui ji handwriting. Headings are bold and friendly, never condensed or sharp.
- **display** (ui-rounded, "Hiragino Maru Gothic ProN", "Arial Rounded MT Bold", "Varela Round", Nunito, Quicksand, system-ui, sans-serif)
- **body** (ui-rounded, "Hiragino Maru Gothic ProN", Nunito, Quicksand, "Segoe UI", system-ui, sans-serif)
- **mono** (ui-rounded, "Hiragino Maru Gothic ProN", "Arial Rounded MT Bold", Nunito, system-ui, sans-serif): Labels stay rounded; kawaii has no technical monospace voice.

## Layout

- **Everything is rounded.** Blobs, circles, and pills replace corners. Cards and panels have very large radii, buttons are pills, and even speech bubbles and badges are soft.
- **Mascot as guide.** A character often stands beside the content, greets the user, or reacts to actions. Layouts stay simple so the character and the color carry the mood.

## Shapes

- **Sticker outlines.** Characters and many interface parts have an even, medium outline in the dark text color, like a sticker. Fills inside are flat or have one soft highlight. Polka dots and gingham are common patterns.
- **none** (0px)
- **sm** (16px)
- **md** (28px)
- **lg** (44px)
- **pill** (999px)

## Do's and Don'ts

- Do: Use a white or very pale pink page with three to five pastel fills: pink, mint, baby blue, butter yellow, lavender, or peach.
- Do: Set text and outlines in a warm dark brown or plum, so that text on pastel fills keeps its contrast.
- Do: Round everything: pill buttons and inputs, circles for badges, and radii of 32 px or more on cards and panels.
- Do: Give one mascot or object a face with two dot eyes, a small mouth, and pink cheeks. Keep it decorative, next to the content.
- Do: Scatter a few hearts, stars, or sparkles, and use polka dots for a pattern.
- Do: Use a rounded sans-serif in bold for headings.
- Do: Use springy hover and press motion, and switch it off for reduced motion.
- Don't: use square corners or sharp, angular shapes.
- Don't: use saturated primaries, neon, or black as the main colors.
- Don't: set body text in pastel colors. Pastel text on a pale ground is unreadable.
- Don't: draw long-limbed, faceless figures. That is Corporate Memphis.
- Don't: put text inside the mascot or make the mascot carry information that is not also in the text.
- Don't: use chrome, metallic gradients, or glossy reflections.
