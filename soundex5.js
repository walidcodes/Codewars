var soundex = function (names) {
  const soundexIndex = [
    ["b", "f", "p", "v"],
    ["c", "g", "j", "k", "q", "s", "x", "z"],
    ["d", "t"],
    ["l"],
    ["m", "n"],
    ["r"],
  ];
  soundexIndex.flat();
  const converted = [];
  names = names.split(" ");

  for (let ni = 0; ni < names.length; ni++) {
    let lastPushed;
    converted.push([names[ni][0].toUpperCase()]);
    soundexIndex.forEach((arr, ind) => {
      if (arr.includes(names[ni][0].toLowerCase())) lastPushed = ind + 1;
    });
    for (let li = 1; converted[ni].length < 4; li++) {
      if (!soundexIndex.flat().includes(names[ni][li])) {
        if (names[ni][li] !== "h" && names[ni][li] !== "w")
          lastPushed = names[ni][li];
      } else
        for (let si = 0; si < 6; si++) {
          if (soundexIndex[si].includes(names[ni][li])) {
            if (si + 1 !== lastPushed) {
              converted[ni].push(si + 1);
              lastPushed = si + 1;
              break;
            }
          }
        }
      while (li === names[ni].length - 1 && converted[ni].length < 4)
        converted[ni].push("0");
    }
  }
  console.log(names);
  return converted.map((n) => n.join("")).join(" ");
};

// var soundex = function (names) {
//   const soundexIndex = [
//     ["b", "f", "p", "v"],
//     ["c", "g", "j", "k", "q", "s", "x", "z"],
//     ["d", "t"],
//     ["l"],
//     ["m", "n"],
//     ["r"],
//   ];
//   const converted = [[], []];
//   names.split(" ").map((name, nameIndex) =>
//     name.split("").forEach((letter, letterIndex) => {
//       if (letterIndex === 0) converted[nameIndex].push(letter);
//       else {
//         for (let i = 0; i < soundexIndex.length; i++)
//           if (
//             soundexIndex[i].includes(letter) &&
//             converted[nameIndex][converted[nameIndex].length - 1] !== i + 1
//           )
//             converted[nameIndex].push(i + 1);
//         if (
//           letterIndex === name.length - 1 &&
//           converted[nameIndex].length < 4
//         ) {
//           console.log("hey");
//           converted[nameIndex].push(
//             "000".slice(0, 4 - converted[nameIndex].length)
//           );
//         }
//       }
//     })
//   );
//   return converted.map((name) => name.join("").slice(0, 4)).join(" ");
// };

// LAST ATTEMPT I REALISED THAT VOWELS SHOULD BE DELETED AT THE MENTIONED STEP NOT EXCLUDED. OTHERWISE SIMILAR CODEX NUMBERS THAT ARE SEPARATED BY VOWELS WILL GET DELETED WHICH SHOULD NOT HAPPEN.

// parameter is a string containing a first name and a last name
// output is an american soundex string of that name. each name should look like a consonant followed by at least 3 digits
// example: Sarah Connor --> Sarah Connor
// pseudocode:
// split string into two names
// loop the following code for each name:
// for the letter of a sliced name (excluding first letter):
// if consonant replace by equivalent number only if previous letter is not that number
// (otherwise nothing)
// if vowel nothing
// if a name is shorter than 4 characters by the end of conversion, fill with zeros up to 4 characters.
