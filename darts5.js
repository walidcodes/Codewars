function getDartboardScore(x, y) {
  let nx = x;
  let ny = y;
  if (x < 0) nx = -x;
  if (y < 0) ny = -y;
  let result = "";
  const hypotenuse = Math.sqrt(nx ** 2 + ny ** 2);
  if (hypotenuse * 2 <= 12.7) return "DB";
  else if (hypotenuse * 2 <= 31.8) return "SB";
  else if (hypotenuse * 2 > 340) return "X";
  else if (hypotenuse * 2 >= 198 && hypotenuse * 2 <= 214) result += "T";
  else if (hypotenuse * 2 >= 324 && hypotenuse * 2 <= 340) result += "D";
  // calculate angle here;
  const angle = (Math.asin(Math.min(nx, ny) / hypotenuse) / Math.PI) * 180;
  if (y > 0 && ny < nx) {
    if (angle < 9) {
      if (x > 0) result += 6;
      else result += 11;
    } else if (angle < 27) {
      if (x > 0) result += 13;
      else result += 14;
    } else if (angle < 45) {
      if (x > 0) result += 4;
      else result += 9;
    }
  } else if (y > 0 && nx < ny) {
    if (angle < 9) {
      result += 20;
    } else if (angle < 27) {
      if (x > 0) result += 1;
      else result += 5;
    } else if (angle < 45) {
      if (x > 0) result += 18;
      else result += 12;
    }
  } else if (y < 0 && ny < nx) {
    if (angle < 9) {
      if (x > 0) result += 6;
      else result += 11;
    } else if (angle < 27) {
      if (x > 0) result += 10;
      else result += 8;
    } else if (angle < 45) {
      if (x > 0) result += 15;
      else result += 16;
    }
  } else if (y < 0 && nx < ny) {
    if (angle < 9) {
      result += 3;
    } else if (angle < 27) {
      if (x > 0) result += 17;
      else result += 19;
    } else if (angle < 45) {
      if (x > 0) result += 2;
      else result += 7;
    }
  }
  return result;
}
