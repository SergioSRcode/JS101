// ask the user for the first number.
// ask the user for the second number.
// ask the user for an operation to perform.
// perform the operation on the two numbers.
// print the result to the console.

const MESSAGES = require('./calculator_messages.json');

const READLINE = require("readline-sync");

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidName(userName) {
  return userName.trimStart() === "" || userName.length < 3 || !userName.match(/^[A-Za-z]+$/);
}

function invalidInput(response) {
  return (response[0].toLowerCase() !== 'y' || response[0].toLowerCase() !== 'n') && response.length > 3;
}

console.clear();

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {

  prompt(MESSAGES['welcome']);
  let name = READLINE.question();

  while (invalidName(name)) {
    prompt(MESSAGES['validName']);
    name = READLINE.question();
  }

  prompt(MESSAGES['firstNumber']);
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['validNumber']);
    number1 = READLINE.question();
  }

  prompt(MESSAGES['secondNumber']);
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['validNumber']);
    number2 = READLINE.question();
  }

  prompt(MESSAGES['operator']);
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['validOperator']);
    operation = READLINE.question();
  }

  let output;

  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${MESSAGES['result']} ${output}`);

  prompt(MESSAGES['anotherCalculation']);
  let answer = READLINE.question();

  while (invalidInput(answer)) {
    prompt(MESSAGES['validInput']);
    answer = READLINE.question();
  }

  if (answer[0].toLowerCase() === 'y' && answer.length <= 3) {
    console.clear();
  } else if (answer[0].toLowerCase() === 'n' && answer.length <= 2) {
    break;
  }
}