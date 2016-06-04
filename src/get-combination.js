function getCombination(str, n) {
  if (!n) return [[]];
  if (!str.length) return [];
  const [head, ...tail] = str;
  return getCombination(tail, n - 1)
    .map(t => (
      [head].concat(t).join('')
    ))
    .concat(getCombination(tail, n));
}

export default getCombination;
