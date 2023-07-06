function getScore(dice) {
  const valCountArr = [[], [], [], [], [], []];
  dice.forEach((e) => {
    valCountArr[e - 1].push(e);
  });

  valCountArr.sort((a, b) => b.length - a.length);

  let result = [];
  while (valCountArr.length) {
    if (valCountArr[0].length > 2) {
      if (valCountArr[0][0] === 1) result.push(1000);
      else result.push(Number(valCountArr[0][0] + "00"));
      result[result.length - 1] *= valCountArr[0].length - 2;
      valCountArr.shift();
    } else if (valCountArr[0].length === 2 && valCountArr[2].length === 2) {
      result.push(750);
      valCountArr.splice(0);
    } else if (valCountArr[5] && valCountArr[5].length) {
      result.push(1000);
      valCountArr.splice(0);
    } else if (valCountArr[0].length < 3) {
      if (valCountArr[0][0] === 1) result.push(100 * valCountArr[0].length);
      else if (valCountArr[0][0] === 5) result.push(50 * valCountArr[0].length);
      valCountArr.shift();
    }
  }
  result = result.reduce((acc, s) => acc + s, 0);
  return result || "Zonk";
}
