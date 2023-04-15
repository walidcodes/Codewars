const numberToEnglish = (n) => {
  let inEnglish = [];
  if (!(n >= 0 && n < 100000) || n % 1 !== 0) return "";
  else if (n === 0) return "zero";
  else {
    let strN = "" + n;
    const singleDigits = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
    };
    const doubleDigits = {
      1: "ten",
      2: "twenty",
      3: "thirty",
      4: "forty",
      5: "fifty",
      6: "sixty",
      7: "seventy",
      8: "eighty",
      9: "ninety",
    };
    const teens = {
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
    };
    if (
      strN.length > 0 &&
      strN.slice(-2, -1) !== "1" &&
      strN.slice(-1) !== "0"
    ) {
      inEnglish.push(singleDigits[strN.slice(-1)]);
    }
    if (strN.length > 1 && strN.slice(-2, -1) !== "0") {
      inEnglish.unshift(doubleDigits[strN.slice(-2, -1)]);
      if (strN.slice(-2, -1) === "1" && strN.slice(-1) !== "0") {
        inEnglish.pop();
        inEnglish.push(teens[strN.slice(-2)]);
      }
    }
    if (strN.length > 2 && strN.slice(-3, -2) !== "0") {
      inEnglish.unshift("hundred");
      inEnglish.unshift(singleDigits[strN.slice(-3, -2)]);
    }
    if (strN.length > 3) {
      inEnglish.unshift("thousand");
      if (strN.slice(-5, -4) !== "1" && strN.slice(-4, -3) !== "0") {
        inEnglish.unshift(singleDigits[strN.slice(-4, -3)]);
      }
    }
    if (strN.length === 5) {
      if (strN.slice(-5, -4) === "1" && strN.slice(-5, -4) !== "0") {
        inEnglish.unshift(teens[strN.slice(-5, -3)]);
      } else {
        inEnglish.unshift(doubleDigits[strN.slice(-5, -4)]);
      }
    }
  }
  return inEnglish.join(" ");
};
