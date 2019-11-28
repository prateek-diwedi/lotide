const assertEqual = function (actual , expected)
{
 // for (i = 0; i < assertEqual.length; i++){
  if ( actual === expected) 
  {
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

//}
const eqArrays = function (arrOne , arrTwo){
  //let arrOne = [];
  //let arrTwo =[];
  
  
if (arrOne.length !== arrTwo.length) {
  return false;
} else {
  for (i = 0; i < arrOne.length; i++){
    if ( arrOne[i] !== arrTwo[i])
   return false;
} return true;
  }
};

//const value = eqArrays([1, 2, 3], [1, 2, 3])

//console.log(value);


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false 