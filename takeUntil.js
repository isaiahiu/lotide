const takeUntil = function (array, callback) {
  let arr = [];
  for (let element of array) {
    // 2. if cb fn returns false, push element into arr.
    if (!callback(element)) {
      arr.push(element);
    } else {
      // 3. if cb fn returns true, exit code and return arr.
      return arr;
    }
  }
  return arr;
};

module.exports = takeUntil;

// function will return a slice of the arr from the beginning
// until the callback fn returns a truthy value
// 1. fn needs to loop over the array, calling the cb fn

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);
// console.log(results1);

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, (x) => x === ",");
// console.log(results2);

// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

// // Expected Output
// // [ 1, 2, 5, 7, 2 ]
// // --
// // [ 'I\'ve', 'been', 'to', 'Hollywood' ]
