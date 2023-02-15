//setup for linked JSON file and npm readline-sync

const MESSAGES = require('./calculator_messages.json');

const READLINE = require("readline-sync");

// finding invalid inputs for guard clause

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidName(userName) {
  return userName.trimStart() === "" || userName.length < 3 || !userName.match(/^[A-Za-z]+$/);
}

function invalidInput(response) {
  return (response[0].toLowerCase() !== 'y' || response[0].toLowerCase() !== 'n') && response.length > 3;
}

// Program start

console.clear();

function prompt(message) {
  console.log(`=> ${message}`);
}

// nesting the code in a while loop to give restart option at the end

while (true) {
  // asking for an input and assigning it to "name"
  prompt(MESSAGES['welcome']);
  let name = READLINE.question();

  // guard clause for invalid input

  while (invalidName(name)) {
    prompt(MESSAGES['validName']);
    name = READLINE.question();
  }
  // rinse and repeat
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

  // while the chosen operation is not 1 - 4, ask again

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['validOperator']);
    operation = READLINE.question();
  }

  // calculation process assigning result to "output"

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

  // displaying result

  prompt(`${MESSAGES['result']} ${output}`);

  // Program end; Asking for another calculation

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