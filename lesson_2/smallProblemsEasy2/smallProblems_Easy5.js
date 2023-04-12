// input: 2 numbers
// output: addition, substraction, product, quotient, remainder and power

// requirements
/*
no input validation required!
single functions for expressions
final function to call other functions
indicate also the numbers used for calc.
*/

// mental model
/*
Program takes two input numbers and calculates these numbers
using arithmetic expressions one after another. The numbers used
for the calculation as well as the result should be printed on the same line.
*/

// D&A
/*
Pre) create var for require rl-sync

1) create function to take the first num.
2) create function to take second num.
3) new function for each expression.
4) final function for printing all results.

*/

// meta data
const RL_SYNC = require("readline-sync");

// helper function
let prompt = message => console.log(`==> ${message}`);

// receiving functions

function getFirstNum() {
  prompt("Enter the first number:");
  let firstNum = Number(RL_SYNC.question());
  return firstNum;
}

function getSecondNum() {
  prompt("Enter the second number:");
  let secondNum = Number(RL_SYNC.question());
  return secondNum;
}

// arithmetic functions

let addition = (num1, num2) => num1 + num2;

let substraction = (num1, num2) => num1 - num2;

let multiplication = (num1, num2) => num1 * num2;

let division = (num1, num2) => Math.floor(num1 / num2);

let remainder = (num1, num2) => num1 % num2;

let power = (num1, num2) => BigInt(Math.pow(num1, num2));

// show results

let displayAdditionResult = (num1, num2, result) => prompt(`${num1} + ${num2} = ${result}`);

let displaySubstractionResult = (num1, num2, result) => prompt(`${num1} - ${num2} = ${result}`);

let displayMultiplicationResult = (num1, num2, result) => prompt(`${num1} * ${num2} = ${result}`);

let displayDivisionResult = (num1, num2, result) => prompt(`${num1} / ${num2} = ${result}`);

let displayRemainderResult = (num1, num2, result) => prompt(`${num1} % ${num2} = ${result}`);

let displayPowerResult = (num1, num2, result) => prompt(`${num1} ** ${num2} = ${result}`);

// programm start

console.clear();

let firstNum = getFirstNum();

let secondNum = getSecondNum();

// perform calculations

let resultAddition = addition(firstNum, secondNum);

let resultSubstraction = substraction(firstNum, secondNum);

let resultMultiplication = multiplication(firstNum, secondNum);

let resultDivision = division(firstNum, secondNum);

let resultRemainder = remainder(firstNum, secondNum);

let resultPower = power(firstNum, secondNum);

// invoke results

displayAdditionResult(firstNum, secondNum, resultAddition);

displaySubstractionResult(firstNum, secondNum, resultSubstraction);

displayMultiplicationResult(firstNum, secondNum, resultMultiplication);

displayDivisionResult(firstNum, secondNum, resultDivision);

displayRemainderResult(firstNum, secondNum, resultRemainder);

displayPowerResult(firstNum, secondNum, resultPower);
