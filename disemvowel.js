function disemvowel(str) {
  const vowels = "aiueo";
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (vowels.includes(strArr[i])) {
      strArr.splice(i, 1);
      i--;
    }
  }
  str = strArr.join("");
  return str;
}

console.log(disemvowel("what is up y"));
