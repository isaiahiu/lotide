const eqArray = require("../eqArray");
const assertEqual = require("../assertEqual");

assertEqual(eqArray([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArray(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArray(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true); // => should PASS
