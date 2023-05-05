function rotatePaper(number) {
  // check for quick fails first for efficiency
  const failingNums = ["1", "3", "4", "7"];
  for (const fN of failingNums)
    if (number.indexOf(fN) > -1) {
      return false;
    }
  // check center symmetry
  const centersideSymNums = ["0", "2", "5", "8"];
  if (
    number.length % 2 !== 0 &&
    centersideSymNums.indexOf(number[Math.floor(number.length / 2)]) === -1
  ) {
    return false;
  }
  //   check sides of 'number'
  for (let i = 0; i < Math.ceil(number.length / 2); i++) {
    if (
      ["6", "9"].indexOf(number.at(i)) > -1 &&
      ["6", "9"][["9", "6"].indexOf(number.at(i))] !== number.at(-(i + 1))
    ) {
      return false;
    } else if (
      centersideSymNums.indexOf(number.at(i)) > -1 &&
      number.at(i) !== number.at(-(i + 1))
    ) {
      return false;
    }
  }
  //  if all fail conditions fail then it must
  return true;
}
