
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function countLetters(allLetters) {
  var result = {};
  let noSpaces = allLetters.split(" ").join("");
  //console.log(namesToFind)
  for(var character of noSpaces) {
    
        if (result[character]){
          result[character] += 1;
        } else {
          result[character] = 1;
        } 
        
    // }
  }
  console.log(result)
  return result;
}

const line = "lighthouse in the house";

//console.log(noSpaces);




const result1 = countLetters(line);

  assertEqual(result1["l"], 1);
  assertEqual(result1["i"], 2);
  assertEqual(result1["g"], 1);
  assertEqual(result1["h"], 4);
  assertEqual(result1["t"], 2);
  assertEqual(result1["o"], 2);
  assertEqual(result1["u"], 2);
  assertEqual(result1["s"], 2);
  assertEqual(result1["e"], 3);
  assertEqual(result1["n"], 1);