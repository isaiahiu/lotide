const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  let failEmoji = String.fromCodePoint(0x1f6d1);
  let passEmoji = String.fromCodePoint(0x2705);
  eqObjects(actual, expected)
    ? console.log(
        `${passEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(
          expected
        )}`
      )
    : console.log(
        `${failEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(
          expected
        )}`
      );
};

// const a = { a: 1, b: [2] };
// const b = { a: 1, b: [2] };
// assertObjectsEqual(a, b);
module.exports = assertObjectsEqual;
