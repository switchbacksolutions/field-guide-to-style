// Turns a style's authored token file into DTCG 2025.10 JSON, CSS variables, Tailwind v4, shadcn/ui, and DESIGN.md.
// Authored files use DTCG groups with shorthand values (hex strings, "16px") so people can write them by hand.

import { plain } from "./markup.mjs";

// Tailwind v4 only makes utilities from these theme namespaces. Other groups go in a plain :root block.
const TAILWIND_NAMESPACES = ["color", "font", "text", "font-weight", "tracking", "leading", "spacing", "radius", "shadow", "inset-shadow", "drop-shadow", "blur", "ease", "animate"];

export function flatten(tokens) {
  const out = [];
  const walk = (node, path, inheritedType) => {
    const type = node.$type ?? inheritedType;
    if ("$value" in node) return out.push({ path, type, value: node.$value, description: node.$description, extensions: node.$extensions });
    for (const [key, child] of Object.entries(node)) if (!key.startsWith("$")) walk(child, [...path, key], type);
  };
  walk(tokens, [], undefined);
  return out;
}

function resolver(flat) {
  const byPath = new Map(flat.map((t) => [t.path.join("."), t]));
  const resolve = (value, seen = new Set()) => {
    if (typeof value === "string" && /^\{[^}]+\}$/.test(value)) {
      const key = value.slice(1, -1);
      if (seen.has(key) || !byPath.has(key)) throw new Error(`token reference ${value} does not resolve`);
      return resolve(byPath.get(key).value, new Set([...seen, key]));
    }
    if (Array.isArray(value)) return value.map((v) => resolve(v, seen));
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolve(v, seen)]));
    return value;
  };
  return resolve;
}

const isRef = (value) => typeof value === "string" && /^\{[^}]+\}$/.test(value);
// DTCG dimensions allow only px and rem, so em-based tracking is stored as a number with this unit extension.
const EXT = "style-inspiration";
const withUnit = (value, token) => (token?.extensions?.[EXT]?.unit ? `${value}${token.extensions[EXT].unit}` : String(value));
const tracking = (value) => (typeof value === "number" ? `${value}em` : value);

const hexToDtcg = (hex) => {
  const h = hex.replace("#", "");
  const components = [0, 2, 4].map((i) => Math.round((parseInt(h.slice(i, i + 2), 16) / 255) * 10000) / 10000);
  const color = { colorSpace: "srgb", components, hex: `#${h.slice(0, 6).toLowerCase()}` };
  if (h.length === 8) color.alpha = Math.round((parseInt(h.slice(6, 8), 16) / 255) * 1000) / 1000;
  return color;
};
const dimToDtcg = (dim) => {
  if (typeof dim === "number") return { value: dim, unit: "px" };
  const match = /^(-?[\d.]+)(px|rem)$/.exec(dim);
  if (!match) throw new Error(`dimension "${dim}" must use px or rem`);
  return { value: Number(match[1]), unit: match[2] };
};

function toDtcgValue(type, value) {
  switch (type) {
    case "color":
      return hexToDtcg(value);
    case "dimension":
      return dimToDtcg(value);
    case "shadow":
      return [value].flat().map((s) => ({ color: hexToDtcg(s.color), offsetX: dimToDtcg(s.offsetX), offsetY: dimToDtcg(s.offsetY), blur: dimToDtcg(s.blur), spread: dimToDtcg(s.spread ?? "0px"), ...(s.inset ? { inset: true } : {}) }));
    case "gradient":
      return value.stops.map((s) => ({ color: hexToDtcg(s.color), position: s.position }));
    case "duration":
      return { value: Number(String(value).replace("ms", "")), unit: "ms" };
    case "typography":
      return Object.fromEntries(
        Object.entries(value)
          .filter(([k]) => k !== "textTransform")
          .map(([k, v]) => [k, isRef(v) ? v : k === "fontSize" ? dimToDtcg(v) : v])
      );
    default:
      return value;
  }
}

function toCss(type, value) {
  switch (type) {
    case "fontFamily":
      return [value].flat().map((f) => (/[\s\d]/.test(f) && !/^(ui-|system-ui)/.test(f) ? `"${f}"` : f)).join(", ");
    case "shadow":
      return value === "none" ? "none" : [value].flat().map((s) => `${s.inset ? "inset " : ""}${s.offsetX} ${s.offsetY} ${s.blur} ${s.spread ?? "0px"} ${s.color}`).join(", ");
    case "gradient":
      return `linear-gradient(${value.angle ?? "180deg"}, ${value.stops.map((s) => `${s.color} ${Math.round(s.position * 100)}%`).join(", ")})`;
    case "cubicBezier":
      return `cubic-bezier(${value.join(", ")})`;
    default:
      return String(value);
  }
}

