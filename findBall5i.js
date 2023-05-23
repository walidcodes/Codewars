// Find heavy ball - level: ubermaster

//  getWeight(left, right)

function findBall(scales, ball_count) {
  let generated = [];
  for (let b = 0; b < ball_count; b++) generated.push(b);
  let groups = splitBalls(generated);
  let weighAttemptsLeft = getExponent(ball_count);
  let unweighedGroup;
  while (weighAttemptsLeft > 0) {
    console.log(groups);
    if (groups.length === 1 && unweighedGroup) {
      let close = scales.getWeight(groups, unweighedGroup[0]);
      if (close === 0) {
        groups = unweighedGroup;
        unweighedGroup = null;
      } else if (close > 0) {
        groups = unweighedGroup;
        unweighedGroup = null;
      } else if (close < 0) return groups[0];
    } else if (groups.length === 1 && !unweighedGroup) return groups[0];
    const balance = scales.getWeight(groups[0], groups[1]);
    if (groups.length === 3) {
      if (balance === 1) {
        if (groups[1].length === 1) return groups[1][0];
        else {
          groups = splitBalls(groups[1]);
          weighAttemptsLeft--;
        }
      } else if (balance === 0) {
        groups = splitBalls(groups[2]);
        weighAttemptsLeft--;
      } else if (balance === -1) {
        if (groups[0].length === 1) return groups[0][0];
        else {
          groups = splitBalls(groups[0]);
          weighAttemptsLeft--;
        }
      }
    } else if (groups.length === 2) {
      if (balance === 1) {
        if (groups[1].length === 1) return groups[1];
        else {
          groups = splitBalls(groups[1]);
          weighAttemptsLeft--;
        }
      } else if (balance === -1) {
        if (groups[0].length === 1) return groups[0];
        else {
          groups = splitBalls(groups[0]);
          weighAttemptsLeft--;
        }
      } else {
        groups = unweighedGroup;
        unweighedGroup = null;
      }
    } else {
      unweighedGroup = groups[2];
      if (balance === 1) {
        if (groups[1].length === 1) return groups[1][0];
        else {
          groups = splitBalls(groups[1]);
          weighAttemptsLeft--;
        }
      } else if (balance === 0) {
        groups = splitBalls(groups[3]);
        weighAttemptsLeft--;
      } else if (balance === -1) {
        if (groups[0].length === 1) return groups[0][0];
        else {
          groups = splitBalls(groups[0]);
          weighAttemptsLeft--;
        }
      }
    }
  }
}

function getExponent(groupLength) {
  let scaleUsesRange = {
    1: [0, 3],
    2: [4, 9],
    3: [10, 27],
    4: [28, 81],
    5: [82, 243],
    6: [244, 500],
  };
  let exponent;
  for (const num in scaleUsesRange) {
    if (
      groupLength >= scaleUsesRange[num][0] &&
      groupLength <= scaleUsesRange[num][1]
    ) {
      exponent = Number(num);
      break;
    }
  }
  return exponent;
}

function splitBalls(group) {
  const exponent = getExponent(group.length);
  console.log(`exponent: ${exponent}`);
  const fixedGroup = group.slice(0, 3 ** (exponent - 1));
  console.log(`fixedGroup, length: ${fixedGroup}, ${fixedGroup.length}`);
  const subDivision = group.slice(0, 3 ** (exponent - 2));
  const variableGroupLength = group.length - fixedGroup.length;
  console.log(`variableGroupLength: ${variableGroupLength}`);
  if (group.length === 1) return group;
  else if (variableGroupLength > fixedGroup.length)
    return [
      fixedGroup,
      group.slice(3 ** (exponent - 1), 3 ** (exponent - 1) * 2),
      group.slice(3 ** (exponent - 1) * 2),
    ];
  else if (variableGroupLength === fixedGroup.length) {
    console.log("y");
    return [fixedGroup, group.slice(3 ** (exponent - 1))];
  } else {
    return [
      subDivision,
      group.slice(3 ** (exponent - 2), 3 ** (exponent - 2) * 2),
      group.slice(3 ** (exponent - 2) * 2),
    ];
  }
}

// FAILED TEST CASES THUS FAR:
// ================================================
// Guessing out of 16 balls in 3 or fewer moves:
// Log
// exponent: 3
// fixedGroup, length: 0,1,2,3,4,5,6,7,8, 9
// variableGroupLength: 7
// [ [ 0, 1, 2 ],
//   [ 3, 4, 5 ],
//   [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ] ]
// exponent: 3
// fixedGroup, length: 6,7,8,9,10,11,12,13,14, 9
// variableGroupLength: 1
// [ [ 6, 7, 8 ], [ 9, 10, 11 ], [ 12, 13, 14, 15 ] ]
// exponent: 2
// fixedGroup, length: 12,13,14, 3
// variableGroupLength: 1
// [ [ 12 ], [ 13 ], [ 14, 15 ] ]
// exponent: 1
// fixedGroup, length: 14, 1
// variableGroupLength: 1
// y
// Expected: 15, instead got: undefined
// Completed in 1ms
// ------------------------------------------------

// ------------------------------------------------
