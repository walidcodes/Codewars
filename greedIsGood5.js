function score(dice) {
  let result = 0;
  let iCount = 0;
  let threeOf;
  for (let i = 1; i <= 6; i++) {
    if (dice.filter((d) => d === i).length >= 3) {
      result = Number(i + "00");
      if (i === 1) result += 900;
      iCount += 3;
      threeOf = i;
    }
  }
  dice.forEach((r) => {
    if (r === threeOf && iCount > 0) iCount--;
    else if (r === 1) result += 100;
    else if (r === 5) result += 50;
  });
  return result;
}

//     Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
