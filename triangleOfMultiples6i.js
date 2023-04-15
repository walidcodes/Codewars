function multTriangle(n) {
  let total_sum;
  let total_even_sum;
  let total_odd_sum;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push([i]);
    while (arr[arr.length - 1][arr[arr.length - 1].length - 1] !== i ** 2) {
      arr[arr.length - 1].push(
        arr[arr.length - 1][arr[arr.length - 1].length - 1] + i
      );
    }
    while (arr[arr.length - 1][arr[arr.length - 1].length - 1] !== i) {
      arr[arr.length - 1].push(
        arr[arr.length - 1][arr[arr.length - 1].length - 1] - i
      );
    }
  }

  total_sum = arr.flat().reduce((total, all) => total + all, 0);
  total_even_sum = arr
    .flat()
    .filter((d) => d % 2 === 0)
    .reduce((total, all) => total + all, 0);
  total_odd_sum = total_sum - total_even_sum;

  return [total_sum, total_even_sum, total_odd_sum];
}
