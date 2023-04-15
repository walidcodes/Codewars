function rgb(r, g, b) {
  function hexed(val) {
    if (val <= 0) val = 0;
    else if (val > 255) val = 255;
    let hexer = val.toString(16).toUpperCase();
    if (hexer.length === 1) return `0${hexer}`;
    else return hexer;
  }
  return `${hexed(r)}${hexed(g)}${hexed(b)}`;
}
