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

// ACTUAL FUNCTION

const remove = function (source, itemToRemove){
  let newArray = [];
  //write a logic to remove the elements from the given array
  for (i = 0; i < source.length; i++){
    let isUnique = true;
    for (j = 0; j < itemToRemove.length; j++){
      if (source[i] === itemToRemove[j]){
      isUnique = false;
      }
      if (isUnique) {
        newArray.push(source[i]);
      }
    }
  }
  console.log(newArray);
    return newArray;
  }

assertArrayEqual(remove([1, 2, 3], [1]),[2, 3]); 