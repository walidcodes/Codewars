function alphabetPosition(text) {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  text = text
    .toLowerCase()
    .split("")
    .map((l) => alphabetString.indexOf(l) + 1)
    .filter((n) => n > 0)
    .join(" ");
  return text;
}
