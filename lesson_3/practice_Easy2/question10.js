// Write a one-line expression to count the number of lower-case t characters
// in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// Solution 1 throws error on statement2

// console.log(statement1.match(/t/g).length);
// console.log(statement2.match(/t/g).length);

// Solution 2

console.log(statement1.split("").filter(char => char === "t").length);
console.log(statement2.split("").filter(char => char === "t").length);