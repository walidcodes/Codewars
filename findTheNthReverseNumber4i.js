function findReverseNumber(n) {
  let i = 0n;
  let c = 0;
  while (c != n) {
    const s = i + "";
    const hl = Math.floor(s.length / 2);

    if (hl) {
      for (let j = 0; j <= hl; j++) {
        if (s.at(j) !== s.at(-j)) break;
        else if (j === hl && s.at(j) === s.at(-j)) c++;
      }
    } else c++;
    i++;
  }
  return i--;
}
