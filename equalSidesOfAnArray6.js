function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (
      arr.slice(0, i).reduce((t, n) => t + n, 0) ===
      arr.slice(i + 1).reduce((t, n) => t + n, 0)
    )
      return i;
  }
  return -1;
}

// parameter: arr of ints
// result int representing the index of the element in the arr that satisfies the condition: sum of ints to its left are equalt to sum of ints to its right. -1 if no element satisfies condition.
// You are given the array [20,10,-80,10,10,15,35] result : 0
// pseudo
// loop inside arr with condition slice up to pos and from pos+1 and return pos if comparison is equal
//
