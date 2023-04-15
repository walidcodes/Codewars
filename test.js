function ObjectMaker() {
  let getSetObj = { hey: 1, yo: "hi" };
  Object.defineProperty(this, "getSetObj", {
    get: function () {
      return getSetObj;
    },
    set: function (value) {
      if (!value.hey || !value.yo) {
        throw new Error("WTF man?");
      }
      getSetObj = value;
    },
  });
}
