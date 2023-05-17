
const RL_SYNC = require("readline-sync");

function divider() {
  console.log();
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function getNoun() {
  prompt("Enter a noun: ");
  const NOUN = RL_SYNC.prompt();

  return NOUN;
}

function getVerb() {
  prompt("Enter a verb: ");
  const VERB = RL_SYNC.prompt();

  return VERB;
}

function getAdjective() {
  prompt("Enter an adjective: ");
  const ADJECTIVE = RL_SYNC.prompt();

  return ADJECTIVE;
}

function getAdverb() {
  prompt("Enter an adverb: ");
  const ADVERB = RL_SYNC.prompt();

  return ADVERB;
}

function MadlibsGamePrint(noun, verb, adjective, adverb) {
  prompt(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
  prompt(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
  prompt(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
}

// Programm start
console.clear();
const NOUN = getNoun();
divider();
const VERB = getVerb();
divider();
const ADJECTIVE = getAdjective();
divider();
const ADVERB = getAdverb();
console.clear();

MadlibsGamePrint(NOUN, VERB, ADJECTIVE, ADVERB);
divider();