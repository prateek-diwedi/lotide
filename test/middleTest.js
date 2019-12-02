const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1,2,3],[1,2,3]), true);
assertEqual(eqArrays([1,2,3],[1,9,9,2,1,3]), false);
assertEqual(eqArrays([1,2,3],[1,5,3]), true);