const flatten = function (array) {
  let result = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        result.push(element[i]);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;
