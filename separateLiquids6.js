function separateLiquids(glass) {
  const settledLiquid = [];
  if (glass[0]) {
    const layerLength = glass[0].length;
    let spilled = [].concat.apply([], glass);

    spilled = spilled
      .map((u) => {
        return { O: 1, A: 2, W: 3, H: 4 }[u];
      })
      .sort()
      .map((u) => {
        return { 1: "O", 2: "A", 3: "W", 4: "H" }[u];
      });

    while (spilled.length > 0)
      settledLiquid.push(spilled.splice(0, layerLength));
  }
  return settledLiquid;
}
