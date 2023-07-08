function connectFour(board) {
  // Your code goes here
}

// prep
// array containing 6 arrays of 7 elements that have 3 potential values
// return one of four options: y, r, progress, draw
// skip example
// pseudo code
// check if board is full by flattening and looking for dash
// scanner in 4.
// if current in main iterator value is a color, check if any of the adjacent 4 (r, rb, b, lb) is a color while setting direction. if true, launch secondary iterator: go on to next in same direction. do not check for r and rb if INNER index is >3. do not check for rb, b and lb if index is > 2. do not check for lb if INNER index is < 2.
// if true return color.
// if false, continue iterations
// if current in main iterator is a dash, continue
// if current is highest possible indexES ([5][3]): check if board full to determine whether in progress or draw
