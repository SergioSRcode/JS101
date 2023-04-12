// input: string of 2 or more words
// output: next to last word of string

// requirements
// input will always contain at least two words

// mental model
/*
Function takes one string argument and converts it to an array
looking for the next to last element withing the array to print to the console.
*/

// D&A
/*
1) Create function that takes one string argument
2) turn string into an array
3) get the next to last element
4) print the result.
*/

function penultimate(string) {
  let arrOfString = string.split(" ");
  return arrOfString[arrOfString.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true