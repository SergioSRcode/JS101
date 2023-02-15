//setup for linked JSON file and npm readline-sync

const MESSAGES = require('./calculator_messages.json');

const READLINE = require("readline-sync");

const LANGUAGE = 'en';

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

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
  prompt(messages('welcome', LANGUAGE));
  let name = READLINE.question();

  // guard clause for invalid input

  while (invalidName(name)) {
    prompt(messages('validName', LANGUAGE));
    name = READLINE.question();
  }
  // rinse and repeat
  prompt(messages('firstNumber', LANGUAGE));
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt(messages('validNumber', LANGUAGE));
    number1 = READLINE.question();
  }

  prompt(messages('secondNumber', LANGUAGE));
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt(messages('validNumber', LANGUAGE));
    number2 = READLINE.question();
  }

  prompt(messages('operator', LANGUAGE));
  let operation = READLINE.question();

  // while the chosen operation is not 1 - 4, ask again

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('validOperator', LANGUAGE));
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

  prompt(`${messages('result', LANGUAGE)} ${output}`);

  // Program end; Asking for another calculation

  prompt(messages('anotherCalculation', LANGUAGE));
  let answer = READLINE.question();

  while (invalidInput(answer)) {
    prompt(messages('validInput', LANGUAGE));
    answer = READLINE.question();
  }

  if (answer[0].toLowerCase() === 'y' && answer.length <= 3) {
    console.clear();
  } else if (answer[0].toLowerCase() === 'n' && answer.length <= 2) {
    break;
  }
}