function nthFibo(n) {
  let arr = [0];
  if (n > 1) arr.push(1);
  for (let i = 3; i <= n; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    console.log(arr);
  }
  return arr[arr.length - 1];
}
