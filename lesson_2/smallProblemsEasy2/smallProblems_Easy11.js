// Input: one string
// Output: middle character(s) of string

// Requirement/Rules
// pre) find middle character of string

// 1) assume input is always a non-empty string
// 2) if the strings length is even, return the two middle characters
// 3) if sting length is odd, return the middle character
// 4) an empty character " " counts as character
// 5) if there is only one character, return that character

// mental model:
/*
function takes one non-empty string argument. If the string has
an odd length, it returns the middle character while if it is even, it
returns the two middle characters.
*/

// D&A
/*
FUNCTION (string)
  if string length = 1
    return string;
  else if string length = odd
    return string[Math.floor(string.length / 2)]
  else if string length = even
    return string[string.length / 2] + string[string.length / 2 + 1];
*/

function centerOf(string) {
  if (string.length === 1) {
    return string;
  } else if (string.length % 2 === 1) {
    return string[Math.floor(string.length / 2)];
  } else if (string.length % 2 === 0) {
    return string[(string.length / 2) - 1] + string[string.length / 2];
  }
  return 'invalid input';
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
console.log(centerOf('Turbo'));             // "r"