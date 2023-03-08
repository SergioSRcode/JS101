// 1. ask user to enter integer greater than 0
// 2. then ask for operator + or *
// 3. calculate from 1 to the chosen integer using chosen operator

/*
START

ASK User for integer
  IF (integer < 0)
    Choose again!

ASK User for operator + or *
  IF (operator !== + || operator !== *)
    Choose again!

LOOP SET Iterator to 1
WHILE Iterator > integer
  RESULT = 0
  RESULT[i] += i

RETURN RESULT

READ RESULT

*/

const RL_SYNC = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function askForLastInteger() {
  prompt("Please enter an integer greater than 0: ");
  let lastInteger = RL_SYNC.question();

  while (lastInteger <= 0) {
    prompt("Please enter a valid number that is GREATER than 0! ");
    lastInteger = RL_SYNC.question();
  }
  return +lastInteger;
}

function askForOperator() {
  prompt("Please choose an operator:\n1) s\n2) p");
  let operator = RL_SYNC.question();

  while (operator !== "s" && operator !== "p") {
    prompt("Please enter a valid operation (s or p)! ");
    operator = RL_SYNC.question();
  }
  return operator;
}

function performCalculation(integer, operator) {
  let result = 0;

  if (operator === "p") {
    result = 1;
  }

  for (let i = 1; i <= integer; i++) {
    if (operator === "p") {
      result *= i;
    } else if (operator === "s") {
      result += i;
    }
  }

  return result;
}

function displayResults(operator, integerInput, result) {
  if (operator === "p") {
    return console.log(`The product of the integers between 1 and ${integerInput} is ${result}`);
  }

  if (operator === "s") {
    return console.log(`The sum of the integers between 1 and ${integerInput} is ${result}`);
  }
  return "unidentified value";
}


// program start
console.clear();

let integerInput = askForLastInteger();
let operatorInput = askForOperator();

let resultOfCalculation = performCalculation(integerInput, operatorInput);

// eslint-disable-next-line max-len
let showResult = displayResults(operatorInput, integerInput, resultOfCalculation);


