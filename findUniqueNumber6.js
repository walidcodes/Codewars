function findUniq(arr) {
  if (arr[0] === arr[1]) {
    const val = arr[0];
    const setting = Array.from(new Set(arr));
    if (val === setting[0]) return setting[1];
    else return setting[0];
  } else if (arr[0] === arr[2]) return arr[1];
  else return arr[0];
}
