function computeDepth(x) {
  let allDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let m = 1; m <= 10; m++) {
    String(x * m)
      .split("")
      .map((d) => {
        if (allDigits.indexOf(d) > -1) allDigits.splice(d, 1);
      });
    if (allDigits.length === 0) return m;
  }
  return 0;
}