// Returns [cssName, cssValue] pairs. Typography composites expand to one variable per property.
function cssPairs(flat, resolve) {
  const pairs = [];
  for (const token of flat) {
    const name = `--${token.path.join("-")}`;
    const value = resolve(token.value);
    if (token.type === "typography") {
      const map = { fontFamily: ["font-family", "fontFamily"], fontSize: ["font-size"], fontWeight: ["font-weight"], lineHeight: ["line-height"], letterSpacing: ["letter-spacing"], textTransform: ["text-transform"] };
      for (const [key, [suffix, type]] of Object.entries(map)) if (value[key] !== undefined) pairs.push([`${name}-${suffix}`, key === "letterSpacing" ? tracking(value[key]) : toCss(type ?? "raw", value[key])]);
    } else pairs.push([name, withUnit(toCss(token.type, value), token)]);
  }
  return pairs;
}

const block = (selector, pairs) => `${selector} {\n${pairs.map(([k, v]) => `  ${k}: ${v};`).join("\n")}\n}`;

export function tokenOutputs(id, title, tokens, style, notice) {
  const flat = flatten(tokens);
  const resolve = resolver(flat);
  const header = (what) => `/* ${title}: ${what}. Generated by tools/build.mjs from data/tokens/${id}.tokens.json. ${notice} */`;

  const dtcg = {};
  for (const token of flat) {
    let node = dtcg;
    for (const key of token.path.slice(0, -1)) node = node[key] ??= {};
    node[token.path.at(-1)] = {
      $type: token.type,
      $value: isRef(token.value) ? token.value : toDtcgValue(token.type, token.value),
      ...(token.description ? { $description: token.description } : {}),
      ...(token.extensions ? { $extensions: token.extensions } : {})
    };
  }

  const pairs = cssPairs(flat, resolve);
  const inTailwind = ([name]) => TAILWIND_NAMESPACES.some((ns) => name.startsWith(`--${ns}-`));
  const color = (key) => {
    const token = flat.find((t) => t.path.join(".") === `color.${key}`);
    return token ? resolve(token.value) : undefined;
  };
  const v = (path) => {
    const token = flat.find((t) => t.path.join(".") === path);
    return token ? withUnit(toCss(token.type, resolve(token.value)), token) : undefined;
  };

  const shadcnVars = {
    background: color("bg"),
    foreground: color("text"),
    card: color("surface"),
    "card-foreground": color("text"),
    popover: color("surface"),
    "popover-foreground": color("text"),
    primary: color("primary"),
    "primary-foreground": color("on-primary"),
    secondary: color("secondary") ?? color("surface"),
    "secondary-foreground": color("on-secondary") ?? color("text"),
    muted: color("subtle") ?? color("surface"),
    "muted-foreground": color("muted"),
    accent: color("accent"),
    "accent-foreground": color("on-accent"),
    destructive: color("danger") ?? "#b42318",
    border: color("border"),
    input: color("border"),
    ring: color("focus") ?? color("primary"),
    radius: v("radius.md")
  };
  const shadcnTheme = { "font-sans": v("font.body"), "font-serif": v("font.serif"), "font-mono": v("font.mono"), "shadow-sm": v("shadow.sm"), "shadow-md": v("shadow.md") };
  const clean = (obj) => Object.fromEntries(Object.entries(obj).filter(([, val]) => val !== undefined));

  return {
    "tokens.json": JSON.stringify({ $description: `${title} design tokens (DTCG 2025.10). ${notice}`, ...dtcg }, null, 2),
    "tokens.css": `${header("CSS custom properties")}\n${block(":root", pairs)}`,
    "tailwind.css": `${header('Tailwind CSS v4 theme. Import after @import "tailwindcss"')}\n${block("@theme", pairs.filter(inTailwind))}\n\n${block(":root", pairs.filter((p) => !inTailwind(p)))}`,
    "shadcn.css": `${header("shadcn/ui theme variables. Paste into globals.css")}\n${block(":root", Object.entries({ ...clean(shadcnVars), ...clean(shadcnTheme) }).map(([k, val]) => [`--${k}`, val]))}`,
    "registry-item.json": JSON.stringify(
      { $schema: "https://ui.shadcn.com/schema/registry-item.json", name: id, type: "registry:theme", title, description: style ? plain(style.summary) : title, cssVars: { theme: clean(shadcnTheme), light: clean(shadcnVars) } },
      null,
      2
    ),
    "DESIGN.md": designMd(id, title, flat, resolve, style, notice)
  };
}

