// FUNCTION IMPLEMENTATION
const words = ["Yo Yo", "Lighthouse", "Labs"];
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function (array){
  let final = array.slice(1);
  return final

}

assertEqual(words.length, 3); // original array should still have 3 elements!