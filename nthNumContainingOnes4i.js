// function nthNumContainingOnes(n) {
//   let nthNum = 0;
//   while (n.length > 1) {
//     if (String(n).at(0) > 1) {
//       nthNum += Number(
//         1 +
//           n
//             .map((d) => d === "0")
//             .pop()
//             .join("")
//       );
//     } else {
//       nthNum += Number(String(n.slice(1)));
//     }
//     n = Number(String(n.slice(1)));
//   }
//   if (Number(String(n).at(-1)) > 0) nthNum++;
//   return nthNum;
// }

// function nthNumContainingOnes(n) {}

// pseudocode [WRONG]

// 1 every 10 counts
// 10 every 100 counts
// 100 every 1000 counts
// etc. example:

// 3861

// repeat for each digit in iteration: while iteration.length > 1
// // check string iteration at(0)
// if > 1
// count adds Number(1+ ("" + (iteration.length-1 worth of zeros))
// else
// count adds Number(string iteration .slice(1)) + 1)

// iteration = Number(string iteration.slice(1))
// }
// + 1

// 00000000000000000000000000000000000

// let arr = []
// num = 1;
// while (arr.length !== n) {
//  if (String(num).)
// }
