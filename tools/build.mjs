// Generates the static catalogue (HTML, board-data.js, api/, llms.txt) from data/ and content/.
// Output is committed so the site opens with no build step. --check fails on stale output. --validate only checks data.

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { validate } from "./lib/validate.mjs";
import { escape, inline, plain } from "./lib/markup.mjs";
import { tokenOutputs } from "./lib/tokens.mjs";
import { checkFingerprint } from "./lib/fingerprint.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CHECK = process.argv.includes("--check");
const VALIDATE = process.argv.includes("--validate");
const PAGES = ["index", "references", "collecting", "rights"];
const MEDIUM_LABELS = { "operating-system": "Operating system", "type-specimen": "Type specimen" };
const TIER_LABELS = { A: "Open license, stored", C: "Third-party work, stored with credit for commentary", D: "Link and metadata only" };
const NAMING_LABELS = {
  historical: "Established movement name",
  "internet-aesthetic": "Recent community name",
  industry: "Name used by designers and vendors",
  curatorial: "Name made by this catalogue"
};
const RELATION_LABELS = {
  "influenced-by": "Influenced by",
  "revival-of": "Revival of",
  "descendant-of": "Descends from",
  "reaction-against": "Reaction against",
  "related-to": "Related to"
};

const errors = [];
const outputs = new Map();

// ---------- load and check ----------

const readJson = (path) => {
  try {
    return JSON.parse(readFileSync(join(ROOT, path), "utf8"));
  } catch (error) {
    errors.push(`${path}: ${error.message}`);
    return null;
  }
};
const listJson = (dir) =>
  existsSync(join(ROOT, dir)) ? readdirSync(join(ROOT, dir)).filter((f) => f.endsWith(".json")).sort().map((f) => `${dir}/${f}`) : [];

const site = readJson("data/site.json");
const schemas = { style: readJson("data/schema/style.schema.json"), reference: readJson("data/schema/reference.schema.json") };

function loadRecords(dir, schema) {
  return listJson(dir)
    .map((path) => {
      const record = readJson(path);
      if (!record) return null;
      errors.push(...validate(schema, record).map((e) => `${path} ${e}`));
      if (record.id && `${dir}/${record.id}.json` !== path) errors.push(`${path}: file name must match id "${record.id}"`);
      return record;
    })
    .filter(Boolean);
}

const styles = loadRecords("data/styles", schemas.style).sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
const references = loadRecords("data/references", schemas.reference).sort(
  (a, b) => a.added.localeCompare(b.added) || a.title.localeCompare(b.title)
);
const styleById = new Map(styles.map((s) => [s.id, s]));
const refById = new Map(references.map((r) => [r.id, r]));

const measurements = new Map(
  listJson("data/measurements").map((path) => [path.split("/").pop().replace(/\.json$/, ""), readJson(path)])
);
const tokens = new Map(
  (existsSync(join(ROOT, "data/tokens")) ? readdirSync(join(ROOT, "data/tokens")) : [])
    .filter((f) => f.endsWith(".tokens.json"))
    .map((f) => [f.replace(/\.tokens\.json$/, ""), readJson(`data/tokens/${f}`)])
);

for (const style of styles) {
  if (PAGES.includes(style.id)) errors.push(`data/styles/${style.id}.json: id collides with a site page`);
  for (const link of style.lineage ?? []) {
    if (link.style && !styleById.has(link.style)) errors.push(`${style.id}: lineage names unknown style "${link.style}"`);
    if (!link.style && !link.label) errors.push(`${style.id}: a lineage entry needs "style" or "label"`);
  }
  for (const id of style.preview ?? []) {
    if (!refById.get(id)?.images?.length) errors.push(`${style.id}: preview "${id}" is not a reference with an image`);
  }
}
for (const ref of references) {
  for (const membership of ref.styles) {
    if (!styleById.has(membership.id)) errors.push(`${ref.id}: unknown style "${membership.id}"`);
  }
  for (const image of ref.images ?? []) {
    if (!existsSync(join(ROOT, image.file))) errors.push(`${ref.id}: image file ${image.file} does not exist`);
  }
}
for (const id of [...tokens.keys()]) if (!styleById.has(id)) errors.push(`data/tokens/${id}.tokens.json: no style with this id`);
// A measurement can arrive before its record (another agent may still be writing it), so this is only a warning.
const warnings = [];
for (const id of measurements.keys()) {
  if (!refById.has(id) && !styleById.has(id)) warnings.push(`data/measurements/${id}.json: no reference or style with this id yet`);
}

