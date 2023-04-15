function isSolved(board) {
  let boardArr = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      boardArr.push(board[i][j]);
    }
  }
  const row0 = [];
  const row3 = [];
  const row6 = [];
  const col0 = [];
  const col1 = [];
  const col2 = [];
  const dia0 = [];
  const dia2 = [];
  for (let i = 0; i < 9; i++) {
    if (boardArr[i] > 0) {
      if (i === 0) {
        row0.push(boardArr[i]);
        col0.push(boardArr[i]);
        dia0.push(boardArr[i]);
      } else if (i === 1) {
        row0.push(boardArr[i]);
        col1.push(boardArr[i]);
      } else if (i === 2) {
        row0.push(boardArr[i]);
        col2.push(boardArr[i]);
        dia2.push(boardArr[i]);
        if (row0.length === 3) {
          if (row0.every((e) => e === row0[0])) return row0[0];
        }
      } else if (i === 3) {
        row3.push(boardArr[i]);
        col0.push(boardArr[i]);
      } else if (i === 4) {
        row3.push(boardArr[i]);
        col1.push(boardArr[i]);
        dia0.push(boardArr[i]);
        dia2.push(boardArr[i]);
      } else if (i === 5) {
        row3.push(boardArr[i]);
        col2.push(boardArr[i]);
        if (row3.length === 3) {
          if (row3.every((e) => e === row3[0])) return row3[0];
        }
      } else if (i === 6) {
        row6.push(boardArr[i]);
        col0.push(boardArr[i]);
        dia2.push(boardArr[i]);
        if (col0.length === 3) {
          if (col0.every((e) => e === col0[0])) return col0[0];
        } else if (dia2.length === 3) {
          if (dia2.every((e) => e === dia2[0])) return dia2[0];
        }
      } else if (i === 7) {
        row6.push(boardArr[i]);
        col1.push(boardArr[i]);
        if (col1.length === 3) {
          if (col1.every((e) => e === col1[0])) return col1[0];
        }
      } else if (i === 8) {
        row6.push(boardArr[i]);
        col2.push(boardArr[i]);
        dia0.push(boardArr[i]);
        if (col2.length === 3) {
          if (col2.every((e) => e === col2[0])) return col2[0];
        } else if (dia0.length === 3) {
          if (dia0.every((e) => e === dia0[0])) return dia0[0];
        }
        if (row6.length === 3) {
          if (row6.every((e) => e === row6[0])) return row6[0];
        }
      }
    }
  }
  const zerosCount = boardArr.filter((c) => c === 0).length;
  if (zerosCount === 0) return 0;
  else return -1;
}

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
