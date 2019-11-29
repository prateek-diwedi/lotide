const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const takeUntil = function(array, callback) {
  let answer = [];
  for (let item of array) {
    if (!callback(item)) {
      answer.push(item);
    } else {
      break;
    }
  }
  return answer;
};
const assertArrayEqual = function(firstArr,secondArr) {
  if (!eqArrays(firstArr,secondArr)) {
    console.log(`⚠️ Assertion Failed  ${firstArr} !== ${secondArr}`);
  } else {
    console.log(`✅ Assertion Passed: ${firstArr} === ${secondArr}`);
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
const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');
console.log('\n');
console.log(results1);
console.log('---');
console.log(results2);
console.log('\n');
assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArrayEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
console.log('\n');