// ---------- helpers ----------

const prefix = (depth) => "../".repeat(depth);

function resolver(depth, where) {
  return (target) => {
    const [kind, id] = target.split(":");
    if (/^https?$/.test(kind) || target.startsWith("#")) return escape(target);
    if (kind === "ref" && refById.has(id)) return `${prefix(depth)}references/${id}.html`;
    if (kind === "style" && styleById.has(id)) return `${prefix(depth)}${id}.html`;
    if (kind === "page" && PAGES.includes(id)) return `${prefix(depth)}${id}.html`;
    if (kind === "file") return escape(`${prefix(depth)}${id}`);
    errors.push(`${where}: unknown link target "${target}"`);
    return "#";
  };
}

const date = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const time = (iso) => `<time datetime="${iso}">${date(iso)}</time>`;
const pad = (n, width = 2) => String(n).padStart(width, "0");
const cap = (text) => text.charAt(0).toUpperCase() + text.slice(1);
const mediumLabel = (m) => MEDIUM_LABELS[m] ?? cap(m);
const evidenceLabel = (ref) => cap(ref.evidence.level);
const breakTitle = (text) => escape(text).replace("|", "<br>");
const list = (items, fmt) => `<ul>${items.map((item) => `<li>${fmt(item)}</li>`).join("")}</ul>`;
const paragraphs = (items, fmt) => items.map((item) => `<p>${fmt(item)}</p>`).join("");
const imageClass = (image) => (image.display === "diagram" ? ' class="patch"' : "");
const kindLabel = (ref, membership) =>
  [mediumLabel(ref.medium), evidenceLabel(ref), membership?.basis === "agent" ? "Agent-proposed" : null].filter(Boolean).join(" / ");
const refsForStyle = (style) =>
  references.filter((r) => r.styles.some((m) => m.id === style.id)).map((r) => ({ ref: r, membership: r.styles.find((m) => m.id === style.id) }));
// Screenshots of specimen pages are the catalogue's own work, so they can stand in where no reference image is stored.
const specimenShot = (style) => {
  const file = `assets/specimens/${style.id}.jpg`;
  if (!existsSync(join(ROOT, file))) return null;
  const buf = readFileSync(join(ROOT, file));
  let i = 2;
  while (i < buf.length) {
    const marker = buf[i + 1];
    if (marker >= 0xc0 && marker <= 0xc3) return { file, height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7), alt: `The shared specimen page styled as ${style.title}.` };
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
};
const implementationFiles = (id) =>
  tokens.has(id)
    ? { tokens: `implementations/${id}/tokens.json`, css: `implementations/${id}/tokens.css`, tailwind: `implementations/${id}/tailwind.css`, shadcn: `implementations/${id}/shadcn.css`, registry: `implementations/${id}/registry-item.json`, designMd: `implementations/${id}/DESIGN.md`, specimen: existsSync(join(ROOT, `data/specimens/${id}.css`)) ? `implementations/${id}/index.html` : null }
    : null;

function emit(path, content) {
  outputs.set(path, content.endsWith("\n") ? content : `${content}\n`);
}

function layout({ title, description, depth = 0, current, main }) {
  const p = prefix(depth);
  const nav = [
    ["index", "Styles"],
    ["references", "References"],
    ["collecting", "Collecting"]
  ]
    .map(([page, label]) => `<a href="${p}${page}.html"${current === page ? ' aria-current="page"' : ""}>${label}</a>`)
    .join(" ");
  const publisher = `<a href="${escape(site.publisher.url)}">${escape(site.publisher.name)}</a>`;
  return `<!doctype html>
<!-- Generated by tools/build.mjs from data/ and content/. Edit those files, not this one. -->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(title)} · ${escape(site.title)}</title>
  <meta name="description" content="${escape(plain(description))}">
  <link rel="stylesheet" href="${p}assets/hub.css">
  <script src="${p}board-data.js" defer></script>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <header>
    <p class="masthead"><a class="brand" href="${p}index.html">${escape(site.title)}</a> <span class="byline">by ${publisher}</span></p>
    <nav aria-label="Main">${nav}</nav>
  </header>
  <main id="main">
${main}
  </main>
  <footer><p>${escape(site.footer)} <a href="${p}rights.html"${current === "rights" ? ' aria-current="page"' : ""}>Rights and removal</a></p><p>A ${publisher} product. Started ${time(site.started)}.</p></footer>
</body>
</html>`;
}

