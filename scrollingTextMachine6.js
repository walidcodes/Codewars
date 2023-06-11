function rotate(str) {
  return str.split("").map((l, i, a) => {
    if (a[i + 1])
      return a
        .slice(i + 1)
        .concat(a.slice(0, i + 1))
        .join("");
    else return a.join("");
  });
}

// parameter is string
// result is an array of strings with length of parameter
// example rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
// pseudo split, map(l,i,a), if (a[i+1])return (a.slice(i+1).concat a.slice(0,i+1)).join('') else return a.join('')
