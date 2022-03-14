const countLetters = function (string) {
  let result = [];
  let noSpaces = string.split(" ").join("");
  for (const letter of noSpaces) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.export = countLetters;
