const assertEqual = function(actual, expected) {
  let failEmoji = String.fromCodePoint(0x1f6d1);
  let passEmoji = String.fromCodePoint(0x2705);
  actual === expected
    ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

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

console.log("------------------");
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false
console.log("------------------");
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
console.log("------------------");
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
console.log("------------------");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
