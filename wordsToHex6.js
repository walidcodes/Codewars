// Words to Hex
// Both solutions below work

// function wordsToHex(words) {
//   return words.split(" ").map((w) => {
//     let hexed = "#";
//     for (let i = 0; i < 3; i++) {
//       hexed += w.charCodeAt(i) ? w.charCodeAt(i).toString(16) : "00";
//     }
//     return hexed;
//   });
// }

function wordsToHex(words) {
  return words.split(" ").map((w) =>
    `#${w
      .slice(0, 3)
      .split("")
      .map((l) => l.charCodeAt().toString(16))
      .join("")}000000`.slice(0, 7)
  );
}

// parameter string
// result array of strings that are hexadecimals representations of the first 3 letters of each word
// "Hello, my name is Gary and I like cheese." ->  ['#48656c', '#6d7900', '#6e616d','#697300','#476172','#616e64','#490000','#6c696b','#636865']
// pseudocode
// split words by space.
// map every word and return '#' + word[0].charCode + word[0].charCode+ word[0].charCode
