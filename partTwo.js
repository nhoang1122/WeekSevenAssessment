const perf = require('execution-time')();

//SUM ZERO//

//O(n^2)//

const addToZero = (arr) => {
    
  let result = false;
    
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {

      if (arr[i] + arr[j] === 0) {
        result = true;
      }

    }

  }

  return result;

}

addToZero([]); //170.874 μs// 
addToZero([1]); //94.711 μs//
addToZero([1, 2, 3]); //71.2 μs//
addToZero([1, 2, 3, -2]); //70.617 μs//

console.log("FALSE : ",addToZero([]));
console.log("FALSE : ", addToZero([1]));
console.log("FALSE : ",addToZero([1, 2, 3]));
console.log("TRUE : ", addToZero([1, 2, 3, -2]));



//UNIQUE CHARACTERS//

//O(n)//

const hasUniqueChars = (str) => {

  let uniqueStr = new Set([]);
  let lowerCaseStr = str.toLowerCase();

  for (let i = 0; i < lowerCaseStr.length; i++) {
    uniqueStr.add(lowerCaseStr[i])
  }

  return uniqueStr.size === lowerCaseStr.length;

}

hasUniqueChars("Monday"); //71.284 μs//
hasUniqueChars("Moonday"); //148.114 μs//

console.log("TRUE : ", hasUniqueChars("Monday"));
console.log("FALSE : ", hasUniqueChars("Moonday"));
console.log("FALSE : ", hasUniqueChars("Bob"));

//PANGRAM SENTENCE//

//O(n)//

const isPangram = (str) => {
  
  let newStr = str.toLowerCase().replace(/\s/g, '');
  
  let pangramSet = new Set([]);

  for (let i = 0; i < newStr.length; i++) {
    pangramSet.add(newStr[i])  
  }

  if(pangramSet.size >= 26) {
    return true;
  } else {
    return false;
  }
  
}

isPangram("The quick brown fox jumps over the lazy dog!"); //115.351 μs//
isPangram("I like cats, but not mice"); //112.682 μs//

console.log("TRUE",isPangram("The quick brown fox jumps over the lazy dog!"));
console.log("FALSE", isPangram("I like cats, but not mice"));
console.log("TRUE",isPangram("AaBbCcDdEeFfGgHhIiJjKkLlMmNnLlOoPpQqRrSsTtUuVvWwXxYyZz"));
console.log("FALSE",isPangram(""));

//LONGEST WORD//

//O(n)//

const findLongestWord = (arr) => {

  let longestDefault = arr[0].length;
  
  for (let i = 1; i < arr.length; i++) {

    if(arr[i].length > longestDefault) {
      longestDefault = arr[i].length;
    }

  }
  
  return longestDefault;
    
}

findLongestWord(["hi", "hello"]) //105.406 μs//

console.log("Should be 5 : ",findLongestWord(["hi","hello"]))
console.log("Should be 12 : ",findLongestWord(["hi","hello", "hola", "YOYOYOYOYOYO"]))

