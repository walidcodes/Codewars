function ant(grid, column, row, n, dir = 0) {
  return grid;
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
