// var soundex = function (names) {
//   const soundexIndex = [
//     ["b", "f", "p", "v"],
//     ["c", "g", "j", "k", "q", "s", "x", "z"],
//     ["d", "t"],
//     ["l"],
//     ["m", "n"],
//     ["r"],
//   ];
//   return names.split(" ").map((n) =>
//     n.split("").map((l, i) => {
//       if (
//         soundexIndex.map((s, i) => {
//           if (s.includes(l)) return i;
//         }) !== n[i - 1] &&
//         i === n.length - 1
//       )
//         return soundexIndex.map((s, i) => {
//           if (s.includes(l)) return i, "000".slice(0, 4 - n.length);
//         });
//       else if (
//         soundexIndex.map((s, i) => {
//           if (s.includes(l)) return i;
//         }) !== n[i - 1]
//       )
//         return soundexIndex.map((s, i) => {
//           if (s.includes(l)) return i;
//         });
//     })
//   );
// };

var soundex = function (names) {
  const soundexIndex = [
    ["b", "f", "p", "v"],
    ["c", "g", "j", "k", "q", "s", "x", "z"],
    ["d", "t"],
    ["l"],
    ["m", "n"],
    ["r"],
  ];
  const converted = [[], []];
  names.split(" ").map((name, nameIndex) =>
    name.split("").forEach((letter, letterIndex) => {
      if (letterIndex === 0) converted[nameIndex].push(letter);
      else {
        for (let i = 0; i < soundexIndex.length; i++)
          if (
            soundexIndex[i].includes(letter) &&
            converted[nameIndex][converted[nameIndex].length - 1] !== i + 1
          )
            converted[nameIndex].push(i + 1);
        if (
          letterIndex === name.length - 1 &&
          converted[nameIndex].length < 4
        ) {
          console.log("hey");
          converted[nameIndex].push(
            "000".slice(0, 4 - converted[nameIndex].length)
          );
        }
      }
    })
  );
  return converted.map((name) => name.join("").slice(0, 4)).join(" ");
};

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