// ---------- pages ----------

function homePage() {
  const r = resolver(0, "data/site.json");
  const cards = styles
    .map((style, i) => {
      const shown = style.preview?.length ? style.preview : refsForStyle(style).filter(({ ref }) => ref.images?.length).slice(0, 2).map(({ ref }) => ref.id);
      const specimen = specimenShot(style);
      const images = shown.length
        ? shown
            .map((id) => refById.get(id).images[0])
            .map((img) => `<img${imageClass(img)} src="${img.file}" alt="${escape(img.alt)}" width="${img.width}" height="${img.height}">`)
            .join("\n          ")
        : specimen
          ? `<img src="${specimen.file}" alt="${escape(specimen.alt)}" width="${specimen.width}" height="${specimen.height}">`
          : "";
      return `      <article class="collection">
        <div class="collection-copy">
          <span class="number">${pad(i + 1)} / STYLE COLLECTION</span>
          <h3><a href="${style.id}.html">${escape(style.title)}</a></h3>
          <p>${inline(style.summary, r)}</p>
          <p class="tags">${style.moods.map((m) => escape(cap(m))).join(" / ")}</p>
          <a href="${style.id}.html">Explore the collection →</a>
        </div>${images ? `\n        <div class="preview" aria-label="Collection previews">\n          ${images}\n        </div>` : ""}
      </article>`;
    })
    .join("\n");
  const notes = site.home.notes
    .map((n) => `<section><h2>${escape(n.heading)}</h2><p>${inline(n.text, r)}</p><a href="${r(n.link.href)}">${escape(n.link.text)}</a></section>`)
    .join("\n      ");
  const main = `<header class="intro">
      <p class="eyebrow">A working collection / ${pad(styles.length, 3)}</p>
      <h1>${breakTitle(site.home.heading)}</h1>
      <p>${inline(site.home.lede, r)}</p>
    </header>
    <section aria-labelledby="styles">
      <header class="section-head"><h2 id="styles">Browse styles</h2><p>${styles.length} ${styles.length === 1 ? "collection" : "collections"} · ${references.length} references</p></header>
${cards}
    </section>
    <div class="notes-grid">
      ${notes}
    </div>`;
  emit("index.html", layout({ title: "Styles", description: site.description, current: "index", main }));
}

function referencesPage() {
  const r = resolver(0, "references index");
  const rows = references
    .map(
      (ref, i) =>
        `      <li><span class="number">${pad(i + 1)}</span><div><h3><a href="references/${ref.id}.html">${escape(ref.title)}</a></h3><p>${inline(ref.summary, r)}</p>${ref.styles
          .map((m) => `<a href="${m.id}.html">${escape(styleById.get(m.id)?.title ?? m.id)}</a>`)
          .join(" · ")}</div><span class="kind">${kindLabel(ref)}</span></li>`
    )
    .join("\n");
  const main = `<header class="intro"><p class="eyebrow">Source index / ${pad(references.length, 3)}</p><h1>References</h1><p>Individual sources, with evidence and ideas to reuse. Start with a source or follow it into a style.</p></header>
    <ol class="rows">
${rows}
    </ol>
    <p class="related">Have an image or another source to add? Follow the <a href="collecting.html">collecting guide</a>.</p>`;
  emit("references.html", layout({ title: "References", description: `All references in ${site.title}.`, current: "references", main }));
}

