const assertEqual = function (actual, expected) {
  let failEmoji = String.fromCodePoint(0x1f6d1);
  let passEmoji = String.fromCodePoint(0x2705);
  actual === expected
    ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // false
