function toJadenCase(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(toJadenCase("greetings earthlings we are now"));