function stylePage(style, index) {
  const where = `data/styles/${style.id}.json`;
  const r = resolver(0, where);
  const members = refsForStyle(style);
  const reviewed = members.filter(({ ref }) => ref.evidence.level !== "pending").length;
  const pending = members.length - reviewed;
  const agent = members.filter(({ membership }) => membership.basis === "agent").length;
  const grammar = style.grammar;
  const impl = implementationFiles(style.id);

  const sections = [];
  sections.push(`<div class="columns">
      <section><h2>Visual grammar</h2>${list(grammar, (g) => `<strong>${escape(g.term)}</strong> ${inline(g.text, r)}`)}</section>
      ${style.synthesis?.length ? `<section><h2>What connects the references</h2>${paragraphs(style.synthesis, (t) => inline(t, r))}</section>` : identity(style, r)}
    </div>`);
  if (style.synthesis?.length) sections.push(`<div class="columns related">${identity(style, r)}${lineage(style, r)}</div>`);
  else if (style.lineage?.length) sections.push(`<div class="columns related">${lineage(style, r)}</div>`);

  const counts = [`${reviewed} reviewed`, pending ? `${pending} pending` : null, agent ? `${agent} agent-proposed` : null].filter(Boolean).join(" · ");
  sections.push(`<section class="related" aria-labelledby="refs">
      <header class="section-head"><h2 id="refs">References</h2><p>${counts}</p></header>
      ${members.length ? `<ol class="rows">
${members
  .map(
    ({ ref, membership }, i) =>
      `        <li><span class="number">${pad(i + 1)}</span><div><h3><a href="references/${ref.id}.html">${escape(ref.title)}</a></h3><p>${inline(membership.note, r)}</p></div><span class="kind">${kindLabel(ref, membership)}</span></li>`
  )
  .join("\n")}
      </ol>` : `<p>No references yet.</p>`}
    </section>`);

  if (style.rubric) {
    const rubric = style.rubric;
    sections.push(`<section class="related" aria-labelledby="rubric">
      <header class="section-head"><h2 id="rubric">Classification rubric</h2><p>The test for a new reference</p></header>
      <div class="columns">
        <section><h3>Identifies the style</h3>${list(rubric.diagnostic, (t) => inline(t, r))}</section>
        <section><h3>Rules it out</h3>${list(rubric.counter, (t) => inline(t, r))}</section>
      </div>
      ${rubric.confusions?.length ? `<h3>Often confused with</h3><dl>${rubric.confusions.map((c) => `<dt>${styleById.has(c.with) ? `<a href="${c.with}.html">${escape(styleById.get(c.with).title)}</a>` : escape(c.with)}</dt><dd>${inline(c.difference, r)}</dd>`).join("")}</dl>` : ""}
    </section>`);
  }

  sections.push(`<div class="columns related">
      <section><h2>Ideas to carry forward</h2>${list(style.rules.do, (t) => inline(t, r))}</section>
      <section><h2>Keep the function</h2>${list(style.rules.dont, (t) => inline(t, r))}${style.rules.uses?.length ? `<p>Useful directions: ${style.rules.uses.map((u) => escape(u.toLowerCase())).join(", ")}.</p>` : ""}${style.rules.avoid?.length ? `<p>Poor fits:</p>${list(style.rules.avoid, (t) => inline(t, r))}` : ""}</section>
    </div>`);

  if (impl || style.fingerprint?.length) {
    const files = impl
      ? `<ul>${[
          impl.specimen && `<li><a href="${impl.specimen}">Specimen page</a>: the standard content in this style.</li>`,
          `<li><a href="${impl.tokens}">tokens.json</a>: design tokens in the Design Tokens Community Group format.</li>`,
          `<li><a href="${impl.css}">tokens.css</a>: CSS custom properties.</li>`,
          `<li><a href="${impl.tailwind}">tailwind.css</a>: a Tailwind CSS v4 <code>@theme</code> block.</li>`,
          `<li><a href="${impl.shadcn}">shadcn.css</a> and <a href="${impl.registry}">registry-item.json</a>: shadcn/ui theme variables and a <code>registry:theme</code> item.</li>`,
          `<li><a href="${impl.designMd}">DESIGN.md</a>: tokens and rules in the DESIGN.md format.</li>`,
          `<li><a href="api/styles/${style.id}.json">api/styles/${style.id}.json</a>: this whole record for agents.</li>`
        ]
          .filter(Boolean)
          .join("")}</ul>`
      : `<p>No tokens yet.</p>`;
    const fingerprint = style.fingerprint?.length
      ? `<table><thead><tr><th scope="col">Metric</th><th scope="col">Range</th><th scope="col">Why</th></tr></thead><tbody>${style.fingerprint
          .map((f) => `<tr><td><code>${escape(f.metric)}</code></td><td>${rangeText(f)}</td><td>${inline(f.note, r)}</td></tr>`)
          .join("")}</tbody></table><p>The ranges are initial hypotheses until measured references calibrate them. Check a capture with <code>node tools/lint-style.mjs ${style.id} &lt;measurement.json&gt;</code>.</p>`
      : "";
    const shot = specimenShot(style);
    sections.push(`<section class="related" aria-labelledby="implement">
      <header class="section-head"><h2 id="implement">Implement</h2><p>For agents and developers</p></header>${shot && impl?.specimen ? `
      <figure class="specimen-shot"><a href="${impl.specimen}"><img src="${shot.file}" alt="${escape(shot.alt)}" width="${shot.width}" height="${shot.height}"></a><figcaption>The <a href="${impl.specimen}">specimen page</a>: the same content as every other style, built only from this style’s tokens and stylesheet.</figcaption></figure>` : ""}
      <div class="columns">
        <section><h3>Files</h3>${files}</section>
        <section>${fingerprint ? `<h3>Measured fingerprint</h3>${fingerprint}` : ""}</section>
      </div>
    </section>`);
  }

  const main = `<header class="intro">
      <p class="eyebrow"><a href="index.html">Styles</a> / ${pad(index + 1)}${style.status === "pilot" ? " / Pilot" : ""}</p>
      <h1>${escape(style.title)}</h1>
      <p>${inline(style.lede, r)}</p>
      <p class="tags">${style.moods.map((m) => escape(cap(m))).join(" / ")}</p>
    </header>
    ${sections.join("\n    ")}`;
  emit(`${style.id}.html`, layout({ title: style.title, description: style.lede, main }));
}

