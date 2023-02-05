// ask the user for the first number.
// ask the user for the second number.
// ask the user for an operation to perform.
// perform the operation on the two numbers.
// print the result to the console.

const READLINE = require("readline-sync");

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Welcome to Mr. Calculator!");

while (true) {

  prompt("What's the first number?");
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number. Try again!");
    number1 = READLINE.question();
  }

  prompt("What's the second number?");
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number. Try again!");
    number2 = READLINE.question();
  }

  prompt("What operation would you like to perform?\n1) Add \n2) Substract \n3) Multiply \n4) Divide");
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
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

  prompt(`The result is: ${output}`);

  prompt('Would you like to perform another calculation? (y/n)');
  let answer = READLINE.question();

  if (answer[0].toLowerCase() !== 'y') break;
}

