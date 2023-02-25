//setup for linked JSON file, npm readline-sync and language settings

const MESSAGES = require('./calculator_messages.json');

const READLINE = require("readline-sync");

const LANGUAGE = 'en';

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

// finding invalid inputs for guard clauses

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidName(userName) {
  const isEmptyString = userName.trimStart() === "";
  const isTooShort = userName.length < 3;
  const isAlpha = userName.match(/^[A-Za-z]+$/);

  return isEmptyString || isTooShort || !isAlpha;
}

function invalidYesOrNo(response) {
  const answerIsYes = messages('answerYes', LANGUAGE).includes(response.toLowerCase());
  const answerIsNo = messages('answerNo', LANGUAGE).includes(response.toLowerCase());

  return !answerIsYes && !answerIsNo;
}

// Clear console and add "=>" to prompts

console.clear();

function prompt(message) {
  console.log(`=> ${message}`);
}

function askForUserName() {
  // asking for an input (username in this case)
  prompt(messages('welcome', LANGUAGE));
  let name = READLINE.question();
  // guard clause for invalid input
  while (invalidName(name)) {
    prompt(messages('validName', LANGUAGE));
    name = READLINE.question();
  }
}

// rinse and repeat

function askForFirstNumber() {
  prompt(messages('firstNumber', LANGUAGE));
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt(messages('validNumber', LANGUAGE));
    number1 = READLINE.question();
  }
  return number1;
}

function askForSecondNumber() {
  prompt(messages('secondNumber', LANGUAGE));
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt(messages('validNumber', LANGUAGE));
    number2 = READLINE.question();
  }
  return number2;
}

function askForOperator() {
  prompt(messages('operator', LANGUAGE));
  let operation = READLINE.question();

  // while the chosen operation is not 1 - 4, ask again
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('validOperator', LANGUAGE));
    operation = READLINE.question();
  }
  return operation;
}

// eslint-disable-next-line max-lines-per-function
function performCalculation(firstNum, secondNum, operation) {
  // calculation process assigning result to "output"
  let output;
  switch (operation) {
    case "1":
      output = Number(firstNum) + Number(secondNum);
      break;
    case "2":
      output = Number(firstNum) - Number(secondNum);
      break;
    case "3":
      output = Number(firstNum) * Number(secondNum);
      break;
    case "4":
      output = Number(firstNum) / Number(secondNum);
      break;
  }
  // guard clause against division with 0 and -0
  if (operation === "4" && (secondNum === "0" || secondNum === "-0")) {
    output = "error";
  }
  return output;
}

function displayResult(output) {
  // displaying result
  prompt(`${messages('result', LANGUAGE)} ${output}`);
}

// Asking for another calculation
function continueCalculating() {
  prompt(messages('anotherCalculation', LANGUAGE));
  let answer = READLINE.question();

  while (invalidYesOrNo(answer)) {
    prompt(messages('validInput', LANGUAGE));
    answer = READLINE.question();
  }
  // checking to rerun program y/n or yes/no
  if (messages('answerYes', LANGUAGE).includes(answer.toLowerCase())) {
    console.clear();
  } else if (messages('answerNo', LANGUAGE).includes(answer.toLowerCase())) {
    console.clear();
    return false;
  }
  return true;
}

// program start

let programLoop = true;
askForUserName();

while (programLoop) {
  let firstNum = askForFirstNumber();
  let secondNum = askForSecondNumber();
  let operation = askForOperator();
  let output = performCalculation(firstNum, secondNum, operation);

  displayResult(output);

  // Program end; Asking for another calculation
  programLoop = continueCalculating();
}