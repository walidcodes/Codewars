function XO(str) {
  return (
    str.toLowerCase().split("x").join("").length ===
    str.toLowerCase().split("o").join("").length
  );
}
