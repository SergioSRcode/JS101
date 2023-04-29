// meta data
const READLINE = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const VALID_ABBREVIATIONS = ["r", "p", "sc", "l", "sp"];
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
  prompt(`You can type respectively:
    ${VALID_ABBREVIATIONS.join(", ")}`)
  let userChoice = READLINE.question().toLowerCase();

  while (!VALID_CHOICES.includes(userChoice) &&
        !VALID_ABBREVIATIONS.includes(userChoice)) {
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

// eslint-disable-next-line complexity
function displayWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    prompt("It's a tie!");
  } else if ((userChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (userChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock")) ||
        (userChoice === "lizard" && (computerChoice === "paper" || computerChoice === "spock"))) {
    prompt("You won!");
  } else {
    prompt("Computer won!");
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