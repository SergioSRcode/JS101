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
  return !messages('answerYes', LANGUAGE).includes(response.toLowerCase()) && !messages('answerNo', LANGUAGE).includes(response.toLowerCase());
}

// Program start

console.clear();

function prompt(message) {
  console.log(`=> ${message}`);
}

// asking for an input and assigning it to "name"

prompt(messages('welcome', LANGUAGE));
let name = READLINE.question();

// nesting the code in a while loop to give restart option at the end

while (true) {
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

  // guard clause against division with 0 and -0

  if (operation === "4" && (number2 === "0" || number2 === "-0")) {
    output = 0;
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

  // checking for input y/n or yes/no

  if (messages('answerYes', LANGUAGE).includes(answer.toLowerCase())) {
    console.clear();
  } else if (messages('answerNo', LANGUAGE).includes(answer.toLowerCase())) {
    console.clear();
    break;
  }
}