// DESIGN.md (github.com/google-labs-code/design.md, alpha): YAML tokens plus prose sections in the spec order.
function designMd(id, title, flat, resolve, style, notice) {
  const q = (value) => JSON.stringify(String(value));
  const group = (name) => flat.filter((t) => t.path[0] === name && t.path.length === 2);
  const colors = group("color");
  const typography = group("typography");
  const lines = ["---", `name: ${q(title)}`];
  if (style) lines.push(`description: ${q(plain(style.lede))}`);
  lines.push("colors:", ...colors.map((t) => `  ${t.path[1]}: ${q(resolve(t.value))}`));
  if (typography.length) {
    lines.push("typography:");
    for (const t of typography) {
      const value = resolve(t.value);
      lines.push(`  ${t.path[1]}:`);
      if (value.fontFamily) lines.push(`    fontFamily: ${q([value.fontFamily].flat()[0])}`);
      for (const key of ["fontSize", "fontWeight", "lineHeight"]) if (value[key] !== undefined) lines.push(`    ${key}: ${typeof value[key] === "number" ? value[key] : q(value[key])}`);
      if (value.letterSpacing !== undefined) lines.push(`    letterSpacing: ${q(tracking(value.letterSpacing))}`);
    }
  }
  for (const [yamlKey, tokenGroup] of [["rounded", "radius"], ["spacing", "spacing"]]) {
    const items = group(tokenGroup);
    if (items.length) lines.push(`${yamlKey}:`, ...items.map((t) => `  ${t.path[1]}: ${q(resolve(t.value))}`));
  }
  const has = (path) => flat.some((t) => t.path.join(".") === path);
  const components = [];
  const add = (name, when, props) => when.every(has) && components.push([name, props]);
  add("page", ["color.bg", "color.text"], { backgroundColor: "{colors.bg}", textColor: "{colors.text}" });
  add("text-muted", ["color.bg", "color.muted"], { backgroundColor: "{colors.bg}", textColor: "{colors.muted}" });
  add("button-primary", ["color.primary", "color.on-primary"], { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", ...(has("radius.md") ? { rounded: "{rounded.md}" } : {}) });
  add("button-secondary", ["color.secondary", "color.on-secondary"], { backgroundColor: "{colors.secondary}", textColor: "{colors.on-secondary}", ...(has("radius.md") ? { rounded: "{rounded.md}" } : {}) });
  add("badge-accent", ["color.accent", "color.on-accent"], { backgroundColor: "{colors.accent}", textColor: "{colors.on-accent}" });
  add("card", ["color.surface", "color.text"], { backgroundColor: "{colors.surface}", textColor: "{colors.text}", ...(has("radius.lg") ? { rounded: "{rounded.lg}" } : {}) });
  add("panel-subtle", ["color.subtle", "color.text"], { backgroundColor: "{colors.subtle}", textColor: "{colors.text}" });
  add("divider", ["color.border"], { backgroundColor: "{colors.border}", height: "1px" });
  if (components.length) {
    lines.push("components:");
    for (const [name, props] of components) lines.push(`  ${name}:`, ...Object.entries(props).map(([k, val]) => `    ${k}: ${q(val)}`));
  }
  lines.push("---", "");

  const grammar = (facets) => (style?.grammar ?? []).filter((g) => facets.includes(g.facet)).map((g) => `- **${g.term}** ${plain(g.text)}`);
  const section = (heading, body) => (body.filter(Boolean).length ? [`## ${heading}`, "", ...body, ""] : []);
  const describe = (t) => `- **${t.path.at(-1)}** (${withUnit(toCss(t.type, resolve(t.value)), t)})${t.description ? `: ${t.description}` : ""}`;
  lines.push(
    ...section("Overview", style ? [plain(style.lede), "", `Moods: ${style.moods.join(", ")}.`, "", `Full record: api/styles/${id}.json. Specimen: implementations/${id}/index.html.`] : [title]),
    ...section("Colors", [...grammar(["color"]), ...colors.map(describe)]),
    ...section("Typography", [...grammar(["type"]), ...group("font").map(describe)]),
    ...section("Layout", grammar(["layout", "structure"])),
    ...section("Elevation & Depth", group("shadow").map(describe)),
    ...section("Shapes", [...grammar(["surface"]), ...group("radius").map(describe)]),
    ...section("Do's and Don'ts", style ? [...style.rules.do.map((r) => `- Do: ${plain(r)}`), ...style.rules.dont.map((r) => `- Don't: ${plain(r).replace(/^Do not /, "")}`)] : []),
    notice
  );
  return lines.join("\n");
}
