// Measures a rendered page's visual traits from computed styles. Paste into a browser console or a
// browser-automation "evaluate" call, then run: JSON.stringify(await extractTraits()). Metric names match style fingerprints.

globalThis.extractTraits = async function extractTraits({ screens = 4, grid = [32, 20] } = {}) {
  const VERSION = "4";
  const round = (n, d = 2) => (Number.isFinite(n) ? Math.round(n * 10 ** d) / 10 ** d : null);
  const median = (xs) => {
    const s = xs.filter(Number.isFinite).sort((a, b) => a - b);
    return s.length ? (s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2) : null;
  };
  const weightedMedian = (pairs) => {
    const s = pairs.filter(([v, w]) => Number.isFinite(v) && w > 0).sort((a, b) => a[0] - b[0]);
    const total = s.reduce((t, [, w]) => t + w, 0);
    let acc = 0;
    for (const [v, w] of s) if ((acc += w) >= total / 2) return v;
    return null;
  };
  // Modern sites return oklch(), lab(), or color() from getComputedStyle, so non-rgb values go through a 1x1 canvas.
  const ctx = Object.assign(document.createElement("canvas"), { width: 1, height: 1 }).getContext("2d", { willReadFrequently: true });
  const colorCache = new Map();
  const parseColor = (c) => {
    if (!c || c === "transparent" || c === "none") return null;
    const m = /^rgba?\(([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)(?:[ ,/]+([\d.]+%?))?\)$/.exec(c);
    if (m) return { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : m[4].endsWith("%") ? parseFloat(m[4]) / 100 : parseFloat(m[4]) };
    if (!colorCache.has(c)) {
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = "#000";
      ctx.fillStyle = c;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
      colorCache.set(c, a ? { r, g, b, a: a / 255 } : null);
    }
    return colorCache.get(c);
  };
  const COLOR_FN = /(?:rgba?|hsla?|oklch|oklab|lab|lch|color)\([^()]*\)/g;
  const hex = ({ r, g, b }) => "#" + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
  // Chroma (max minus min channel) instead of HSL saturation, which rates near-white creams as fully saturated.
  const chroma = ({ r, g, b }) => (Math.max(r, g, b) - Math.min(r, g, b)) / 255;
  const lightness = ({ r, g, b }) => (Math.max(r, g, b) + Math.min(r, g, b)) / 510;
  const hue = ({ r, g, b }) => {
    const max = Math.max(r, g, b), d = max - Math.min(r, g, b);
    if (!d) return 0;
    const h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    return (h * 60 + 360) % 360;
  };
  const luminance = ({ r, g, b }) => {
    const [R, G, B] = [r, g, b].map((v) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };
  const contrast = (a, b) => {
    const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
    return (x + 0.05) / (y + 0.05);
  };
  const visible = (el, cs = getComputedStyle(el)) => {
    if (cs.display === "none" || cs.visibility === "hidden" || parseFloat(cs.opacity) === 0) return false;
    const r = el.getBoundingClientRect();
    return r.width > 1 && r.height > 1;
  };
  const MONO = /mono|courier|consolas|menlo|monaco|code|terminal/i;
  const firstFamily = (stack) => stack.split(",")[0].trim().replace(/^["']|["']$/g, "");
  // Tiled or repeating backgrounds are patterns (dots, grids, squiggles), which differ from smooth gradients.
  const isPattern = (cs) =>
    /repeating-/.test(cs.backgroundImage) ||
    (/gradient\(|url\(/.test(cs.backgroundImage) && cs.backgroundSize.split(",").some((sz) => /\d/.test(sz) && !/^100%( 100%)?$/.test(sz.trim())));

  // Colors merge when they are this close in RGB space, so antialiasing and near-duplicates count as one.
  const palette = [];
  const addColor = (c, weight) => {
    if (!c || c.a < 0.5 || weight <= 0) return;
    const near = palette.find((p) => Math.hypot(p.c.r - c.r, p.c.g - c.g, p.c.b - c.b) < 18);
    if (near) near.w += weight;
    else palette.push({ c, w: weight });
  };

  // ---- text ----
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const runs = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const text = node.textContent.replace(/\s+/g, "");
    if (!text) continue;
    const el = node.parentElement;
    const cs = getComputedStyle(el);
    if (!visible(el, cs)) continue;
    runs.push({ el, cs, chars: text.length, size: parseFloat(cs.fontSize), weight: parseInt(cs.fontWeight, 10), family: firstFamily(cs.fontFamily), stack: cs.fontFamily, upper: cs.textTransform === "uppercase" || (text.length > 3 && /[A-Z]/.test(text) && text === text.toUpperCase()), center: cs.textAlign === "center", tracking: parseFloat(cs.letterSpacing) / parseFloat(cs.fontSize) || 0, color: parseColor(cs.color) });
  }
  const totalChars = runs.reduce((t, r) => t + r.chars, 0) || 1;
  const families = {};
  for (const r of runs) families[r.family] = (families[r.family] ?? 0) + r.chars;
  const baseSize = weightedMedian(runs.map((r) => [r.size, r.chars]));
  const sizes = [...new Set(runs.map((r) => Math.round(r.size)))].filter((s) => s >= baseSize).sort((a, b) => a - b);
  const steps = [];
  for (let i = 1; i < sizes.length; i++) if (sizes[i] / sizes[i - 1] >= 1.05) steps.push(sizes[i] / sizes[i - 1]);
  const headings = runs.filter((r) => r.size >= baseSize * 1.5);
  const textColor = runs.length ? runs.reduce((acc, r) => { const k = r.color && hex(r.color); acc[k] = (acc[k] ?? 0) + r.chars; return acc; }, {}) : {};
  const dominantText = Object.entries(textColor).sort((a, b) => b[1] - a[1])[0]?.[0];

  // ---- surfaces ----
  const boxes = [];
  for (const el of document.body.querySelectorAll("*")) {
    const cs = getComputedStyle(el);
    if (!visible(el, cs)) continue;
    const rect = el.getBoundingClientRect();
    if (rect.width * rect.height < 400) continue;
    const bg = parseColor(cs.backgroundColor);
    const parentBg = el.parentElement ? parseColor(getComputedStyle(el.parentElement).backgroundColor) : null;
    const hasBg = bg && bg.a > 0.1 && (!parentBg || hex(bg) !== hex(parentBg));
    const borderW = Math.max(...["Top", "Right", "Bottom", "Left"].map((s) => (cs[`border${s}Style`] !== "none" ? parseFloat(cs[`border${s}Width`]) : 0)));
    const shadow = cs.boxShadow !== "none" ? cs.boxShadow : null;
    const pattern = isPattern(cs);
    const gradient = /gradient\(/.test(cs.backgroundImage) && !pattern;
    const blur = /blur\(/.test(cs.backdropFilter ?? "") || /blur\(/.test(cs.webkitBackdropFilter ?? "");
    if (!(hasBg || borderW >= 1 || shadow || gradient || pattern || blur)) continue;
    const radius = Math.min(parseFloat(cs.borderTopLeftRadius) || 0, Math.min(rect.width, rect.height) / 2);
    const shadowParts = shadow ? shadow.split(/,(?![^(]*\))/).map((s) => s.replace(COLOR_FN, "").trim().split(/\s+/).map(parseFloat)) : [];
    boxes.push({ radius, borderW, shadow: !!shadow, shadowBlur: shadowParts.length ? Math.max(...shadowParts.map((p) => p[2] || 0)) : null, shadowOffset: shadowParts.length ? Math.max(...shadowParts.map((p) => Math.hypot(p[0] || 0, p[1] || 0))) : null, gradient, pattern, blur });
  }
  const share = (pred) => (boxes.length ? boxes.filter(pred).length / boxes.length : 0);
  const shadowed = boxes.filter((b) => b.shadow);

  // ---- area sampling for the background palette ----
  // Some sites replace window.scrollTo, so scroll the document element directly.
  const scroller = document.scrollingElement ?? document.documentElement;
  const start = scroller.scrollTop;
  const bgHits = [];
  // Browsers paint the body background on the whole canvas when the root element has none.
  const opaque = (c) => (c && c.a > 0.5 ? c : null);
  const canvas = opaque(parseColor(getComputedStyle(document.documentElement).backgroundColor)) ?? opaque(parseColor(getComputedStyle(document.body).backgroundColor)) ?? { r: 255, g: 255, b: 255, a: 1 };
  let imageHits = 0, gradientHits = 0, patternHits = 0, samples = 0;
  const maxScroll = Math.min(document.documentElement.scrollHeight - innerHeight, innerHeight * (screens - 1));
  for (let y = 0; y <= Math.max(0, maxScroll); y += innerHeight) {
    scroller.scrollTop = y;
    // setTimeout, not requestAnimationFrame: animation frames do not run in background tabs.
    await new Promise((r) => setTimeout(r, 60));
    for (let i = 0; i < grid[0]; i++) for (let j = 0; j < grid[1]; j++) {
      const el = document.elementFromPoint(((i + 0.5) / grid[0]) * innerWidth, ((j + 0.5) / grid[1]) * innerHeight);
      if (!el) continue;
      samples++;
      if (/^(IMG|VIDEO|CANVAS|PICTURE)$/.test(el.tagName) || el.closest("svg")) { imageHits++; continue; }
      let node = el, color = null, sawPattern = false, sawGradient = false;
      while (node) {
        const cs = getComputedStyle(node);
        if (isPattern(cs)) sawPattern = true;
        else if (/url\(/.test(cs.backgroundImage)) { color = "image"; break; }
        else if (/gradient\(/.test(cs.backgroundImage)) {
          sawGradient = true;
          // A smooth gradient contributes its opaque stop colors in equal parts.
          const stops = [...cs.backgroundImage.matchAll(COLOR_FN)].map((m) => parseColor(m[0])).filter((c) => c && c.a > 0.5);
          if (stops.length) { color = stops.map((c) => ({ ...c, w: 1 / stops.length })); break; }
        }
        const c = parseColor(cs.backgroundColor);
        if (c && c.a > 0.5) { color = c; break; }
        node = node.parentElement;
      }
      if (sawPattern) patternHits++;
      if (sawGradient) gradientHits++;
      if (color === "image") imageHits++;
      else bgHits.push(...[color ?? canvas].flat());
    }
  }
  scroller.scrollTop = start;
  for (const c of bgHits) addColor(c, (c.w ?? 1) / (samples || 1));
  // elementFromPoint cannot see ::before and ::after, which often carry shapes, so add their filled area directly.
  const sampledArea = innerWidth * innerHeight * (Math.floor(Math.max(0, maxScroll) / innerHeight) + 1);
  const sampledBottom = Math.max(0, maxScroll) + innerHeight;
  for (const el of document.body.querySelectorAll("*")) {
    const top = el.getBoundingClientRect().top + scrollY;
    if (top > sampledBottom) continue;
    for (const pseudo of ["::before", "::after"]) {
      const ps = getComputedStyle(el, pseudo);
      if (ps.content === "none" || ps.display === "none") continue;
      const area = (parseFloat(ps.width) || 0) * (parseFloat(ps.height) || 0) * (ps.clipPath !== "none" ? 0.5 : 1);
      if (area >= 400) addColor(parseColor(ps.backgroundColor), area / sampledArea);
    }
  }
  // Text counts toward the palette at a fifth of its character share, since glyphs cover little area.
  for (const r of runs) addColor(r.color, (0.2 * r.chars) / totalChars);
  const paletteTotal = palette.reduce((t, p) => t + p.w, 0) || 1;
  const sorted = palette.sort((a, b) => b.w - a.w).map((p) => ({ ...p, share: p.w / paletteTotal }));
  const bgCounts = {};
  for (const c of bgHits) bgCounts[hex(c)] = (bgCounts[hex(c)] ?? 0) + (c.w ?? 1);
  const dominantBg = Object.entries(bgCounts).sort((a, b) => b[1] - a[1])[0]?.[0];
  const fromHex = (h) => h && { r: parseInt(h.slice(1, 3), 16), g: parseInt(h.slice(3, 5), 16), b: parseInt(h.slice(5, 7), 16) };

  return {
    tool: "tools/extract-traits.js",
    version: VERSION,
    url: location.href,
    title: document.title,
    captured: new Date().toISOString(),
    viewport: { width: innerWidth, height: innerHeight },
    type: {
      families: Object.entries(families).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([family, n]) => ({ family, share: round(n / totalChars) })),
      baseSize: round(baseSize, 1),
      maxSize: round(Math.max(...runs.map((r) => r.size)), 1),
      sizeRange: round(Math.max(...runs.map((r) => r.size)) / baseSize),
      scaleRatio: round(median(steps)),
      headingWeight: weightedMedian(headings.map((r) => [r.weight, r.chars])),
      bodyWeight: weightedMedian(runs.filter((r) => Math.abs(r.size - baseSize) < 1).map((r) => [r.weight, r.chars])),
      headingTracking: round(weightedMedian(headings.map((r) => [r.tracking, r.chars])), 3),
      uppercaseShare: round(runs.filter((r) => r.upper).reduce((t, r) => t + r.chars, 0) / totalChars),
      monoShare: round(runs.filter((r) => MONO.test(r.stack) && !/sans|serif/i.test(r.family)).reduce((t, r) => t + r.chars, 0) / totalChars),
      centerShare: round(runs.filter((r) => r.center).reduce((t, r) => t + r.chars, 0) / totalChars)
    },
    color: {
      palette: sorted.slice(0, 10).map((p) => ({ hex: hex(p.c), share: round(p.share, 3) })),
      background: dominantBg ?? null,
      text: dominantText ?? null,
      contrast: dominantBg && dominantText ? round(contrast(fromHex(dominantBg), fromHex(dominantText)), 1) : null,
      chroma: round(sorted.reduce((t, p) => t + chroma(p.c) * p.share, 0)),
      lightness: round(sorted.reduce((t, p) => t + lightness(p.c) * p.share, 0)),
      chromaticShare: round(sorted.filter((p) => chroma(p.c) >= 0.3).reduce((t, p) => t + p.share, 0)),
      // How strong the colors are, independent of how much area they cover.
      accentChroma: (() => { const cs = sorted.filter((p) => chroma(p.c) >= 0.3); const w = cs.reduce((t, p) => t + p.share, 0); return w ? round(cs.reduce((t, p) => t + chroma(p.c) * p.share, 0) / w) : null; })(),
      distinct: sorted.filter((p) => p.share >= 0.02).length,
      // Distinct 30-degree hue families among strong colors, however small their area.
      hues: new Set(sorted.filter((p) => chroma(p.c) >= 0.3 && p.share >= 0.003).map((p) => Math.floor(hue(p.c) / 30))).size,
      imageShare: round(imageHits / (samples || 1)),
      gradientShare: round(gradientHits / (samples || 1)),
      patternShare: round(patternHits / (samples || 1))
    },
    surface: {
      boxes: boxes.length,
      radius: { median: round(median(boxes.map((b) => b.radius)), 1), max: round(Math.max(0, ...boxes.map((b) => b.radius)), 1), roundShare: round(share((b) => b.radius >= 4)) },
      border: { share: round(share((b) => b.borderW >= 1)), medianWidth: round(median(boxes.filter((b) => b.borderW >= 1).map((b) => b.borderW)), 1) },
      shadow: { share: round(share((b) => b.shadow)), hardShare: shadowed.length ? round(shadowed.filter((b) => b.shadowBlur === 0).length / shadowed.length) : null, medianBlur: round(median(shadowed.map((b) => b.shadowBlur)), 1), medianOffset: round(median(shadowed.map((b) => b.shadowOffset)), 1) },
      gradientShare: round(share((b) => b.gradient)),
      patternShare: round(share((b) => b.pattern)),
      blurShare: round(share((b) => b.blur))
    }
  };
};
