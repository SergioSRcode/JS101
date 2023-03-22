// meta data

const READLINE = require("readline-sync");
const MESSAGES = require("./Mortgage_Calc_Messages.json");
const LANGUAGE = "en";

// helper functions

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
// works
function invalidMonthsOrYears(monthsOrYears) {
  const DURATION_IN_MONTHS = monthsOrYears === "1";
  const DURATION_IN_YEARS = monthsOrYears === "2";

  return !DURATION_IN_MONTHS && !DURATION_IN_YEARS;
}
// doesn't work
function invalidLoanDuration(duration) {
  const DURATION_IS_0 = duration === "0" || duration === "-0";
  const DURATION_IS_INFINITY = duration === Infinity || duration === -Infinity;
  const IS_NUMERIC = duration.match(/^[0-9]+$/);

  return DURATION_IS_0 || !IS_NUMERIC || DURATION_IS_INFINITY;
}

function validYesOrNo(response, currency) {
  const answerIsYes = txtMessage('answerYes', currency, LANGUAGE).includes(response.toLowerCase());
  const answerIsNo = txtMessage('answerNo', currency, LANGUAGE).includes(response.toLowerCase());

  return !answerIsYes && !answerIsNo;
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

  while (invalidLoanAmount(amountOfLoan)) {
    prompt(txtMessage("validAmount", currency, LANGUAGE));
    amountOfLoan = READLINE.question();
  }
  return parseFloat(amountOfLoan);
}

function askForAPR(currency) {
  prompt(txtMessage("annualPercentageRate", currency, LANGUAGE));
  let annualPR = READLINE.question();

  while (invalidAPR(annualPR)) {
    prompt(txtMessage("validAPR", currency, LANGUAGE));
    annualPR = READLINE.question();
  }

  let monthlyRate = (parseFloat(annualPR) / 100) / 12;
  return monthlyRate;
}
// needs work
function askDurationMonthsOrYears(currency) {
  prompt(txtMessage("loanDuration", currency, LANGUAGE));
  let monthsOrYears = READLINE.question();

  while (invalidMonthsOrYears(monthsOrYears)) {
    prompt(txtMessage("validDuration", currency, LANGUAGE));
    monthsOrYears = READLINE.question();
  }
  return monthsOrYears;
}
// guard clause broke the code
// eslint-disable-next-line max-lines-per-function
function askLoanDuration(durationInMonthsOrYears, currency) {
  let durationInMonths = "";
  let durationInYears = "";
  let isActive = "";

  switch (durationInMonthsOrYears) {
    case "1" :
      prompt(txtMessage("durationInMonths", currency, LANGUAGE));
      durationInMonths = READLINE.question();
      isActive = durationInMonths;
      break;
    case "2" :
      prompt(txtMessage("durationInYears", currency, LANGUAGE));
      durationInYears = READLINE.question() * 12;
      isActive = String(durationInYears);
      break;
  }

  if (durationInMonthsOrYears === "2") {
    while (invalidLoanDuration(isActive)) {
      prompt(txtMessage("validDuration", currency, LANGUAGE));
      isActive = String(READLINE.question() * 12);
    }
  } else if (durationInMonthsOrYears === "1") {
    while (invalidLoanDuration(isActive)) {
      prompt(txtMessage("validDuration", currency, LANGUAGE));
      isActive = READLINE.question();
    }
  }
  return parseFloat(isActive);
}

// Calculation

function performCalculation(lAmount, monthlyIRate, lDurationMonths) {
  let monthlyPayment = lAmount *
                  (monthlyIRate /
                  (1 - Math.pow((1 + monthlyIRate), (-lDurationMonths))));
  return monthlyPayment;
}

// printing result

function displayResult(monthlyAmount, currency) {
  prompt(`${txtMessage("result", currency, LANGUAGE)} ${monthlyAmount.toFixed(2)}`);
}

// ask for another calculation, if yes => restart program

function continueCalculating(currency) {
  prompt(txtMessage("anotherCalculation", currency, LANGUAGE));
  let answer = READLINE.question();

  while (validYesOrNo(answer, currency)) {
    prompt(txtMessage("validInput", currency, LANGUAGE));
    answer = READLINE.question();
  }

  if (txtMessage('answerYes', currency, LANGUAGE).includes(answer.toLowerCase())) {
    console.clear();
  } else if (txtMessage('answerNo', currency, LANGUAGE).includes(answer.toLowerCase())) {
    console.clear();
    return false;
  }
  return true;
}

// program start

do {
  console.clear();

  let currencyType = askForCurrency();

  let loanAmount = askLoanAmount(currencyType);

  let monthlyInterestRate = askForAPR(currencyType);

  let durationMonthsOrYears = askDurationMonthsOrYears(currencyType);

  let loanDuration = askLoanDuration(durationMonthsOrYears, currencyType);

  // eslint-disable-next-line max-len
  let toPayMonthly = performCalculation(loanAmount, monthlyInterestRate, loanDuration);
  displayResult(toPayMonthly, currencyType);

} while (continueCalculating()); // END or continue