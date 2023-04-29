// meta data
const READLINE = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const VALID_ABBREVIATIONS = ["r", "p", "sc", "l", "sp"];
const ROCK = ["rock", "r"];
const PAPER = ["paper", "p"];
const SCISSORS = ["scissors", "sc"];
const LIZARD = ["lizard", "l"];
const SPOCK = ["spock", "sp"];
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
    prompt("That's not a valid choice, try again!");
    userChoice = READLINE.question().toLowerCase();
  }
  // turn abbreviation into full word
  if (VALID_ABBREVIATIONS.includes(userChoice)) {
    for (let i = 0; i < VALID_ABBREVIATIONS.length; i++) {
      if (userChoice === VALID_ABBREVIATIONS[i]) {
        userChoice = VALID_CHOICES[i];
      }
    }
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
  } else if ((ROCK.includes(userChoice) &&
      (SCISSORS.includes(computerChoice) || LIZARD.includes(computerChoice))) ||
        (userChoice === SCISSORS.includes(userChoice) &&
      (PAPER.includes(computerChoice) || LIZARD.includes(computerChoice))) ||
        (PAPER.includes(userChoice) &&
      (ROCK.includes(computerChoice) || SPOCK.includes(computerChoice))) ||
        (SPOCK.includes(userChoice) &&
      (SCISSORS.includes(computerChoice) || ROCK.includes(computerChoice))) ||
        (LIZARD.includes(userChoice) &&
      (PAPER.includes(computerChoice) || SPOCK.includes(computerChoice)))) {
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