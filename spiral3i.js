function spiralize(n) {
  let direction = "e";
  let rowArr = [];
  let arr = [];
  let madaMada = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rowArr.push("0");
    }
    arr.push(rowArr);
    rowArr = [];
  }
  function tillWhen() {
    if ((direction = "e")) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (
            (arr[i][j + 2] !== "1" && arr[i - 1] === undefined) ||
            (arr[i - 1][j] === "0" && arr[i + 1] === undefined) ||
            arr[i + 1][j] === "0"
          ) {
            arr[i].splice(j, 1, "1");
            mada = true;
          } else {
            if (!mada) return arr;
            direction = "s";
            break;
          }
        }
      }
    }
    if ((direction = "s")) {
    }
  }
}
