// function zeroPlentiful(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     console.log(i + "hey");
//     if (arr[i] === 0) {
//       arr.splice(i);
//       if (arr.indexOf(!0) < 5) return 0;
//       else {
//         count++;
//         arr.splice(0, arr.indexOf(!0));
//         i = 0;
//       }
//     }
//   }
//   return count;

function zeroPlentiful(arr) {
  let zeroStreak = 0;
  let zeroPlentiful = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroStreak++;
    }
    if (arr[i] !== 0) {
      zeroStreak = 0;
    }
    if (zeroStreak === 4) {
      zeroPlentiful++;
    }
    if (zeroStreak > 0 && zeroStreak < 4 && arr[i + 1] !== 0) return 0;
  }
  return zeroPlentiful;
}

console.log(
  zeroPlentiful([92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, -46, 0, 0, 0])
);