function identity(style, r) {
  const rows = [
    ["Name", escape(NAMING_LABELS[style.naming])],
    style.aliases?.length && ["Also called", escape(style.aliases.join(", "))],
    style.era && ["Era", escape([style.era.from, style.era.to ?? "present"].filter((v) => v !== undefined).join("–") + (style.era.note ? `. ${style.era.note}` : ""))],
    style.regions?.length && ["Regions", escape(style.regions.join(", "))],
    style.identifiers?.wikidata && ["Wikidata", `<a href="https://www.wikidata.org/wiki/${escape(style.identifiers.wikidata)}">${escape(style.identifiers.wikidata)}</a>`],
    style.identifiers?.aat && ["Getty AAT", `<a href="http://vocab.getty.edu/page/aat/${escape(style.identifiers.aat)}">${escape(style.identifiers.aat)}</a>`],
    style.attestation?.length && ["Name used by", style.attestation.map((a) => `<a href="${escape(a.url)}">${escape(a.label)}</a>`).join(", ")]
  ].filter(Boolean);
  return `<section><h2>Identity</h2><dl>${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl></section>`;
}

function lineage(style, r) {
  if (!style.lineage?.length) return "";
  return `<section><h2>Lineage</h2>${list(style.lineage, (l) => {
    const name = l.style
      ? `<a href="${l.style}.html">${escape(styleById.get(l.style)?.title ?? l.style)}</a>`
      : l.wikidata
        ? `<a href="https://www.wikidata.org/wiki/${l.wikidata}">${escape(l.label)}</a>`
        : escape(l.label);
    return `<strong>${RELATION_LABELS[l.relation]} ${name}.</strong> ${inline(l.note, r)}`;
  })}</section>`;
}

const rangeText = (f) =>
  f.min !== undefined && f.max !== undefined ? `${f.min} to ${f.max}` : f.min !== undefined ? `at least ${f.min}` : f.max !== undefined ? `at most ${f.max}` : "recorded";

