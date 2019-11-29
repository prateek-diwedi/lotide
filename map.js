const map = function(array, callback) {
  const results = [];
  for (let item of array) {
  //console.log(‘item Before: ’, item);
  //console.log(‘item After: ‘, callback(item));
  //console.log(‘---’);
    results.push(callback(item));
  }
  return results;
};
//const results1 = map(words, word => word[0]);
//console.log(results1);
const assertArrayEqual = function(firstArr,secondArr) {
  if (!eqArrays(firstArr,secondArr)) {
    console.log(`🛑🛑🛑 Assertion Failed  ${firstArr} !== ${secondArr}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  }
};
const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
assertArrayEqual(map([1,2,3],(x) => x * 2),[2,4,6]); // => Pass
assertArrayEqual(map([2,4,6],(x) => x * 2),[4,8,12]); // => Pass
assertArrayEqual(map([4,8,12],(x) => x * 2),[8,16,24]); // => Pass
assertArrayEqual(map([2,4,6],(x) => x * 2),[1,2,3]); // => Not Pass
assertArrayEqual(map([1,2,3],(x) => x * 2),[7,8,9]); // => Not Pass
assertArrayEqual(map([1,2,3],(x) => x * 2),[0,4,6]); // => Not Pass