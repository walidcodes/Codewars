function digitalRoot(n) {
  if (n.toString().length > 1) {
    return digitalRoot(
      n
        .toString()
        .split("")
        .reduce((total, digit) => total + Number(digit), 0)
    );
  } else {
    return n;
  }
}

// ---------------------------

console.log(digitalRoot(132189));
