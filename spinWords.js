function spinWords(string) {
  return string
    .split(" ")
    .map((word) => (word.length > 4 ? word.split("").reverse().join("") : word))
    .join(" ");
}

console.log(spinWords("This is another test"));
