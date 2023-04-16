// input: random number
// output: random number between 20 and 120 inclusive

// rules
// no edge cases to consider

// mental model
/*
Program creates one random number between 20 and 120 inclusive and
prints that number (representing the age of the person)
within a string sentence.
*/

// D&A
/*
1) create function one argument (max value of the age).
2) create a random number reaching up the the max value
  and store it in a variable.
3) while number is less than 20 or greater than 120.
4) => create a new random number.
5) print number in string text.
*/

function findAge(max) {
  let age = Math.floor(Math.random() * max);
  while (age < 20) {
    age = Math.floor(Math.random() * max);
  }
  return age;
}

function displayTeddyAge(age) {
  console.log(`Teddy is ${age} years old!`);
}

let teddyAge = findAge(120);
displayTeddyAge(teddyAge);