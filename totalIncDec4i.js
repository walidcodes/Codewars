function totalIncDec(x) {
  const t = 10 ** x;
  let r = 0;
  for (let i = 1; i <= t; i++) {
    if (i < 101) r++;
    else {
      const s = i + "";
      let d = 1;
      while (s[d] && s[d] === s[d - 1]) {
        d++;
      }
      if (s[d] && s[d] > s[d - 1]) {
        d++;
        while (s[d] && s[d] >= s[d - 1]) d++;
      } else if (s[d] && s[d] < s[d - 1]) {
        d++;
        while (s[d] && s[d] <= s[d - 1]) d++;
      }
      if (!s[d]) r++;
    }
  }
  return r;
}

// figure out how to skip numbers, how to make rarer (if there's an equation)
