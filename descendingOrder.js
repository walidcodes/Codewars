function descendingOrder(n) {
  return +Array.from(n + "")
    .sort()
    .reverse()
    .join("");
}

// +Array.from(n+"").sort().reverse().join("");

console.log(descendingOrder(5849329));
