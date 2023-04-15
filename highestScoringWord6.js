// function high(x) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   return x[
//     x.indexOf(
//       Math.max(
//         ...x.split(" ").map((w) =>
//           w
//             .split("")
//             .map((l) => alphabet.indexOf(l) + 1)
//             .reduce((ws, ls) => ws + ls, 0)
//         )
//       )
//     )
//   ];
// }

function high(x) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const arrOfScores = x.split(" ").map((w) =>
    w
      .split("")
      .map((l) => alphabet.indexOf(l) + 1)
      .reduce((ws, ls) => ws + ls, 0)
  );
  return x.split(" ")[arrOfScores.indexOf(Math.max(...arrOfScores))];
}

console.log(high("greet taxi hilt frame classic"));
