function positiveSum(arr) {
  return arr.filter((n) => n > 0).reduce((a, n) => a + n, 0);
}

console.log(positiveSum([-2, 3, 5]));
