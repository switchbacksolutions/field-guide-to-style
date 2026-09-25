---
name: "Minimalist Machine"
description: "A quiet technical aesthetic: the interface exposes its parts, relationships, and purpose with very little decoration."
colors:
  bg: "#f7f7f2"
  surface: "#ffffff"
  subtle: "#e9ece3"
  text: "#20231f"
  muted: "#60655b"
  border: "#c9cdc1"
  primary: "#20231f"
  on-primary: "#f7f7f2"
  accent: "#d9fb66"
  on-accent: "#20231f"
typography:
  display:
    fontFamily: "Helvetica Neue"
    fontSize: "90px"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.06em"
  heading:
    fontFamily: "Helvetica Neue"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Helvetica Neue"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "SFMono-Regular"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  sm: "0px"
  md: "0px"
  lg: "0px"
  pill: "0px"
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

A quiet technical aesthetic: the interface exposes its parts, relationships, and purpose with very little decoration.

Moods: precise, utilitarian, quiet, technical.

Full record: api/styles/minimalist-machine.json. Specimen: implementations/minimalist-machine/index.html.

## Colors

- **Neutral ground.** White or pale canvases with dark marks. Use strong color sparingly for emphasis or state.
- **bg** (#f7f7f2)
- **surface** (#ffffff)
- **subtle** (#e9ece3)
- **text** (#20231f)
- **muted** (#60655b)
- **border** (#c9cdc1)
- **primary** (#20231f)
- **on-primary** (#f7f7f2)
- **accent** (#d9fb66): Signal lime. Use for one mark or state per view.
- **on-accent** (#20231f)

## Typography

- **Functional typography.** Plain sans-serif headings; monospaced labels, values, and object names.
- **display** ("Helvetica Neue", Helvetica, Arial, sans-serif)
- **body** ("Helvetica Neue", Helvetica, Arial, sans-serif)
- **mono** (SFMono-Regular, Consolas, "Liberation Mono", monospace): Labels, values, dates, and object names.

## Layout

- **Structure first.** Thin rules, outlined boxes, and explicit connections organize the surface.
- **Purposeful space.** Room between groups; density inside a task or a connected system.

## Shapes

- **none** (0px)
- **sm** (0px)
- **md** (0px)
- **lg** (0px)
- **pill** (0px)

## Do's and Don'ts

- Do: Use rows and separators for collections of information.
- Do: Give objects direct, descriptive names.
- Do: Use connections to explain actual relationships.
- Do: Balance a spacious overview with compact working areas.
- Don't: imitate the surface with small type, fake terminal output, or decorative wiring. Keep labels readable, links obvious, and relationships real.
