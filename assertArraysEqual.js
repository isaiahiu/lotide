const eqArrays = require("./eqArrays");

const assertArraysEqual = function (firstArr, secArr) {
  let failEmoji = String.fromCodePoint(0x1f6d1);
  let passEmoji = String.fromCodePoint(0x2705);
  console.log(
    eqArrays(firstArr, secArr)
      ? `${passEmoji} Assertion Passed`
      : `${failEmoji} Assertion Failed`
  );
};

module.exports = assertArraysEqual;
