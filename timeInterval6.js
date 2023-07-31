function TimeInterval(start, end) {
  this.start = start;
  this.end = end;
}

TimeInterval.prototype.intersection = function (interval) {
  if (
    Math.max(this.start, this.end) < Math.min(interval.start, interval.end) ||
    Math.min(this.start, this.end) > Math.max(interval.start, interval.end)
  )
    return null;
  else {
    const TimesArr = [this.start, this.end, interval.start, interval.end].sort(
      (a, b) => a - b
    );
    return new TimeInterval(TimesArr[1], TimesArr[2]);
  }
};

TimeInterval.prototype.union = function (interval) {
  if (
    Math.max(this.start, this.end) < Math.min(interval.start, interval.end) ||
    Math.min(this.start, this.end) > Math.max(interval.start, interval.end)
  )
    return null;
  else {
    const TimesArr = [this.start, this.end, interval.start, interval.end].sort(
      (a, b) => a - b
    );
    return new TimeInterval(TimesArr[0], TimesArr[3]);
  }
};
