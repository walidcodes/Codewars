function buildMatchesTable(numberOfTeams) {
  // step 1. Make an array of the teams
  const teamsArr = [];
  for (let t = 1; t <= numberOfTeams; t++) teamsArr.push(t);
  // step 2. Make team checklist object
  const teamCheckObj = {};
  for (const team of teamsArr) {
    teamCheckObj[team] = teamsArr.filter((o) => o !== team);
  }
  //   step 3. Build matrix array,
  const matrixArr = [];
  const rosterArr = [];
  //   rounds array,
  while (
    teamCheckObj[
      Object.keys(teamCheckObj)[Object.keys(teamCheckObj).length - 1]
    ].length
  ) {
    const roundsArr = [];
    let match = [];
    for (const team of teamsArr) rosterArr.push(team);
    if (!teamCheckObj[teamsArr[0]].length) {
      teamsArr.shift();
    } else {
      while (rosterArr.length) {
        match.push(rosterArr.shift());
        let opponent;
        for (let i = 0; i < teamCheckObj[match[0]].length; i++) {
          if (roundsArr.flat().indexOf(teamCheckObj[match[0]][i]) === -1) {
            opponent = teamCheckObj[match[0]][i];
            break;
          }
        }
        if (rosterArr.indexOf(opponent) > -1) {
          match.push(rosterArr.splice(rosterArr.indexOf(opponent), 1)[0]);
          teamCheckObj[match[0]].splice(
            teamCheckObj[match[0]].indexOf(match[1]),
            1
          );
          teamCheckObj[match[1]].splice(
            teamCheckObj[match[1]].indexOf(match[0]),
            1
          );
        }
        roundsArr.push(match);
        match = [];
      }
      matrixArr.push(roundsArr);
    }
  }
  return matrixArr;
}
