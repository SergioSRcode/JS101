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

function askForCurrency() {
  let currency = "$";
  prompt(txtMessage("welcome", currency, LANGUAGE));
  currency = READLINE.question();
  // guard clause follows
  return currency;
}

function askLoanAmount(currency) {
  prompt(txtMessage("loanAmount", currency, LANGUAGE));
  let amountOfLoan = READLINE.question();
  // guard clause follows
  return amountOfLoan;
}

function askForAPR(currency) {
  prompt(txtMessage("annualPercentageRate", currency, LANGUAGE));
  let annualPR = READLINE.question();
  let monthlyRate = parseFloat(annualPR) / 12;
  // guard clause follows
  return monthlyRate;
}

function askLoanDuration(currency) {
  prompt(txtMessage("loanDuration", currency, LANGUAGE));
  let durationOfLoan = READLINE.question();
  let durationInMonths = parseFloat(durationOfLoan) * 12;
  // guard clause follows
  return durationInMonths;
}

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
