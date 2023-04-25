function highestBiPrimeFac(p1, p2, n) {
  //   find highest p1 factor
  let p1Max = 1;
  while (p1 ** p1Max * p2 < n) {
    p1Max++;
  }
  const favP1arr = [];
  for (let i = 1; i <= p1Max; i++) {
    for (let j = 1; j <= i; j++) {
      if (p1 ** i * p2 ** j < n)
        favP1arr.push({ i: i, j: j, r: p1 ** i * p2 ** j });
      else break;
    }
  }
  let p2Max = 1;
  while (p1 * p2 ** p2Max < n) {
    p2Max++;
  }
  const favP2arr = [];
  for (let i = 1; i <= p2Max; i++) {
    for (let j = 1; j <= i; j++) {
      if (p1 ** j * p2 ** i < n)
        favP2arr.push({ i: i, j: j, r: p1 ** j * p2 ** i });
      else break;
    }
  }
  const favP1 = favP1arr.sort((a, b) => b.r - a.r)[0];
  const favP2 = favP2arr.sort((a, b) => b.r - a.r)[0];
  if (favP1.r > favP2.r) return [favP1.r, favP1.i, favP1.j];
  else return [favP2.r, favP2.j, favP2.i];
}
