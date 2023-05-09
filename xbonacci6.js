// ANY OF THE SOLUTIONS BELOW WORK. THEY NEEDED A CONDITIONAL WHEREBY N IS SMALLER THAN SIGNATURE LENGTH.

// function Xbonacci(signature, n) {
//   let x = signature.length;
//   if (x >= n) return signature.slice(0, n);
//   let nxt = 0;
//   while (signature.length !== n) {
//     for (let n = signature.length - 1; n > signature.length - 1 - x; n--)
//       nxt += signature[n];
//     signature.push(nxt);
//     nxt = 0;
//   }
//   return signature;
// }

// function Xbonacci(signature, n) {
//   const x = signature.length;
//   if (x >= n) return signature.slice(0, n);
//   while (signature.length !== n) {
//     signature.push(
//       signature.slice(signature.length - x).reduce((acc, e) => acc + e, 0)
//     );
//   }
//   return signature;
// }

function Xbonacci(signature, n) {
  let x = signature.length;
  if (x >= n) return signature.slice(0, n);
  let nxt = 0;
  signature.reverse();
  while (signature.length !== n) {
    for (let e = 0; e < x; e++) nxt += signature[e];
    signature.unshift(nxt);
    nxt = 0;
  }
  return signature.reverse();
}

// function Xbonacci(signature, n) {
//   const x = signature.length;
//   if (x >= n) return signature.slice(0, n);

//   signature.reverse();
//   for (let t = 0; t < n - x; t++) {
//     signature.unshift(signature.slice(0, x).reduce((acc, e) => acc + e, 0));
//   }
//   return signature.reverse();
// }

// takes two parameters. signature is an array that contains the first X values of the sequence where X is the number of elements that are summed to give the next value. n is the total number of values that should be returned
// result should be an array cointaining n values
// example: Xbonacci([0,1], 4) => [0,1,1,2]
// pseudocode: create a loop that adds the consequent X amount of elements and pushes the sum to the array until the length of the array is n;
