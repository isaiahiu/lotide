const assertEqual = function (actual, expected) {
  let failEmoji = String.fromCodePoint(0x1f6d1);
  let passEmoji = String.fromCodePoint(0x2705);
  actual === expected
    ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function (obj, valu) {
  // loop over the keys in obj
  for (let keys in obj) {
    // if value matches the obj key value
    if (obj[keys] === valu) {
      // return obj key
      return keys;
    }
  }
  return undefined;
  // if no match, return undefined
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
