function resolver(guess, solution) {
  let guessArr = guess.split("");
  let solutionArr = solution.split("");
  let colorCode = ["b", "b", "b", "b", "b"];
  // check for greens
  for (let l = 0; l < 5; l++) {
    if (guessArr[l] === solutionArr[l]) {
      colorCode[l] = "g";
      guessArr[l] = "+";
      solutionArr[l] = "-";
    }
  }
  // check for yellows
  for (let l = 0; l < 5; l++) {
    if (solutionArr.indexOf(guessArr[l]) > -1) {
      colorCode[l] = "y";
      solutionArr[solutionArr.indexOf(guess[l])] = "-";
    }
  }

  return colorCode.join("");
}