function referencePage(ref, index) {
  const where = `data/references/${ref.id}.json`;
  const r = resolver(1, where);
  const p = prefix(1);
  const styleLinks = ref.styles
    .map((m) => {
      const note = [m.qualifier, m.basis === "agent" ? "agent-proposed, not yet reviewed by a person" : null].filter(Boolean).join("; ");
      return `<a href="${p}${m.id}.html">${escape(styleById.get(m.id)?.title ?? m.id)}</a>${note ? ` (${escape(note)})` : ""}`;
    })
    .join(", ");
  const facts = [
    ["Source", `<a href="${escape(ref.source.url)}">${escape(ref.source.label)}</a>${ref.source.archive ? ` (<a href="${escape(ref.source.archive)}">archived copy</a>)` : ""}`],
    ref.creator && ["Creator", ref.creator.url ? `<a href="${escape(ref.creator.url)}">${escape(ref.creator.name)}</a>` : escape(ref.creator.name)],
    ref.made && ["Made", escape(ref.made)],
    [ref.styles.length > 1 ? "Styles" : "Style", styleLinks],
    ref.moods?.length && ["Moods", escape(cap(ref.moods.join(", ")))],
    ["Evidence", inline(ref.evidence.note, r)],
    [ref.evidence.level === "pending" ? "Attempted" : "Reviewed", time(ref.reviewed)],
    ["Rights", `${escape(TIER_LABELS[ref.rights.tier])}. License: ${escape(ref.rights.license)}. <a href="${p}rights.html">Rights policy</a>`]
  ].filter(Boolean);
  const measured = measurements.get(ref.id);
  const body = [
    `<dl>${facts.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>`,
    ref.notice && `<p class="notice">${inline(ref.notice, r)}</p>`,
    ref.context?.length && `<section><h2>Context</h2>${paragraphs(ref.context, (t) => inline(t, r))}</section>`,
    ref.observed?.length && `<section><h2>Observed</h2>${list(ref.observed, (t) => inline(t, r))}</section>`,
    ref.interpretation?.length && `<section><h2>Why it belongs</h2>${paragraphs(ref.interpretation, (t) => inline(t, r))}</section>`,
    ref.borrow?.length && `<section><h2>Borrow</h2>${paragraphs(ref.borrow, (t) => inline(t, r))}</section>`,
    measured && measuredSection(measured, ref.id),
    ref.next?.length && `<section><h2>What to review next</h2>${list(ref.next, (t) => inline(t, r))}</section>`
  ]
    .filter(Boolean)
    .join("\n        ");
  const figures = (ref.images ?? [])
    .map((img) => {
      const provenance = img.kind === "screenshot" ? `Captured ${date(img.saved)}.` : `${img.original ? `<a href="${escape(img.original)}">Original image</a>, saved` : "Saved"} ${date(img.saved)}.`;
      const rights = [ref.rights.statement && inline(ref.rights.statement, r), ref.rights.license !== "unverified" && `License: ${escape(ref.rights.license)}.`].filter(Boolean).join(" ");
      return `<figure><a href="${p}${img.file}"><img${imageClass(img)} src="${p}${img.file}" alt="${escape(img.alt)}" width="${img.width}" height="${img.height}"></a><figcaption>${inline(img.caption, r)} ${provenance} ${rights} Open the image for full size.</figcaption></figure>`;
    })
    .join("\n        ");
  const content = figures
    ? `<div class="reference-layout">
      <div>
        ${body}
      </div>
      <div class="figures">
        ${figures}
      </div>
    </div>`
    : `<div class="prose">
      ${body}
    </div>`;
  const main = `<header class="intro"><p class="eyebrow"><a href="${p}references.html">References</a> / ${mediumLabel(ref.medium)} / ${pad(index + 1)}</p><h1>${breakTitle(ref.titleBreak ?? ref.title)}</h1><p>${inline(ref.lede, r)}</p></header>
    ${content}${ref.related ? `\n    <p class="related">${inline(ref.related, r)}</p>` : ""}`;
  emit(`references/${ref.id}.html`, layout({ title: ref.title, description: `${ref.title}: ${ref.lede}`, depth: 1, main }));
}

function measuredSection(m, id) {
  const palette = (m.color?.palette ?? []).slice(0, 8);
  const rows = [
    m.type?.families?.length && ["Type families", escape(m.type.families.slice(0, 3).map((f) => `${f.family} (${Math.round(f.share * 100)}%)`).join(", "))],
    m.type?.scaleRatio && ["Type scale ratio", escape(String(m.type.scaleRatio))],
    m.surface?.radius && ["Median radius", `${escape(String(m.surface.radius.median))} px`],
    m.color?.chroma !== undefined && ["Mean chroma", escape(String(m.color.chroma))],
    palette.length && ["Palette", `<ul class="swatches">${palette.map((c) => `<li><svg width="14" height="14" aria-hidden="true"><rect width="14" height="14" fill="${escape(c.hex)}"/></svg> ${escape(c.hex)} ${Math.round(c.share * 100)}%</li>`).join("")}</ul>`]
  ].filter(Boolean);
  return `<section><h2>Measured</h2><p>Machine-extracted by <code>${escape(m.tool ?? "tools/extract-traits.js")}</code>${m.captured ? ` on ${time(m.captured.slice(0, 10))}` : ""}. <a href="../data/measurements/${id}.json">Full measurement</a>.</p><dl>${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl></section>`;
}

