function connectFour(board) {
  let boardFull = false;
  if (board.flat().indexOf("-") === -1) boardFull = true;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (board[i][j] !== "-") {
        board[i][j] = {
          c: board[i][j],
          e: true,
          se: true,
          s: true,
          sw: true,
        };
        if (i > 2) {
          board[i][j].s = false;
          board[i][j].sw = false;
          board[i][j].se = false;
        }
        if (j < 3) board[i][j].sw = false;
        if (j > 3) {
          board[i][j].e = false;
          board[i][j].se = false;
        }
      } else board[i][j] = 0;
    }
  }
  // checking
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (i === 5 && j === 4) return boardFull ? "draw" : "in progress";
      if (board[i][j]) {
        let directionIndex = 1;
        while (Object.keys(board[i][j])[directionIndex]) {
          let x = 0;
          let y = 0;
          if (Object.keys(board[i][j])[directionIndex].indexOf("e") > -1) x++;
          else if (Object.keys(board[i][j])[directionIndex].indexOf("w") > -1) {
            x--;
          }
          if (Object.keys(board[i][j])[directionIndex].indexOf("s") > -1) y++;

          if (
            board[i][j][Object.keys(board[i][j])[directionIndex]] &&
            board[i + y][j + x].c === board[i][j].c
          ) {
            while (
              board[i + y][j + x].c ===
              board[y ? i + y + 1 : i][x ? j + x + x / Math.sqrt(x ** 2) : j].c
            ) {
              if (x === 2 || y === 2) return board[i][j].c;
              board[i + y][j + x][
                Object.keys(board[i][j])[directionIndex]
              ] = false;
              if (x) x += x / Math.sqrt(x ** 2);
              if (y) y += y / y;
            }
          }
          directionIndex++;
        }
      }
    }
  }
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

// [
//   ["Y", "R", "Y", "R", "Y", "R", "Y"],
//   ["R", "Y", "R", "R", "Y", "R", "Y"],
//   ["Y", "Y", "R", "R", "R", "Y", "R"],
//   ["R", "R", "Y", "Y", "Y", "R", "Y"],
//   ["Y", "Y", "Y", "R", "Y", "R", "Y"],
//   ["R", "Y", "R", "R", "R", "Y", "R"],
// ];
