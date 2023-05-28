function buildMatchesTable(numberOfTeams) {
  // step 1. Make an array of the teams
  const teamsArr = [];
  for (let t = 1; t <= numberOfTeams; t++) teamsArr.push(t);
  console.log(teamsArr);
  // step 2. Make team checklist object
  const teamCheckObj = {};
  for (const team of teamsArr) {
    teamCheckObj[team] = teamsArr.filter((o) => o !== team);
  }
  console.log(teamCheckObj);
  //   step 3. Build matrix array,
  const matrixArr = [];
  //   rounds array,

  while (teamCheckObj[4].length) {
    const roundsArr = [];
    let match = [];
    console.log(`teamCheckObj[4].length is ${teamCheckObj[4].length}`);
    // while (teamsArr.length) {
    const rosterArr = teamsArr;
    if (!teamCheckObj[teamsArr[0]].length) {
      console.log(`clearing ${teamsArr[0]}`);
      teamsArr.shift();
    } else {
      // while (rosterArr.length) {
      console.log(`rosterArr.length is ${rosterArr.length}`);
      match.push(rosterArr.shift());
      console.log(`match first push is ${match}`);
      for (const opponent in teamCheckObj[match[0]]) {
        console.log(`current opponent ${opponent}`);
        if (rosterArr.indexOf(opponent) > -1) {
          console.log(`index of opponent in rosterArr is found`);
          match.push(rosterArr.splice(rosterArr.indexOf(opponent), 1));
          console.log(`rosterArr after splice opponent`);
          teamCheckObj[match[0]].splice(
            teamCheckObj[match[0]].indexOf(match[1]),
            1
          );
          console.log(`teamObj ${match[0]} : ${teamCheckObj[match[0]]}`);
          teamCheckObj[match[1]].splice(
            teamCheckObj[match[1]].indexOf(match[0]),
            1
          );
          console.log(`teamObj ${match[1]} : ${teamCheckObj[match[1]]}`);
          break;
        }
      }
      roundsArr.push(match);
      match = [];
      // }
      matrixArr.push(roundsArr);
    }
    // }
  }
  return matrixArr;
}
