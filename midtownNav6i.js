function midtownNav(start, end) {
  const x = Number(start[0]) - Number(end[0]);
  const y = Number(start.slice(-7, -5)) - Number(end.slice(-7, -5));
  if (y > 0) yDirections = `${y} blocks south`;
  else if (y < 0) yDirections = `${-y} blocks north`;
  else yDirections = `0 blocks north`;
  let xDirections = "";
  if (x > 0) xDirections = `${x} blocks east`;
  else if (x < 0) xDirections = `${-x} blocks west`;
  else xDirections = `0 blocks west`;
  console.log(x, y);
  const output = `Walk ${yDirections}, and ${xDirections}`;
  return output;
}

// start = "8th Ave and W 38th St";
// end = "7th Ave and W 36th St";
// (output) => "Walk 2 blocks south, and 1 blocks east";

// start = "5th Ave and W 46th St";
// end = "7th Ave and E 58th St";
// (output) => "Walk 12 blocks north, and 2 blocks west";
