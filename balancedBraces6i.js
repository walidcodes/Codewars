function isBalanced(string) {
  const braces = "{([])}";
  const pendingBraces = [];
  let counters = [0, 0];
  let arr = string.split("").filter((c) => {
    if (braces.indexOf(c) > -1) return c;
  });

  // arr.lastIndexOf(
  //   braces.at(-(braces.indexOf(arr[0]) + 1))
  // );
  while (arr.length) {
    if (braces.slice(0, 3).indexOf(arr[0]) > -1) {
      pendingBraces.push(arr[0]);
      console.log("1" + arr[0]);
      arr.shift();
    } else if (
      braces.at(-(braces.indexOf(pendingBraces.at(-1)) + 1)) === arr[0]
    ) {
      console.log("2" + arr[0]);
      pendingBraces.pop();
      arr.shift();
      counters[0]++;
    } else if (pendingBraces.length) {
      console.log("3" + arr[0]);
      counters[1]++;
      pendingBraces.pop();
    }
  }
}

// ("(){}");

// function isBalanced(string) {
//   let result = [true, 0, 0];
//   const braces = "{([])}";
//   string
//     .split("")
//     .filter((c) => {
//       if (braces.indexOf(c) > -1) return c;
//     })
//     .forEach((b, i, a) => {
//       if (a.at(-(i + 1)) === braces.at(-(braces.indexOf(b) + 1)))
//         result[1] += 0.5;
//       else {
//         result[2]++;
//       }
//     });
//   if (result[2]) result[0] = false;
//   console.log(string);
//   return result;
// }

// parameter is string,
// result is an array containing a boolean, a digit representing balanced braces and another representing leftovers
// example isBalanced("({)}") => [false, 0, 4]
// pseudo:
// result = [true,0,0]
// s.filter(b=> if ("{([])}".indexOf(b)>-1) return b).forEach(b,i,a=> if (b === a.at(-(i+1)) result[1]++) else result[2]++ result[0] = false)
// result[1] /= 2
// return result
// for (let i=0; i<s.length/2;i++)
// if (s[i] )
