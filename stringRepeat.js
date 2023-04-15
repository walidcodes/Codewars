function repeatStr(n, s) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(s);
  }
  return arr.join("");
}

console.log(repeatStr(4, "yo"));
