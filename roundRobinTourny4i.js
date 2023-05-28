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
    // CHECK THIS IF CONDITION AND THE COMMENtED OUT SECTION TO GO THROUGH ALL CASES.
    // OTHERWISE WE HAVE GENERATED A ROUND SUCCESSFULLY
    if (!teamCheckObj[teamsArr[0]].length) {
      console.log(`clearing ${teamsArr[0]}`);
      teamsArr.shift();
    } else {
      while (rosterArr.length) {
        console.log(`rosterArr.length is ${rosterArr.length}`);
        match.push(rosterArr.shift());
        console.log(`match first push is ${match}`);
        console.log(teamCheckObj[match[0]]);
        let opponent;
        for (let i = 0; i < teamCheckObj[match[0]].length; i++) {
          console.log(`${roundsArr}, ${roundsArr.flat(1)}`);
          if (roundsArr.flat().indexOf(teamCheckObj[match[0]][i]) === -1) {
            opponent = teamCheckObj[match[0]][i];
            break;
          }
        }
        console.log(`current opponent ${opponent}`);
        if (rosterArr.indexOf(opponent) > -1) {
          console.log(`index of opponent in rosterArr is found`);
          match.push(rosterArr.splice(rosterArr.indexOf(opponent), 1)[0]);
          console.log(`match after second push ${match}`);
          console.log(`rosterArr after splice opponent ${rosterArr}`);
          console.log(`teamCheckObj[match[0]]: ${teamCheckObj[match[0]]}
          match: ${match}
          ${typeof match[1]}
          teamCheckObj[match[0]].indexOf(match[1]) : ${teamCheckObj[
            match[0]
          ].indexOf(match[1])}
          `);
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
        }
        roundsArr.push(match);
        console.log(roundsArr, "this is rounds");
        match = [];
        console.log(`${rosterArr.length} rosterArr after match push`);
      }
      matrixArr.push(roundsArr);
    }
    // }
  }
  return matrixArr;
}
