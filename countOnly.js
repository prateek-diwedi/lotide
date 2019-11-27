const assertEqual = function(firstNames, result1) {
  if (firstNames === result1) {
    console.log(`✅✅✅ Assertion Passed: ${firstNames} === ${result1}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstNames} !== ${result1}`);
  }
};

function countOnly(allNames, namesToFind) {
  var result = {};
  //console.log(namesToFind)
  for(var name of allNames) {
    console.log(name)
     if(namesToFind[name]) {
        if (result[name]){
          result[name] += 1;
        } else {
          result[name] = 1;
        } 
        
     }
  }

  console.log(result)
  return result;
  
}  //console.log(countOnly)
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
//console.log(firstNames)
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
//console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);