function countIslands(image) {
  let count = 0;
  for (let r = 1; r < image.length; r++) {
    for (let c = 1; c < image[0].length; c++) {
      if (image[r][c] === 1) {
        count++;
        image[r][c] = "c";
        let x = c;
        let y = r;
        while (image[y][x + 1] === 1) {
          x++;
          image[y][x] = "c";
        }
      }
    }
  }
  return count;
}

// [
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,1,1,0,0,0,0,0,0],
//   [0,0,1,1,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,1,0],
//   [0,0,0,0,0,1,1,1,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
// ]
