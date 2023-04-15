function findOdd(A) {
  const obj = {};
  for (let i = 0; i < A.length; i++) {
    if (!(A[i] in obj)) {
      obj[A[i]] = 1;
    } else {
      obj[A[i]]++;
    }
  }
  const objValArray = Object.values(obj);
  console.log(obj);
  console.log(objValArray);
  for (let i = 0; i < objValArray.length; i++) {
    if (!(objValArray[i] % 2 === 0)) {
      return Number(Object.keys(obj)[i]);
    }
  }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
