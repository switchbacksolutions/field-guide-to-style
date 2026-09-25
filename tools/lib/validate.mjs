// Checks data against the JSON Schema subset that data/schema uses, so the build needs no packages.

export function validate(schema, value, path = "$", root = schema) {
  if (schema.$ref) {
    const target = schema.$ref.replace(/^#\//, "").split("/").reduce((node, key) => node[key], root);
    return validate(target, value, path, root);
  }
  const errors = [];
  const fail = (message) => errors.push(`${path}: ${message}`);

  if (schema.enum && !schema.enum.includes(value)) {
    fail(`must be one of ${schema.enum.join(", ")}; got ${JSON.stringify(value)}`);
    return errors;
  }
  if (schema.type && typeOf(value) !== schema.type && !(schema.type === "number" && typeOf(value) === "integer")) {
    fail(`must be ${schema.type}; got ${typeOf(value)}`);
    return errors;
  }
  if (typeof value === "string") {
    if (schema.minLength && value.length < schema.minLength) fail(`must have at least ${schema.minLength} characters`);
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) fail(`must match ${schema.pattern}`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems && value.length < schema.minItems) fail(`must have at least ${schema.minItems} items`);
    if (schema.maxItems !== undefined && value.length > schema.maxItems) fail(`must have at most ${schema.maxItems} items`);
    if (schema.items) value.forEach((item, i) => errors.push(...validate(schema.items, item, `${path}[${i}]`, root)));
  }
  if (typeOf(value) === "object") {
    for (const key of schema.required ?? []) if (!(key in value)) fail(`missing required property "${key}"`);
    for (const [key, child] of Object.entries(value)) {
      const rule = schema.properties?.[key] ?? schema.additionalProperties;
      if (rule === false) fail(`unknown property "${key}"`);
      else if (rule && rule !== true) errors.push(...validate(rule, child, `${path}.${key}`, root));
    }
  }
  return errors;
}

function typeOf(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  if (Number.isInteger(value)) return "integer";
  return typeof value;
}
