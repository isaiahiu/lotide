const middle = function (array) {
  let mid = [];
  let lastIndex = array.length - 1;
  if (lastIndex > 1) {
    lastIndex % 2 !== 0
      ? mid.push(
          array[Math.floor(lastIndex / 2)],
          array[Math.ceil(lastIndex / 2)]
        )
      : mid.push(array[lastIndex / 2]);
  }
  return mid;
};

module.exports = middle;
