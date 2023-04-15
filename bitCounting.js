var countBits = function (n) {
  return Array.from(n.toString(2)).reduce((acc, bd) => acc + +bd, 0);
};

console.log(countBits(1234));
