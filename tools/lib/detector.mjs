// Splits Impeccable detector findings into those a style's detectorExceptions explain and those it does not.
// An exception covers one rule and only findings whose snippet matches its pattern, so a new value of the same rule still fails.

export function applyExceptions(findings, exceptions = []) {
  const used = exceptions.map(() => 0);
  const unexplained = [];
  const explained = [];
  for (const finding of findings) {
    const index = exceptions.findIndex((e) => e.rule === finding.antipattern && new RegExp(e.match).test(finding.snippet ?? ""));
    if (index < 0) unexplained.push(finding);
    else {
      used[index]++;
      explained.push({ ...finding, reason: exceptions[index].reason });
    }
  }
  const unused = exceptions.filter((_, i) => used[i] === 0);
  return { unexplained, explained, unused };
}
