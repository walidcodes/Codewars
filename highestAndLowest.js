function highAndLow(numbers) {
  let arr = numbers.split(" ").sort((a, b) => Number(a) - Number(b));
  return `${arr[arr.length - 1]} ${arr[0]}`;
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
