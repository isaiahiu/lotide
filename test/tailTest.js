const tail = require("../tail.js");
const assert = require("chai").assert;

describe("#tail", () => {
  it("should return true when passing in [`Lighthouse`, `Labs`]", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), [`Lighthouse`, `Labs`]);
  });
});
