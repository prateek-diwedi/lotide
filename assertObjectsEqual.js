const eqArrays = function(Array1,Array2) {
  let condition = true;
  if (Array1.length !== Array2.length) {
    condition = false;
  } else {
    for (let i = 0; i < Array1.length; i++) {
      if (Array1[i] !== Array2[i]) {
        condition = false;
      }
    }
  }
  return condition;
};
const eqObjects = function(object1, object2) {
  let object1keys = Object.keys(object1);
  let object2keys = Object.keys(object2);
  if (object1keys.length !== object2keys.length) {
    return false;
  }
  for (let key of object1keys) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  if (eqObjects (actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

//console.log(`Example label: ${inspect(actual)}`);

assertObjectsEqual (cd , dc)