function contentPage(name, title, description) {
  const path = `content/${name}.html`;
  if (!existsSync(join(ROOT, path))) return errors.push(`${path}: missing`);
  const main = readFileSync(join(ROOT, path), "utf8").trimEnd();
  emit(`${name}.html`, layout({ title, description, current: name, main }));
}

// ---------- machine outputs ----------

function styleRecord(style) {
  return {
    ...style,
    page: `${style.id}.html`,
    implementation: implementationFiles(style.id),
    tokens: tokens.get(style.id) ?? null,
    references: refsForStyle(style).map(({ ref, membership }) => ({
      id: ref.id,
      title: ref.title,
      medium: ref.medium,
      evidence: ref.evidence.level,
      basis: membership.basis,
      note: plain(membership.note),
      page: `references/${ref.id}.html`,
      source: ref.source.url,
      image: ref.images?.[0]?.file ?? null,
      measurement: measurements.has(ref.id) ? `data/measurements/${ref.id}.json` : null
    }))
  };
}

function machineOutputs() {
  const registry = {
    title: site.title,
    collections: styles.map((s) => ({ id: s.id, title: s.title, href: `${s.id}.html`, moods: s.moods, status: s.status })),
    references: references.map((r) => ({ id: r.id, title: r.title, href: `references/${r.id}.html`, type: r.type, medium: r.medium, styles: r.styles.map((m) => m.id), status: r.evidence.level }))
  };
  emit("board-data.js", `// Generated by tools/build.mjs. Edit data/, not this file.\nglobalThis.styleHub = ${JSON.stringify(registry, null, 2)};`);
  emit("api/catalogue.json", JSON.stringify({ title: site.title, styles: styles.map((s) => ({ id: s.id, title: s.title, summary: plain(s.summary), moods: s.moods, status: s.status, api: `api/styles/${s.id}.json`, implementation: implementationFiles(s.id) })), references: references.map((r) => ({ ...r, page: `references/${r.id}.html` })) }, null, 2));
  for (const style of styles) emit(`api/styles/${style.id}.json`, JSON.stringify(styleRecord(style), null, 2));

  const url = (path) => `${site.url}/${path}`;
  emit("api/select.json", JSON.stringify({
    title: site.title,
    description: "A compact index for choosing a style from a project's mood and product type. Paths in a style record are relative to the site URL.",
    site: site.url,
    guide: url("skills/style-select/SKILL.md"),
    styles: styles.map((s) => {
      // Only website captures measure the same way as a finished project, so they are the evidence that a fingerprint works.
      const captures = refsForStyle(s).map(({ ref }) => measurements.get(ref.id)).filter((m) => m?.tool === "tools/extract-traits.js");
      const impl = implementationFiles(s.id);
      return {
        id: s.id,
        title: s.title,
        page: url(`${s.id}.html`),
        record: url(`api/styles/${s.id}.json`),
        status: s.status,
        summary: plain(s.summary),
        moods: s.moods,
        uses: s.rules.uses ?? [],
        avoid: s.rules.avoid ?? [],
        era: s.era ? { from: s.era.from ?? null, to: s.era.to ?? null } : null,
        tokens: Boolean(impl),
        fingerprint: {
          metrics: s.fingerprint?.length ?? 0,
          websiteCaptures: captures.length,
          capturesPassing: captures.filter((m) => checkFingerprint(s, m).every((r) => r.status !== "fail")).length
        }
      };
    })
  }, null, 2));

  const lines = [
    `# ${site.title}`,
    "",
    `> ${site.description} Each style has a definition, lineage, a classification rubric, rules for implementation, and, when available, design tokens and framework files.`,
    "",
    "Use it like this: choose a style from the list, read its JSON record for rules and tokens, then copy its implementation files. Rules under `rules.dont` are as important as the tokens.",
    "",
    "## Choose a style",
    "",
    `- [Selection index](api/select.json): moods, good and poor fits, status, and fingerprint evidence for every style in one file.`,
    `- [style-select skill](skills/style-select/SKILL.md): a procedure that turns a project's mood into a chosen style, then applies and checks it.`,
    "",
    "## Styles",
    "",
    ...styles.map((s) => `- [${s.title}](api/styles/${s.id}.json): ${plain(s.summary)}${implementationFiles(s.id) ? ` Tokens: implementations/${s.id}/tokens.css` : ""}`),
    "",
    "## Data",
    "",
    "- [Catalogue](api/catalogue.json): all styles and references.",
    "- [Style schema](data/schema/style.schema.json) and [reference schema](data/schema/reference.schema.json).",
    "- [Rights and removal](rights.html): third-party works keep their owners' rights."
  ];
  emit("llms.txt", lines.join("\n"));

  for (const [id, tokenSet] of tokens) {
    const style = styleById.get(id);
    if (!style) continue;
    for (const [file, content] of Object.entries(tokenOutputs(id, style.title, tokenSet, style))) emit(`implementations/${id}/${file}`, content);
    const specimenCss = `data/specimens/${id}.css`;
    if (existsSync(join(ROOT, specimenCss))) {
      emit(`implementations/${id}/specimen.css`, readFileSync(join(ROOT, specimenCss), "utf8"));
      emit(`implementations/${id}/index.html`, specimenPage(style));
    }
  }
}

