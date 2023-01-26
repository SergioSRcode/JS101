// ask the user for the first number.
// ask the user for the second number.
// ask the user for an operation to perform.
// perform the operation on the two numbers.
// print the result to the console.

const READLINE = require("readline-sync");

console.log("Welcome to Mr. Calculator!");

console.log("What's the first number?");
let number1 = Number(READLINE.question());

console.log("What's the second number?");
let number2 = Number(READLINE.question());

console.log("What operation would you like to perform?\n1) Add \n2) Substract \n3) Multiply \n4) Divide");
let operation = READLINE.question();

let output;
if (operation === "1") {
  output = number1 + number2;
} else if (operation === "2") {
  output = number1 - number2;
} else if (operation === "3") {
  output = number1 * number2;
} else if (operation === "4") {
  output = number1 / number2;
} else {
  output = "try again using a proper operation!";
}

console.log(`The result is: ${output}`);
