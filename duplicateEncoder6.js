function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((l) => {
      if (word.toLowerCase().indexOf(l) !== word.toLowerCase().lastIndexOf(l))
        return ")";
      else return "(";
    })
    .join("");
}

console.log(duplicateEncode("Success"));
//   =>  ")())())"
// )())())
