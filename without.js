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

const assertArraysEqual = function(firstArr, secArr) {
  let failEmoji = String.fromCodePoint(0x1f6d1);
  let passEmoji = String.fromCodePoint(0x2705);
  console.log(
    eqArrays(firstArr, secArr)
      ? `${passEmoji} Assertion Passed`
      : `${failEmoji} Assertion Failed`
  );
};

const without = function(sourceArr, itemsToRemove) {
  let resultArr = [];
  for (let element of sourceArr) {
    let match = false;
    for (let removeElement of itemsToRemove) {
      if (element === removeElement) {
        match = true;
      }
    }
    if (!match) {
      resultArr.push(element);
    }
  }
  return resultArr;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
