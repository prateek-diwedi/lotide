// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arrOne, arrTwo) {
  //...
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (i = 0; i < arrOne.length; i++){
      if ( arrOne[i] !== arrTwo[i])
     return false;
  } return true;
    }
}

const assertArrayEqual = function(firstArr,secondArr) {
  if (!eqArrays(firstArr,secondArr)) {
    console.log(`🛑🛑🛑 Assertion Failed  ${firstArr} !== ${secondArr}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  //...
  if (array.length > 2 && array.length % 2 !== 0){
      var result = [];
      var middle = array[Math.floor(array.length / 2)];
      result.push(middle)
      console.log(result);
      return result;
  } else if (array.length > 2 && array.length % 2 === 0) {
      var result = [];
      var middle2 = array[Math.floor(array.length / 2)];
      var middle = array[Math.floor((array.length - 1) / 2)]
      result.push(middle);
      result.push(middle2);
      // console.log(middle2 , middle);
      // return middle2, middle;
      console.log(result);
      return result;
  } else {
      var middle = [];
      console.log(middle);
      return middle;
  }
}

// TEST CODE
assertArrayEqual(middle([1, 2, 3]),[2]);
//assertArraysEqual(assertEqual(middle([1],[]))) // => []
// middle([1, 2]) // => []
assertArrayEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArrayEqual(middle([1, 2, 3, 4]),[2, 3]);

// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
// ...