// for k position 1 to n, the next k has (n-1)**2 and the next has (n-2)**2 etc.
// for k position n+1 to n*2, the next k has (n-1)**2-n and next has (n-2)**2-(n*2)
// for second k position

//another method
// fill a board
// pop a position for each rook -1 and check the length: k+ boardArr.length-k +

// nested for loops according to k: pop them in array called base:
// (n-0)*2-1, (n-1)*2-1, (n-2)*2-1 ... (n-k)*2-1
// multiply inner most nested loop with remaining square:
// (n-k)**2
// example: given k = 1 (only 1 nested loop)
// for (let i= 1; i < (n-0)*2-1; i++){
//   for (let j = 1; j < n-k){
//    count += (n-k)**2
//  }
// }
// (if number outside of range which is k>n);

// function rooks(n, k) {
//   let count = 0;
//   function nested(m, l) {
//     if (l > 1) {
//       for (let i = 1; i < m; i++) {
//         nested(m - 1, l - 1);
//       }
//     } else if (l === 1) {
//       count += m ** 2;
//     }
//   }
//   nested(n, k);
//   return count;
// }
