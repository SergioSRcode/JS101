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

// counter
let round = 1;
let win = 0;
let loss = 0;
let tie = 0;

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
    ${VALID_ABBREVIATIONS.join(", ")}`);
  let userChoice = READLINE.question().toLowerCase();

  while (!VALID_CHOICES.includes(userChoice) &&
        !VALID_ABBREVIATIONS.includes(userChoice)) {
    prompt("That's not a valid choice, try again!");
    userChoice = READLINE.question().toLowerCase();
  }
  // turn abbreviation into full word
  if (VALID_ABBREVIATIONS.includes(userChoice)) {
    // eslint-disable-next-line id-length
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
function getWinnerOfRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tie";
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
    return "user";
  } else {
    return "computer";
  }
}

function displayWinnerOfRound(winner) {
  if (winner === "user") {
    prompt("Cool, you won this round!");
  } else if (winner === "computer") {
    prompt("Computer won this round.");
  } else {
    prompt("Close! It's a tie for this round!");
  }
}

function winCounter(winnerOfRound) {
  switch (winnerOfRound) {
    case "user" :
      win += 1;
      break;
    case "computer" :
      loss += 1;
      break;
    case "tie" :
      tie += 1;
      break;
  }
  round += 1;
}

function displayGameWinner(win, loss, tie) {
  if (win === 3) {
    prompt("Congrats! You won the game!");
    round = 5;
  } else if (loss === 3) {
    prompt("The computer won the game! Better luck next time!");
    round = 5;
  } else if (tie >= 3 && win > loss) {
    prompt("Wow, you won the game by a narrow margin");
    round = 5;
  } else if (tie >= 3 && win < loss) {
    prompt("The computer won the game but it was very close!");
    round = 5;
  } else if (tie >= 3 && win === loss) {
    prompt("wow, the game ends in a tie...that's some skill right there!");
    round = 5;
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

  console.log(`Round No. ${round}`);

  codeDivider();

  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();

  codeDivider();

  displayChoices(userChoice, computerChoice);
  let winnerOfRound = getWinnerOfRound(userChoice, computerChoice);
  displayWinnerOfRound(winnerOfRound);

  winCounter(winnerOfRound);

  displayGameWinner(win, loss, tie);

} while (continuePlaying());