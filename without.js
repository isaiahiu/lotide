const without = function (sourceArr, itemsToRemove) {
  let resultArr = [];
  for (let element of sourceArr) {
    let match = false;
    for (let removeElement of itemsToRemove) {
      if (element === removeElement) {
        match = true;
      }
    }
    if (!match) {
      resultArr.push(element);
    }
  }
  return resultArr;
};

module.export = without;

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
