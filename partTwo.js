const perf = require('execution-time')();

//SUM ZERO//

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

const hasUniqueChars = (str) => {

    let uniqueStr = new Set([])

    for (let i = 0; i < str.length; i++) {
      uniqueStr.add(str[i])
    }

    return uniqueStr.size === str.length

}

hasUniqueChars("Monday"); //71.284 μs//
hasUniqueChars("Moonday"); //148.114 μs//

console.log("TRUE : ", hasUniqueChars("Monday"));
console.log("FALSE : ", hasUniqueChars("Moonday"));

//PANGRAM SENTENCE//



//LONGEST WORD//

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

// perf.start();
// findLongestWord(["hi", "hello"]);
// let results = perf.stop();

// console.log("findLongest", results.preciseWords);