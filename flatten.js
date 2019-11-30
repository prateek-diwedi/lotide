// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arrOne, arrTwo) {
  //...
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (i = 0; i < arrOne.length; i++){
      if ( arrOne[i] !== arrTwo[i])
     return false;
  } 
  return true;
    }
}

const assertArrayEqual = function(firstArr,secondArr) {
  if (!eqArrays(firstArr,secondArr)) {
    console.log(`🛑🛑🛑 Assertion Failed  ${firstArr} !== ${secondArr}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  }
};


// Actual Function.
const flatten = function (array){
  let flattenedArray = array.flat(Infinity);
  console.log(flattenedArray)
 return flattenedArray;
}
;
assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]) // => [1, 2, 3, 4, 5, 6]