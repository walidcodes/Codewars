function pascal(depth) {
  const grandArr = [[1], [1, 1]];
  if (depth === 1) grandArr.pop();
  else if (depth > 2) {
    for (let i = 2; i <= depth; i++) {
      let rowArr = [1, 1];
      for (let j = 1; j < i - 1; j++) {
        rowArr.splice(
          j,
          0,
          grandArr[grandArr.length - 1][j - 1] +
            grandArr[grandArr.length - 1][j]
        );
      }
      if (rowArr.length > 2) grandArr.push(rowArr);
    }
  }
  return grandArr;
}

console.log(pascal(5));

// -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]

// [[1], [1, 1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]][
//   ([1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1])
// ];
