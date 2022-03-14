# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @isaiahiu/lotide`

**Require it:**

`const _ = require('@isaiahiu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: returns the first element in an array

- `tail(array)`: returns the "tail" of an array: everything except for the first item (head) of the provided array.

- `middle(array)`: takes in an array and returns the middle-most element(s) of the given array.

- `flatten(array)`: take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

- `countOnly(allItems, itemsToCount)`: takes in an array and an object. Returns an object containing counts of everything that the input object listed.

- `letterPositions(string)`: returns all the indices (zero-based positions) in the string where each character is found.

- `findKeyByValue(object, value)`: takes in an object and a value. Returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.

- `eqObjects(object1, object2 )`: takes in two objects and returns true or false, based on a perfect match.

- `eqArrays(array1, array2)`: takes in two arrays and returns true or false, based on a perfect match.

- `countLetters(string)`: takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.

- `findKey(obj, cb)`: return the first key for which the callback returns a truthy value. If no key found returns undefined.

- `map(arr, cb)`: return a new array based on the results of the callback function.

- `takeUntil(array, callback)`: returns a "slice of the array with elements taken from the beginning until callback returns truthy.

- `without(sourceArr, itemsToRemove)`: returns a subset of a given array, removing unwanted elements
