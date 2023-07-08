function makeLooper(str) {
  let i = -1;
  function loop() {
    i++;
    if (i > str.length - 1) i = 0;
    return str[i];
  }
  return loop;
}
