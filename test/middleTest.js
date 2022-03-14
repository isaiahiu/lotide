const middle = require("../middle");
const assert = require("chai").assert;

describe("returns the middle element into an array, from a parent array, if parent array is even returns the middle two elements", () => {
  it("should return an empty array when passed an array with length of 1", () => {
    let array = [1];
    assert.deepEqual(middle(array), []);
  });
  it("should return [2] when passed an array w length of > 1", () => {
    let array = [1, 2, 3];
    assert.deepEqual(middle(array), [2]);
  });
  it("should return [2,3] when passed an array w length thats even", () => {
    let array = [1, 2, 3, 4];
    assert.deepEqual(middle(array), [2, 3]);
  });
});
