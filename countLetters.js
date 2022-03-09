const assertEqual = function (actual, expected) {
  let failEmoji = String.fromCodePoint(0x1f6d1);
  let passEmoji = String.fromCodePoint(0x2705);
  actual === expected
    ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function (string) {
  let result = [];
  let noSpaces = string.split(" ").join("");
  console.log(noSpaces);
  for (const letter of noSpaces) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

const result1 = countLetters("lhl");
const result2 = countLetters("lighthouse in the house");
// assertEqual(result1['l'], 2)
// assertEqual(result1["h"], 1);
// assertEqual(result1["z"], undefined);

console.log(result1);
console.log(result2);
