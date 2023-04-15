function canEscape(walls) {
  for (let i = 0; i < walls.length; i++) {
    if (i + 2 > walls[i].sort((a, b) => a - b)[0]) {
      return false;
    }
  }
  return true;
}
