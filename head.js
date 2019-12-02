const assertEqual = require('./test/assertEqualTest');

// FUNCTION IMPLEMENTATION
//const assertEqual = function(...) { ... }


const head = function (array) {
  let first = array[0];
  return first;
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");