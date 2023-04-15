function pathFinder(maze) {
  let mazeArr = maze.split("\n");
  mazeArr = mazeArr.map((str) => Array.from(str));
  let posX = 0;
  let posY = 0;
  let crumbs = [[0, 0]];

  while (posX !== mazeArr.length - 1 || posY !== mazeArr.length - 1) {
    nextStep();
    if (nextStep() === false) return false;
  }
  return true;

  function nextStep() {
    if (mazeArr[posY][posX + 1] === ".") {
      if (mazeArr[posY][posX] === ".") {
        mazeArr[posY].splice(posX, 1, "V");
      }
      posX++;
      crumbs.push([posY, posX]);
    } else if (mazeArr[posY + 1] && mazeArr[posY + 1][posX] === ".") {
      if (mazeArr[posY][posX] === ".") {
        mazeArr[posY].splice(posX, 1, "V");
      }
      posY++;
      crumbs.push([posY, posX]);
    } else if (mazeArr[posY][posX - 1] === ".") {
      if (mazeArr[posY][posX] === ".") {
        mazeArr[posY].splice(posX, 1, "V");
      }
      posX--;
      crumbs.push([posY, posX]);
    } else if (mazeArr[posY - 1] && mazeArr[posY - 1][posX] === ".") {
      if (mazeArr[posY][posX] === ".") {
        mazeArr[posY].splice(posX, 1, "V");
      }
      posY--;
      crumbs.push([posY, posX]);
    } else {
      if (posY === 0 && posX === 0) return false;
      else {
        mazeArr[posY].splice(posX, 1, "V");
        crumbs.pop();
        posX = crumbs[crumbs.length - 1][1];
        posY = crumbs[crumbs.length - 1][0];
      }
    }
  }
}
