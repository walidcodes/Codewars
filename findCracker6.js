function findHack(arr) {
  let score;
  const gradeSys = {
    A: 30,
    B: 20,
    C: 10,
    D: 5,
  };
  const hackers = [];
  let bonus = true;
  for (let c = 0; c < arr.length; c++) {
    if (arr[c][1] > 200) {
      hackers.push(arr[c][0]);
    } else {
      score = 0;
      bonus = true;
      for (let r = 0; r < arr[c][2].length; r++) {
        if (gradeSys[arr[c][2][r]]) score += gradeSys[arr[c][2][r]];
        if (bonus === true && arr[c][2][r] !== "A" && arr[c][2][r] !== "B") {
          bonus = false;
        }
      }
      if (bonus === true && arr[c][2].length < 5) bonus = false;
      if (bonus === true) score += 20;
      if (score > 200) score = 200;
      if (score !== arr[c][1]) hackers.push(arr[c][0]);
    }
  }
  return hackers;
}
