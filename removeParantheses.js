function removeParentheses(s) {
  let arr = s.split("");
  let opener = 0;
  let openindex = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      opener++;
      openindex.push(i);
    } else if (arr[i] === ")" && opener === 1) {
      arr.splice(openindex[0], i - openindex[0] + 1);
      console.log(i);
      i = openindex[0] - 1;
      opener = 0;
      openindex = [];
    } else if (arr[i] === ")" && opener > 1) {
      opener--;
    }
  }
  return arr.join("");
}

// console.log(removeParentheses("n(DU qwEHYbCi)ciQ "));
// console.log(removeParentheses("Iam(like)abird"));
// console.log(removeParentheses("I am (l)i(k)e (a )bird"));
// console.log(removeParentheses("I am (l(i(k)e) a) bird"));

console.log(removeParentheses("(first group) (second group) (third group)"));
