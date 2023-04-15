let multiplicationTable = function (size) {
  const fullArr = [];
  let row = [];
  let r = 1;
  for (let i = 1; i <= size ** 2; i += r) {
    row.push(i);
    if (row.length === size) {
      fullArr.push(row);
      row = [];
      r++;
      console.log(r);
      i = 0;
      console.log(i);
    }
  }
  return fullArr;
};

console.log(multiplicationTable(4));
