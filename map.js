const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
const map = function(arr, cb) {
  const end = [];
  for (let item of arr) {
    end.push(cb(item));
  }
  return end;
};

const assertArraysEqual = function(firstArr, secArr) {
  let failEmoji = String.fromCodePoint(0x1f6d1);
  let passEmoji = String.fromCodePoint(0x2705);
  console.log(
    eqArrays(firstArr, secArr)
      ? `${passEmoji} Assertion Passed`
      : `${failEmoji} Assertion Failed`
  );
};

const results = map(words, (word) => word[0]);
const results1 = map(words, (word) => word.toUpperCase());
const results2 = map(words, (word) => word.length);

console.log(results);

assertArraysEqual(results, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results1, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
