function duplicateCount(text) {
  const lowerCaseText = text.toLowerCase();
  const characterInstanceArr = [];
  const counterCharArr = [];
  let duplicateCount = 0;
  for (const char of lowerCaseText) {
    if (!characterInstanceArr.includes(char)) {
      characterInstanceArr.push(char);
    } else if (!counterCharArr.includes(char)) {
      counterCharArr.push(char);
      duplicateCount++;
    }
  }
  return duplicateCount;
}

console.log(duplicateCount("Indivisibilities"));
