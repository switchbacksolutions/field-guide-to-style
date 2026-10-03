// Splits Impeccable detector findings into those a style's detectorExceptions explain and those it does not.
// An exception needs a matching snippet and has a max count, so a new value or a new instance of the same rule still fails.

export function applyExceptions(findings, exceptions = [], id = "style") {
  const patterns = exceptions.map((e) => {
    try {
      return new RegExp(e.match);
    } catch (error) {
      throw new Error(`${id}: detectorExceptions match /${e.match}/ is not a valid regular expression.`);
    }
  });
  const used = exceptions.map(() => 0);
  const unexplained = [];
  const explained = [];
  for (const finding of findings) {
    const index = exceptions.findIndex((e, i) => e.rule === finding.antipattern && used[i] < e.max && patterns[i].test(finding.snippet ?? ""));
    if (index < 0) unexplained.push(finding);
    else {
      used[index]++;
      explained.push({ ...finding, reason: exceptions[index].reason });
    }
  }
  const unused = exceptions.filter((_, i) => used[i] === 0);
  return { unexplained, explained, unused };
}
