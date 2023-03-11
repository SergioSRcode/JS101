// function takes one number as argument
// is number evenly divisible by 4? = true
// unless is divisible by 100 = false
// unless is divisible by 400 = true

// if year < 1752 && divisible by 4 = true

// given input greater than 0

function isLeapYear(year) {
  let divisibleBy4 = year % 4 === 0;
  let divisibleBy100 = year % 100 === 0;
  let divisibleBy400 = year % 400 === 0;
  let yearBefore1752 = year < 1752;

  if (yearBefore1752 && divisibleBy4) {
    return true;
  } else if (divisibleBy400 && divisibleBy100 && divisibleBy4) {
    return true;
  } else if (divisibleBy100 && divisibleBy4) {
    return false;
  } else if (divisibleBy4) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true