// function pigIt(str) {
//   strArr = str.split(" ").map((w) => w.split(""));
//   for (let word of strArr) {
//     const latinSyl = word.shift() + "ay";
//     const alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
//     let i = 1;
//     while (!alphabet.includes(word[word.length - i])) i++;
//     word.splice(word.length - i + 1, 0, latinSyl);
//   }
//   return strArr.map((w) => w.join("")).join(" ");
// }

// function pigIt(str) {
//   const alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
//   strArr = str.split(" ");
//   str = [];
//   for (let word of strArr) {
//     let i = 1;
//     while (!alphabet.includes(word.at(-i))) i++;
//     str.push(
//       word.slice(1, word.length - i + 1) +
//         word[0] +
//         "ay" +
//         word.slice(word.length - i + 1)
//     );
//   }
//   return str.join(" ");
// }

// function pigIt(str) {
//   strArr = str.split(" ");
//   str = [];
//   for (let word of strArr) {
//     let i = 1;
//     let lastChar = word.at(-i);
//     while (
//       lastChar < 65 ||
//       lastChar > 122 ||
//       (lastChar > 90 && lastChar < 97)
//     ) {
//       i++;
//       lastChar = word.at(-i);
//     }
//     str.push(
//       word.slice(1, word.length - i) +
//         word[0] +
//         "ay" +
//         word.slice(word.length - i)
//     );
//   }
//   return str.join(" ");
// }

function pigIt(str) {
  const alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  return str
    .split(" ")
    .map((w) => {
      const punctuation = {};
      let unpunctuated = [];
      for (let c = 0; c < w.length; c++) {
        if (alphabet.includes(w[c])) unpunctuated.push(w[c]);
        else punctuation[c] = w[c];
      }
      unpunctuated.push(unpunctuated[0] + "ay");
      unpunctuated.shift();
      for (let p = 0; p < Object.keys(punctuation).length; p++)
        unpunctuated.splice(
          Number(Object.keys(punctuation)[p]),
          0,
          punctuation[Object.keys(punctuation)[p]]
        );
      return unpunctuated.join("");
    })
    .join(" ");
}

// prep
// parameter is a string including letters and punctuations
// return string with every first letter of each word placed at the end of the word and has "ay" added to it. punctuation and spaces move not
// example: "hello world" -> "ellohay orldway"
// pseudo:
// split(' '). unshift first letter of every word into a variable
// and add "ay",
// splice at last index of word if it is an ascii.
// join(' ')
