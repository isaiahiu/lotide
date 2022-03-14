const findKeyByValue = function (object, value) {
  for (let keys in object) {
    if (obj[keys] === value) {
      return keys;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   "sci fi": "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
//   horror: "Grudge",
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Grudge"), "horror");
