function humanReadable(seconds) {
  let minutes = 0;
  let hours = 0;
  while (seconds > 59) {
    seconds -= 60;
    minutes++;
  }
  while (minutes > 59) {
    minutes -= 60;
    hours++;
  }
  return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}:${(
    "0" + seconds
  ).slice(-2)}`;
}
