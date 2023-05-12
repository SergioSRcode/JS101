// The following function unnecessarily uses two return statements
// to return boolean values. Can you rewrite this function so it only
// has one return statement and does not explicitly use either true or false?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// Try to come up with at least two different solutions.

// variant 1

// function isColorValid(color) {
//   return color === "blue" || color === "green";
// }

// variant 2

function isColorValid(color) {
  return ["blue", "green"].includes(color);
}

console.log(isColorValid("blue"));
console.log(isColorValid("green"));
console.log(isColorValid("red"));
console.log(isColorValid("white"));

// LS variant 1

const isColorValid = color => color === "blue" || color === "green";

// LS variant 2

const isColorValid = color => ["blue", "green"].includes(color);