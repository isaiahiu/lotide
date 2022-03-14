const eqArray = require("./eqArray");

const assertArraysEqual = function (firstArr, secArr) {
  let failEmoji = String.fromCodePoint(0x1f6d1);
  let passEmoji = String.fromCodePoint(0x2705);
  console.log(
    eqArray(firstArr, secArr)
      ? `${passEmoji} Assertion Passed`
      : `${failEmoji} Assertion Failed`
  );
};

// assertArraysEqual([1, 2, "3"], [1, 2, 3]);
module.exports = assertArraysEqual;
