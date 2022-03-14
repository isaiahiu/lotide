const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  if (objKeys1.length === objKeys2.length) {
    for (let keys of objKeys1) {
      if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
        if (!eqArrays(object1[keys], object2[keys])) {
          return false;
        }
      } else {
        if (object1[keys] !== object2[keys]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
