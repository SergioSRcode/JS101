// Information needed:

// loan amount
// annual percentage rate (APR)
// loan duration

// Calculate: Monthly interest rate & loan duration in months
// print number with two decimals

// given formula: let m = p * (j / (1 - Math.pow((1 + j), (-n))));
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in month

// Edge cases: no-interest loans => error
//             not an integer num of years => calculate

// meta data
const READLINE = require("readline-sync");
const MESSAGES = require("./Mortgage_Calc_Messages.json");
const LANGUAGE = "en";

function txtMessage(message, currency = "$", lang = "en") {
  return MESSAGES[currency][lang][message];
}

function prompt(message) {
  console.log(`👉 ${message}`);
}

// guard clause functions

function invalidCurrency(chosenCurrency) {
  const VALID_CURRENCY = ["$", "€"];
  const CURRENCY_OF_CHOICE = VALID_CURRENCY.includes(chosenCurrency);

  return !CURRENCY_OF_CHOICE;
}

function invalidLoanAmount(amountOfLoan) {
  const AMOUNT_IS_0 = amountOfLoan === "0";
  const AMOUNT_IS_NUMERIC = amountOfLoan.match(/^[0-9]+$/);

  return AMOUNT_IS_0 || !AMOUNT_IS_NUMERIC;
}

function invalidAPR(annualPR) {
  const APR_IS_0 = annualPR === "0";
  const APR_IS_100 = annualPR === "100";
  const AMOUNT_IS_NUMERIC = annualPR.match(/^[0-9]+$/);

  return APR_IS_0 || !AMOUNT_IS_NUMERIC || APR_IS_100;
}

// Collecting functions

function askForCurrency() {
  let currency = "$";
  prompt(txtMessage("welcome", currency, LANGUAGE));
  currency = READLINE.question();
  // guard clause for invalid currency input
  while (invalidCurrency(currency)) {
    prompt(txtMessage("validCurrency"));
    currency = READLINE.question();
  }
  return currency;
}

function askLoanAmount(currency) {
  prompt(txtMessage("loanAmount", currency, LANGUAGE));
  let amountOfLoan = READLINE.question();
  // guard clause follows
  while (invalidLoanAmount(amountOfLoan)) {
    prompt(txtMessage("validAmount", currency, LANGUAGE));
    amountOfLoan = READLINE.question();
  }
  return amountOfLoan;
}

function askForAPR(currency) {
  prompt(txtMessage("annualPercentageRate", currency, LANGUAGE));
  let annualPR = READLINE.question();

  while (invalidAPR(annualPR)) {
    prompt(txtMessage("validAPR", currency, LANGUAGE));
    annualPR = READLINE.question();
  }
  annualPR = parseFloat(annualPR);
  annualPR /= 100;

  let monthlyRate = annualPR / 12;
  return monthlyRate;
}

function askLoanDuration(currency) {
  prompt(txtMessage("loanDuration", currency, LANGUAGE));
  let durationOfLoan = READLINE.question();
  let durationInMonths = parseFloat(durationOfLoan) * 12;
  // guard clause follows
  return durationInMonths;
}

// Calculation and result print

function performCalculation(lAmount, monthlyIRate, lDurationMonths) {
  // eslint-disable-next-line max-len
  let monthlyPayment = lAmount * (monthlyIRate / (1 - Math.pow((1 + monthlyIRate), (-lDurationMonths))));
  return monthlyPayment;
}

function displayResult(monthlyAmount, currency) {
  prompt(`${txtMessage("result", currency, LANGUAGE)} ${monthlyAmount.toFixed(2)}`);
}
/*
START

GREETING
  Ask for currency

GET loan amount

GET APR in %
  convert to number e.g. 5% => .05

GET loan duration

CALCULATE convert APR to months
CALCULATE convert loan duration to months

CALCULATE monthly payment

REPEAT y/n

no? => END
*/

let currencyType = askForCurrency();

let loanAmount = askLoanAmount(currencyType);

let monthlyInterestRate = askForAPR(currencyType);

let loanDuration = askLoanDuration(currencyType);

// eslint-disable-next-line max-len
let toPayMonthly = performCalculation(loanAmount, monthlyInterestRate, loanDuration);
displayResult(toPayMonthly, currencyType);
