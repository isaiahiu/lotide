const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  delete results[" "];
  return results;
};

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(firstArr, secArr) {
  let failEmoji = String.fromCodePoint(0x1f6d1);
  let passEmoji = String.fromCodePoint(0x2705);
  console.log(
    eqArrays(firstArr, secArr)
      ? `${passEmoji} Assertion Passed`
      : `${failEmoji} Assertion Failed`
  );
};
