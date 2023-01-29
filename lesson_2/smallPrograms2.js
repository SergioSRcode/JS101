
/*

write out pseudocode (both casual and formal) that does the following:

a function that takes an array of strings, and returns a string that is all those strings concatenated together


*/

/* pseudocode casual problem 2:

Given an array of strings.

Create a function that takes an array of strings, and returns a string that is all those strings concatenated together!
- function takes one argument, an array of strings.
- declares empty variable inside the function.
- iterates over the array's elements adding them to the previously declared variable.
- returns variable

* assuming the strings should be concatenated with spaces inbetween the strings.

pseudocode formal problem 2:

START

# given an array of strings.

SET fullSentence = function taking one argument (the array)
SET concatenatedString = empty string
SET iterator = 0

WHILE iterator < length of array of strings
  IF current element === first element
    concatenatedString = concatenatedString + current element
  ELSE
    concatenatedString = concatenatedString + " " + current element of array

READ concatenatedString

PRINT fullSentence function invocation

END

*/

/* SOLUTION 1

const STRING_COLLECTION = ["Hello", "world!", "How", "are", "you", "today", "?"];

function fullSentence(arr) {
  let concatenatedString = "";

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === arr[0] || arr[i] === arr[arr.length - 1]) {
      concatenatedString += arr[i];
    } else {
      concatenatedString = concatenatedString + " " + arr[i];
    }
  }
  return concatenatedString;
}

console.log(fullSentence(STRING_COLLECTION));

*/

// SOLUTION 2: with less code
const STRING_COLLECTION = ["Hello", "world!", "How", "are", "you", "today", "?"];

function fullSentence(arr) {
  return arr.join(" ").replace(" ?", "?");
}

console.log(fullSentence(STRING_COLLECTION));






