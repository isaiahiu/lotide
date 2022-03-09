const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  if (objKeys1.length === objKeys2.length) {
    for (let keys of objKeys1) {
      if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
        if (!eqArrays(object1[keys], object2[keys])) {
          return false;
        }
      } else {
        if (object1[keys] !== object2[keys]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
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

const assertObjectsEqual = function(actual, expected) {
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
