// Inline rich text for data fields. Internal targets (ref:, style:, page:) resolve per page depth and fail the build when unknown.

export const escape = (text) =>
  String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function inline(text, resolve) {
  return escape(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, target) => `<a href="${resolve(target.replace(/&amp;/g, "&"))}">${label}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
}

// Strips markup for plain-text outputs such as meta descriptions and llms.txt.
export const plain = (text) =>
  String(text).replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*?([^*]+)\*\*?/g, "$1").replace(/`([^`]+)`/g, "$1");
