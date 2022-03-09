const assertEqual = function (actual, expected) {
  let failEmoji = String.fromCodePoint(0x1f6d1);
  let passEmoji = String.fromCodePoint(0x2705);
  actual === expected
    ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

const eqObjects = function (object1, object2) {
  // scan both objects to see if they have same number of keys
  // scan to see if keys are same name and have same value,
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  if (objKeys1.length === objKeys2.length) {
    for (let keys of objKeys1) {
      if (object1[keys] !== object2[keys]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true); // false