function specimenPage(style) {
  const content = readFileSync(join(ROOT, "content/specimen.html"), "utf8").trimEnd();
  return `<!doctype html>
<!-- Generated by tools/build.mjs from content/specimen.html and data/specimens/${style.id}.css. -->
<html lang="en" data-style="${style.id}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(style.title)} specimen · ${escape(site.title)}</title>
  <meta name="description" content="The standard specimen content styled as ${escape(style.title)}.">
  <link rel="stylesheet" href="tokens.css">
  <link rel="stylesheet" href="specimen.css">
</head>
<body>
  <p class="specimen-back"><a href="../../${style.id}.html">Back to ${escape(style.title)}</a></p>
${content}
</body>
</html>`;
}

// ---------- run ----------

if (!errors.length) {
  homePage();
  referencesPage();
  styles.forEach(stylePage);
  references.forEach(referencePage);
  contentPage("collecting", "Collecting", "How to add style collections and references.");
  contentPage("rights", "Rights and removal", `Rights, attribution, and removal requests for ${site.title}.`);
  machineOutputs();
}

if (warnings.length) console.warn(`Warning:\n${warnings.map((w) => `  ${w}`).join("\n")}`);
if (errors.length) {
  console.error(`Build failed with ${errors.length} error(s):\n${errors.map((e) => `  ${e}`).join("\n")}`);
  process.exit(1);
}

if (VALIDATE) {
  console.log(`Valid: ${styles.length} styles and ${references.length} references.`);
  process.exit(0);
}

const manifestPath = "api/manifest.json";
const previous = existsSync(join(ROOT, manifestPath)) ? JSON.parse(readFileSync(join(ROOT, manifestPath), "utf8")) : [];
const generated = [...outputs.keys(), manifestPath].sort();
emit(manifestPath, JSON.stringify(generated, null, 2));
const orphans = previous.filter((path) => !outputs.has(path));

if (CHECK) {
  const stale = [...outputs].filter(([path, content]) => !existsSync(join(ROOT, path)) || readFileSync(join(ROOT, path), "utf8") !== content).map(([path]) => path);
  if (stale.length || orphans.length) {
    console.error(`Generated files are out of date. Run: node tools/build.mjs\n${[...stale.map((p) => `  stale: ${p}`), ...orphans.map((p) => `  orphan: ${p}`)].join("\n")}`);
    process.exit(1);
  }
  console.log(`Check passed: ${outputs.size} generated files match data/.`);
} else {
  for (const [path, content] of outputs) {
    mkdirSync(dirname(join(ROOT, path)), { recursive: true });
    writeFileSync(join(ROOT, path), content);
  }
  for (const path of orphans) rmSync(join(ROOT, path), { force: true });
  console.log(`Built ${outputs.size} files from ${styles.length} styles and ${references.length} references${orphans.length ? `; removed ${orphans.length} orphan(s)` : ""}.`);
}
