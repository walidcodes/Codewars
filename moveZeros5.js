function moveZeros(arr) {
  const zerosArr = [];
  arr = arr
    .filter((v) => {
      if (v === 0) {
        zerosArr.push(0);
      } else return v !== 0;
    })
    .concat(zerosArr);
  return arr;
}
