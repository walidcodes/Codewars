snail = function (array) {
  if (!array[0].length) return [];

  const unraveled = [];
  let totalUnits = array.length ** 2;
  const cardinals = {
    minXi: -1,
    minYi: 0,
    maxXi: array.length - 1,
    maxYi: array.length - 1,
  };

  while (totalUnits) {
    cardinals.minXi++;
    for (let e = cardinals.minXi; e <= cardinals.maxXi; e++) {
      unraveled.push(array[cardinals.minYi][e]);
      totalUnits--;
      if (totalUnits === 0) return unraveled;
    }
    cardinals.minYi++;
    for (let s = cardinals.minYi; s <= cardinals.maxYi; s++) {
      unraveled.push(array[s][cardinals.maxXi]);
      totalUnits--;
      if (totalUnits === 0) return unraveled;
    }
    cardinals.maxXi--;
    for (let w = cardinals.maxXi; w >= cardinals.minXi; w--) {
      unraveled.push(array[cardinals.maxYi][w]);
      totalUnits--;
      if (totalUnits === 0) return unraveled;
    }
    cardinals.maxYi--;
    for (let n = cardinals.maxYi; n >= cardinals.minYi; n--) {
      unraveled.push(array[n][cardinals.minXi]);
      totalUnits--;
      if (totalUnits === 0) return unraveled;
    }
  }
};
