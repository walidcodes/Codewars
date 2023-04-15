function findOutlier(integers) {
  let evens = 0;
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      evens++;
    }
  }
  for (const n of integers) {
    if (evens > 1) {
      if (n % 2 !== 0) {
        return n;
      }
    } else {
      if (n % 2 === 0) {
        return n;
      }
    }
  }
}
