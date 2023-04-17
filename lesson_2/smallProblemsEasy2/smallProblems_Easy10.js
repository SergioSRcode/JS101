// input: current age, age to retire
// output: current year + year of retirement + work duration left

// requirements
/*
1) input is number
2) age to retire must be greater that current age.
3) current age must be equal to or greater than 18.
4) no need for computer input separation
*/

// mental model
/*
Program takes two input number values (age and age of retirement).
Program subtracts current age from age of retirment and saves difference.
Then the program displays the current year and than the
year of retirement by adding the saved difference to current year.
Lastly program displays the saved difference in a single sentence.
*/

// D&A
/*
pre) require("readline-sync");

Edge cases)

EDGE1 FUNCTION (currentAge)
  currAgeTooYoung = currentAge < 18
  isAlpha = currentAge === Alpha characters

  return isAlpha || currAgeTooYoung

EDGE2 FUNCTION (currentAge, retirementAge)
  rAgeLessThanCurrentAge = retirementAge < currentAge
  isAlpha = retirementAge === Alpha characters

  return isAlpha || rAgeLessThanCurrentAge


1) create FUNCTION
=>  prompts for current age input
=>  get input

=>  WHILE (EDGE1(currentAge))
=>    get another input

=>  return input

2) create FUNCTION (currentAge)
=>  prompts for desired retirement age
=>  get input

=>  WHILE (EDGE2(currentAge, retirementAge))
=>    get another input

=>  return input

3) create FUNCTION (currentAge, retirementAge)
=>  yearsTillRetirement = retirementAge - currentAge
=>  return yearsTillRetirement

4) create FUNCTION (yearsTillRetirement)
=>  display current year and currentyear + yTR
=>  display yTR

*/
// meta data
const RL_SYNC = require("readline-sync");

// guard clauses
function currentAgeIsInvalid(currentAge) {
  let currAgeTooYoung = Number(currentAge) < 18;
  let isAlpha = currentAge.match(/^[A-Za-z]+$/);

  return currAgeTooYoung || isAlpha;
}

function retirementAgeIsInvalid(currentAge, retirementAge) {
  let rAgeLessThanCurrentAge = Number(retirementAge) < Number(currentAge);
  let isAlpha = currentAge.match(/^[A-Za-z]+$/);

  return rAgeLessThanCurrentAge || isAlpha;
}

// program functions

function getCurrentAge() {
  console.log("What is your age?");
  let currentAge = RL_SYNC.question();

  while (currentAgeIsInvalid(currentAge)) {
    console.log("Wait...that can't be right. Try again!");
    currentAge = RL_SYNC.question();
  }
  return currentAge;
}

function getRetirementAge(currentAge) {
  console.log("At what age would you like to retire?");
  let retirementAge = RL_SYNC.question();

  while (retirementAgeIsInvalid(currentAge, retirementAge)) {
    console.log("Should have retired sooner then! Try again!");
    retirementAge = RL_SYNC.question();
  }
  return retirementAge;
}

function calculateDifference(currentAge, retirementAge) {
  let yearsTillRetirement = parseFloat(retirementAge) - parseFloat(currentAge);
  return yearsTillRetirement.toFixed(0);
}

function displayResult(yearsTillRetirement) {
  let today = new Date();
  let currentYear = today.getFullYear();

  console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsTillRetirement}.`);
  console.log(`You have only ${yearsTillRetirement} years of work to go!`);
}

// program start

const CURRENT_AGE = getCurrentAge();
const RETIREMENT_AGE = getRetirementAge(CURRENT_AGE);
const DIFFERENCE = Number(calculateDifference(CURRENT_AGE, RETIREMENT_AGE));

displayResult(DIFFERENCE);
