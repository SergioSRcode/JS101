// starting from given string, return a new string that swaps
// the case of all letters.

// input: one string argument
// output: new string with case-swapped letters of first str.

// R&R
/*
1) argument is always a string.
2) argument doesn't entail symbols or numbers (only letters);
3) capital letters > lower case & vice-versa
4) return new string;
*/

// mental model:
/*
Function takes one string argument and creates a new string
consisting of all the letters of argument but case-inverted.
Returns new string.
*/

// D&A:
/*
FUNCTION (str)
  let invertedDescription = "";
  LOOP xlength of str.
    if (str[i] === str[i].toUpperCase())
      invertedDescription += str[i].toLowerCase();
    else {
      invertedDescription += str[i].toUpperCase();
    }
  return invertedDescription;
*/

// my solution

let munstersDescription = "The Munsters are creepy and spooky.";

function invertString(str) {
  let invertedString = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      invertedString += str[i].toUpperCase();
    } else {
      invertedString += str[i].toLowerCase();
    }
  }
  return invertedString;
}

console.log(invertString(munstersDescription));

// LS solution
/*
console.log(munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(""));
*/