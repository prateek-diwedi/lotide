// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, callback){
  //let keys = Object.keys(object)
  //console.log(keys)
  for (let key in object){
    if (callback(object[key])){
    //console.log(object[key])
    return key;
    }
  }
  
};
console.log(findKey ({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

//console.log(Object.values(bestTVShowsByGenre))
//assertEqual(findKeyByValue(findKey, "Ora"), " 2");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);