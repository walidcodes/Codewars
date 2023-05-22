// Find heavy ball - level: ubermaster

//  getWeight(left, right)

function findBall(scales, ball_count) {
  let generated = [];
  for (let b = 0; b < ball_count; b++) generated.push(b);
  let groups = splitBalls(generated);
  console.log(groups);
  let weighAttemptsLeft = getExponent(ball_count);
  let unweighedGroup;
  while (weighAttemptsLeft > 0) {
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
        if (groups[1].length === 1) return groups[1][0];
        else {
          groups = splitBalls(groups[1]);
          weighAttemptsLeft--;
        }
      } else if (balance === -1) {
        if (groups[0].length === 1) return groups[0][0];
        else {
          groups = splitBalls(groups[0]);
          weighAttemptsLeft--;
        }
      } else return (groups = unweighedGroup);
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

function getExponent(group) {
  let scaleUsesRange = {
    2: [0, 9],
    3: [10, 27],
    4: [28, 81],
    5: [82, 243],
    6: [244, 500],
  };
  let exponent;
  for (const num in scaleUsesRange) {
    if (group >= scaleUsesRange[num][0] && group <= scaleUsesRange[num][1]) {
      exponent = Number(num);
      break;
    }
  }
  return exponent;
}

function splitBalls(group) {
  const exponent = getExponent(group.length);
  const fixedGroup = group.slice(0, 3 ** (exponent - 1));
  const subDivision = group.slice(0, 3 ** (exponent - 2));
  const variableGroup = group.length - fixedGroup.length;
  if (variableGroup.length > fixedGroup.length)
    return [
      fixedGroup,
      group.slice(3 ** (exponent - 1), 3 ** (exponent - 1) * 2),
      group.slice(3 ** (exponent - 1) * 2),
    ];
  else if (variableGroup.length === fixedGroup.length)
    return [fixedGroup, group.slice(3 ** (exponent - 1))];
  else {
    return [
      subDivision,
      group.slice(3 ** (exponent - 2), 3 ** (exponent - 2) * 2),
      group.slice(3 ** (exponent - 2) * 2, 3 ** (exponent - 2) * 3),
      group.slice(3 ** (exponent - 2) * 3),
    ];
  }
}
