// input: 1 number representing a year
// output: century of input number

// R&R
/*
1.) input is always an integer number
2.) Century needs to end with either 'st', 'nd', 'rd', 'th'
4.) length of number is irrelevant for the input
5.) anything < 1k  => 1st
    1001+ === 2nd
*/

// mental model
/*
In a function, determine the length of the number.
Divide the input number by 100 and round up to the next integer.
Provide the respective ending to the number and return the result.
*/

// test case

// console.log(Math.ceil(5 / 100));
// console.log(Math.ceil(2000 / 100));
// console.log(Math.ceil(1965 / 100));
// console.log(Math.ceil(256 / 100));
// console.log(Math.ceil(10103 / 100));
// console.log(Math.ceil(2001 / 100));

// A&D
/*
FUNCTION 1st(number)
  let dividedBy100 = number / 100;
  return dividedBy100;

let numberDividedBy100 = FUNCTION 1 (n);

FUNCTION 2nd(newNumber)
let finalDigit = Number(String(newNumber).slice(newNumber.length - 1));
let ending;

if (newNumber > 10 && newNumber < 20)
  ending = "th";
ELSE if (finalDigit === 0 || finalDigit > 3)
 ending = "th";

  switch (fD) {
    case 1:
      ending = "st";
      break;
    case 2:
      ending = "nd";
      break;
    case 3:
      ending = "rd";
      break;
  }

console.log(newNumber + ending);
*/

function century(num) {
  let dividedBy100 = Math.ceil(num / 100);
  return dividedBy100;
}

// eslint-disable-next-line max-lines-per-function
function getEnding(newNum) {
  let finalDigit = Number(String(newNum).slice(newNum.length - 1));
  let ending;

  if (newNum > 10 && newNum < 20) {
    ending = "th";
  } else if (finalDigit === 0 || finalDigit > 3) {
    ending = "th";
  }
  switch (finalDigit) {
    case 1:
      ending = "st";
      break;
    case 2:
      ending = "nd";
      break;
    case 3:
      ending = "rd";
      break;
  }

  console.log(newNum + ending);
}

let newNum = century(2000);
getEnding(newNum);
newNum = century(2001);
getEnding(newNum);
newNum = century(1965);
getEnding(newNum);
newNum = century(256);
getEnding(newNum);
newNum = century(5);
getEnding(newNum);
newNum = century(10103);
getEnding(newNum);
newNum = century(1052);
getEnding(newNum);
newNum = century(1127);
getEnding(newNum);
newNum = century(11201);
getEnding(newNum);