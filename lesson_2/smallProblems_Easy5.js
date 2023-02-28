const RL_SYNC = require("readline-sync");

function prompt(message) {
  console.log('=> ' + message);
}

function billAmount() {
  prompt('What is the bill?');
  let amount = RL_SYNC.question();
  return Number(amount);
}

function tipPercentage() {
  prompt('What is the tip percentage?');
  let tipPercentage = RL_SYNC.question();
  return Number(tipPercentage);
}

let amountOfBill = billAmount();
let tipInUSD = (amountOfBill / 100) * tipPercentage();
let totalAmount = tipInUSD + amountOfBill;

console.log(`The tip is $${tipInUSD}
The total is $${totalAmount}`);
