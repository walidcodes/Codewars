function mazeRunner(maze, directions) {
  const location = { x: 0, y: 0 };
  for (let c = 0; c < maze.length; c++) {
    for (let r = 0; r < maze.length; r++) {
      if (maze[c][r] === 2) {
        location.x = r;
        location.y = c;
      }
    }
  }
  for (let s = 0; s <= directions.length; s++) {
    if (directions[s] === "N") {
      location.y -= 1;
    } else if (directions[s] === "S") {
      location.y += 1;
    } else if (directions[s] === "E") {
      location.x += 1;
    } else if (directions[s] === "W") {
      location.x -= 1;
    } else if (!directions[s]) return "Lost";
    if (
      location.x < 0 ||
      location.y < 0 ||
      location.x === maze.length ||
      location.y === maze.length ||
      maze[location.y][location.x] === 1
    )
      return "Dead";
    else if (maze[location.y][location.x] === 3) return "Finish";
  }
}

// step 1: find the entrance.
// step 2: navigate with conditionals. Find 0/2: next. Find 1 or undefined: return death. Moves out: return loss. Find 3: return success
