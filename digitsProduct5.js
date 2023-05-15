// Simple Fun #81: Digits Product

function digitsProduct(product) {
  if (product === 1) return 11;
  if (product === 0) return 10;
  let obj = {};
  for (let d = 9; d > 1; d--) {
    if (Number.isInteger(product / d)) {
      obj[product] = d;
      product = product / d;
      d = 10;
      console.log(obj);
    }
  }
  if (Object.keys(obj).find((p) => p.length === 1)) {
    if (Object.keys(obj).length > 1)
      return Number(Object.values(obj).sort().join(""));
    else if (Object.keys(obj).length === 1)
      return Number("1" + Object.values(obj)[0]);
  } else return -1;
}
