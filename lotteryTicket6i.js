// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

function bingo(ticket, win) {
  let miniWins = 0;
  for (const sub of ticket) {
    for (let i = 0; i < sub[0].length; i++) {
      if (sub[0].charCodeAt(i) === sub[1]) {
        miniWins++;
        break;
      }
    }
  }
  if (miniWins >= win) return "Winner!";
  else return "Loser!";
}
