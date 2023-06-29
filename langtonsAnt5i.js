function ant(grid, column, row, n, dir = 0) {
  console.log(grid, column, row, n, (dir = 0));
  const pos = { x: column, y: row };
  for (let i = 0; i < n; i++) {
    dir = redir(grid[pos.y][pos.x], dir);
    if (grid[pos.y][pos.x]) {
      grid[pos.y][pos.x] = 0;
    } else {
      grid[pos.y][pos.x] = 1;
    }
    if (!dir) {
      if (grid[pos.y - 1] === undefined) grid.unshift(grid[pos.y].fill(0));
      else pos.y--;
    } else if (dir === 1) {
      if (grid[pos.y][pos.x + 1] === undefined)
        grid.map((e) => {
          e.push(0);
          return e;
        });
      pos.x++;
    } else if (dir === 2) {
      if (grid[pos.y + 1] === undefined) grid.push(grid[pos.y].fill(0));
      pos.y++;
    } else {
      if (grid[pos.y][pos.x - 1] === undefined)
        grid.map((e) => {
          e.unshift(0);
          return e;
        });
      else pos.x--;
    }
  }
  return grid;
}

function redir(cellVal, dir) {
  if (cellVal) {
    dir++;
    if (dir > 3) dir = 0;
  } else {
    dir--;
    if (dir < 0) dir = 3;
  }
  return dir;
}
// parameters are a two dimensional grid represented as an array, the column position, row, n representing the total number of steps to be taken, and the direction the cursor is facing
// result is the state of the grid after n steps according to the rules
// example : ([[1]], 0, 0, 3, 0), [[0,1],[0,1]])
//  pseudocode:

// define current position object and assign using row and column params
// make a dir(rotate) where rotate is the cell value 1 or 0. if 1 dir++ where if dir > 3 dir = 0 and if dir 0 dir-- where if dir < 0 dir = 3
// for loop with n steps with block code:
// dir(grid[pos.y][pos.x])
// if grid[pos.x][pos.y] === 0 make it 1 and vice versa
// if dir === 0 {check if grid[pos.y--] exists if yes pos.y --. if undefined grid.unshift an array the length of the current inner array (all zeros) and then pos.y--}
// if dir === 1 {check if grid[pos.y][pos.x++] exists if yes pos.x ++. if undefined, push a 0 to all inner arrays with a for loop and then pos.x ++}
// if dir === 2 {check if grid[pos.y++] exists if yes pos.y ++. if undefined grid.push an array the length of the current inner array (all zeros) and then pos.y++}
// if dir === 3 {check if grid[pos.y][pos.x--] exists if yes pos.x --. if undefined, unshift a 0 to all inner arrays with a for loop and then pos.x --}
// return grid
