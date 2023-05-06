function lru(n, referencesList) {
  const arr = [];
  const orderedArr = [];
  for (let i = 0; i < referencesList.length; i++) {
    if (arr.length < n) {
      if (arr.indexOf(referencesList[i]) === -1) {
        arr.push(referencesList[i]);
        orderedArr.push(referencesList[i]);
      } else {
        orderedArr.splice(orderedArr.indexOf(referencesList[i]), 1);
        orderedArr.push(referencesList[i]);
      }
    } else if (
      arr.indexOf(referencesList[i]) !== -1 &&
      orderedArr.lastIndexOf(referencesList[i]) !== i
    ) {
      orderedArr.splice(orderedArr.indexOf(referencesList[i]), 1);
      orderedArr.push(referencesList[i]);
    } else if (arr.indexOf(referencesList[i]) === -1) {
      arr.splice(arr.indexOf(orderedArr[0]), 1, referencesList[i]);
      orderedArr.shift();
      orderedArr.push(referencesList[i]);
    }
  }
  for (let f = 0; f < n - orderedArr.length; f++) arr.push(-1);
  return arr;
}
