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

function countLetters(allLetters) {
  var result = {};
  noSpace = allLetters.split(" ").join("");
  for( character in noSpace) {
        //console.log(character)
       if (result[noSpace[character]]){
          result[noSpace[character]].push(parseInt(character));
       }
       else {
          result[noSpace[character]] = [parseInt(character)];
        } 
    
  }
  console.log(result)
  
  return result;
}

const line = "lighthouse in the house";

//console.log(noSpaces);




const result1 = countLetters(line);
//console.log(result1)