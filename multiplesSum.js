function solution(number) {
  //   checking if the user defined "number" is negative first to prevent unnecessary processing
  if (number < 0) {
    return 0;
  }
  //   creating an array that hosts the multiples of 3 and/or 5
  let multiplesOf3And5 = [];
  //   iterating through natural numbers below the user defined "number"
  for (let i = 0; i < number; i++) {
    //     addinng numbers that are multiples of both 3 and 5 to the array
    if (i % 3 === 0 && i % 5 === 0) {
      multiplesOf3And5.push(i);
      //     addinng numbers that are multiples of either 3 or 5 to the array
    } else if (i % 3 === 0 || i % 5 === 0) {
      multiplesOf3And5.push(i);
    } else {
      continue;
    }
  }
  //   calculating the sum of all collected numbers
  let multiplesSum = 0;
  multiplesOf3And5.forEach((e) => (multiplesSum += e));
  //   returning the sum
  return multiplesSum;
}
