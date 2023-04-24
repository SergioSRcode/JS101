// meta data
const READLINE = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];
const ANSWER_YES_OR_NO = ["y", "yes", "n", "no"];

// helper function
function prompt(message) {
  console.log(`=> ${message}`);
}

function codeDivider() {
  console.log(` `);
}

// program functions
function getUserChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let userChoice = READLINE.question().toLowerCase();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice");
    userChoice = READLINE.question();
  }
  return userChoice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  return computerChoice;
}

function displayChoices(userChoice, computerChoice) {
  prompt(`You chose ${userChoice.toUpperCase()}, computer chose ${computerChoice.toUpperCase()}`);
}

function displayWinner(userChoice, computerChoice) {
  if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")) {
    prompt("You won!");
  } else if ((computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "rock")) {
    prompt("Computer won!");
  } else {
    prompt("It's a tie!");
  }
}

function continuePlaying() {
  prompt("Do you want to play again (y/n)?");
  let answer = READLINE.question().toLowerCase();

  while (!ANSWER_YES_OR_NO.includes(answer)) {
    prompt("Please enter 'y' or 'n'.");
    answer = READLINE.question().toLowerCase();
  }

  if (answer === "n" || answer === "no") {
    return false;
  } else {
    return true;
  }
}

// program start

do {

  console.clear();

  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();

  codeDivider();

  displayChoices(userChoice, computerChoice);
  displayWinner(userChoice, computerChoice);

  codeDivider();

} while (continuePlaying());