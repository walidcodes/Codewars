// function removeNb(n) {
//   const checkArr = [];
//   for (let i = 1; i <= n; i++) {
//     checkArr.push(i);
//   }
//   const returnedArr = [];
//   for (let i = 0; i < checkArr.length; i++) {
//     const ival = checkArr.splice(i, 1)[0];
//     for (let j = 0; j < checkArr.length; j++) {
//       const jval = checkArr.splice(j, 1)[0];
//       if (ival * jval === checkArr.reduce((a, b) => a + b))
//         returnedArr.push([ival, jval]);
//       checkArr.splice(j, 0, jval);
//     }
//     checkArr.splice(i, 0, ival);
//   }
//   return returnedArr;
// }

function removeNb(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  const returnedArr = [];
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= 1; j--) {
      if (i * j === total - i - j) {
        returnedArr.push([i, j]);
        break;
      }
    }
    if (returnedArr.length) break;
  }
  if (returnedArr.length) {
    const min = returnedArr[0][0];
    const max = returnedArr[0][1];
    returnedArr.pop();
    for (let i = min; i <= max; i++) {
      for (let j = max; j >= min; j--) {
        if (i * j === total - i - j) {
          returnedArr.push([i, j]);
        }
      }
    }
  }

  return returnedArr;
}
