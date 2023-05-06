function firstNonRepeatingLetter(s) {
  const checkedChar = [];
  for (let c = 0; c < s.length; c++) {
    if (c === s.length - 1 && checkedChar.indexOf(s[c].toUpperCase()) === -1)
      return s[c];
    if (checkedChar.indexOf(s[c].toUpperCase()) > -1) continue;
    for (let a = c + 1; a < s.length; a++) {
      if (s[c].toUpperCase() === s[a].toUpperCase()) {
        checkedChar.push(s[c].toUpperCase());
        break;
      } else if (a === s.length - 1) return s[c];
    }
  }
  return "";
}

// PREP
// P: string mixing capital and non capital letters.
// R: the first non repeating character in its casing as it first appeared or "" if all characters repeat.
// E: 'contemporary' returns 'c' because it does not repeat
// P: using nested for loops and the indexof method on consequent uppercase letters, check if it comes up again, if not return the letter. if loops run in full return empty string.
