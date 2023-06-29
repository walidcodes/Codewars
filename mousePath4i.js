// Area of House from Path of Mouse
// Finding it difficult to calculate area. Have an idea for perimeter only

function mousePath(s) {
  // grouping distances and directions to check for invalidities;
  const distanceArr = [];
  let distanceUnit = "";
  const directionArr = [];
  for (const c of s) {
    if (!isNaN(Number(c))) distanceUnit += c;
    else {
      distanceArr.push(Number(distanceUnit));
      directionArr.push(c);
      distanceUnit = "";
    }
  }
  distanceArr.push(Number(distanceUnit));
  const totalDistance = distanceArr.reduce((acc, u) => acc + u, 0);
  if (totalDistance > 2 ** 32) return null;
  if (directionArr.length > 500) return null;
  console.log(totalDistance, " ", distanceArr, " ", directionArr);
}

// param: string of alternating number and letters.
// result: positive integer
// example : parameter -> '4L10L20L30L30L50L40L60L60L85L77L10L67R72R45R47R33R30R17R15R5R5'
//           result    -> 2950
// pseudo code:

// start by separating numbers distances and directions in separate arrays
// create cardinal object
// condition for completion distance traveled on default vector should be equalled if returning to spawn perpendicularly (an averaged 3 turns or 3 right turns) ,
// if surpassed by at least 1 unit when returning to spawn in the opposite direction (an averaged 4 left turns or 4 right turns), the path is invalid
// set condition for > 500 turns being invalid
// consition for distance > 2**32 being invalid
// there must be a variable counting total distance traveled
// there must be 4 variables counting each cardinal distance traveled to check if closing the loop not on spawn thus invalid
