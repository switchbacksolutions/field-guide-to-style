// Checks one measurement against a style's fingerprint ranges. Shared by build.mjs and lint-style.mjs.

export function checkFingerprint(style, measurement) {
  const read = (path) => path.split(".").reduce((node, key) => (node == null ? undefined : node[key]), measurement);
  return (style.fingerprint ?? []).map(({ metric, min, max, note }) => {
    const value = read(metric);
    const status = typeof value !== "number" ? "not measured" : (min !== undefined && value < min) || (max !== undefined && value > max) ? "fail" : "pass";
    return { metric, value: value ?? null, min: min ?? null, max: max ?? null, status, note };
  });
}
