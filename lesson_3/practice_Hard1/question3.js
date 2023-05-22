// What will be the output of the two code snippets?
// A)

function messWithVars(one, two, three) {
  one = two; // ["two"]
  two = three; // ["three"]
  three = one; // ["two"]
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // => ["one"]
console.log(`two is: ${two}`); // => ["two"]
console.log(`three is: ${three}`); // => ["three"]

// B)

function messWithVars(one, two, three) {
  one = ["two"]; // no mutating => reassignment
  two = ["three"]; // no mutating => reassignment
  three = ["one"]; // no mutating => reassignment
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // => ["one"]
console.log(`two is: ${two}`); // => ["two"]
console.log(`three is: ${three}`); // => ["three"]

// C)

function messWithVars(one, two, three) {
  one.splice(0, 1, "two"); // mutating => one = ["two"]
  two.splice(0, 1, "three"); // mutating => two = ["three"]
  three.splice(0, 1, "one"); // mutating => three = ["one"]
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // => ["two"]
console.log(`two is: ${two}`); // => ["three"]
console.log(`three is: ${three}`); // => ["one"]
