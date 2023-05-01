// meta data
const READLINE = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const VALID_ABBREVIATIONS = ["r", "p", "sc", "l", "sp"];
const MAX_NO_OF_ROUNDS = 5;

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

const ANSWER_YES_OR_NO = ["y", "yes", "n", "no"];

// counters
let round = 1;
let win = 0;
let loss = 0;
let tie = 0;

// helper function
function prompt(message) {
  console.log(`=> ${message}`);
}

function codeDivider() {
  console.log();
}

function greetingMessage() {
  prompt(`Welcome to RPS, the game for gamers all around the globe! 
  - Note: The AI used is called "lesser GPT".`);
}

function displayScore() {
  console.log(`Round No. ${round}  [Wins: ${win}] - [Losses: ${loss}] - [Ties: ${tie}]`);
}

function userWins(userChoice, computerChoice) {
  return WINNING_COMBOS[userChoice].includes(computerChoice);
}

function resetScores() {
  round = 1;
  win = 0;
  loss = 0;
  tie = 0;
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

function getWinnerOfRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tie";
  } else if (userWins(userChoice, computerChoice)) {
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
}

function roundCounter() {
  round += 1;
}

// eslint-disable-next-line max-lines-per-function
function displayGameWinner(win, loss, tie) {
  if (win === 3) {
    prompt(`Congrats! You won the game and won ${win} rounds total!`);
    round = 6;
  } else if (loss === 3) {
    prompt(`The computer won the game by winning ${loss} rounds! Better luck next time!`);
    round = 6;
  } else if (round > MAX_NO_OF_ROUNDS && ((win < 3) && (win > loss))) {
    prompt("Wow, you won the game by a narrow margin");
    round = 6;
  } else if (round > MAX_NO_OF_ROUNDS && ((loss < 3) && (win < loss))) {
    prompt("The computer won the game but it was very close!");
    round = 6;
  } else if (tie === 3 && ((win === 1) && (loss === 1))) {
    prompt("wow, the game ends in a tie...that's some skill right there!");
    round = 6;
  } else if (tie === 5) {
    prompt("That`s a flat tie! You better tie your tie for the next game!");
  } else if (tie === 1 && ((win === 2) && (loss === 2))) {
    prompt("wow, the game ends in a tie...that's some skill right there!");
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
    console.clear();
    return false;
  } else {
    resetScores();
    return true;
  }
}

// program start

function playRound() {
  do {
    displayScore();

    codeDivider();
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    console.clear();

    displayChoices(userChoice, computerChoice);
    let winnerOfRound = getWinnerOfRound(userChoice, computerChoice);
    displayWinnerOfRound(winnerOfRound);

    codeDivider();

    winCounter(winnerOfRound);
    roundCounter();

    displayGameWinner(win, loss, tie);
  } while (round <= MAX_NO_OF_ROUNDS);
}

do {
  console.clear();

  greetingMessage();

  codeDivider();

  playRound();

} while (continuePlaying());