const assertEqual = function(actual, expected) {
  let failEmoji = String.fromCodePoint(0x1f6d1);
  let passEmoji = String.fromCodePoint(0x2705);
  actual === expected
    ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(obj, valu) {
  for (let keys in obj) {
    if (obj[keys] === valu) {
      return keys;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  "sci fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  horror: "Grudge",
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Grudge"), "horror");
