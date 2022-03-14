const map = function (arr, cb) {
  const end = [];
  for (let item of arr) {
    end.push(cb(item));
  }
  return end;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results = map(words, (word) => word[0]);
// const results1 = map(words, (word) => word.toUpperCase());
// const results2 = map(words, (word) => word.length);

// assertArraysEqual(results, ["g", "c", "t", "m", "t"]);
// assertArraysEqual(results1, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
// assertArraysEqual(results2, [6, 7, 2, 5, 3]);
