// Write three different ways to remove all of the elements
// from the following array:

let numbers = [1, 2, 3, 4];

// variant 1

// numbers.splice(0, numbers.length);
// console.log(numbers);

// variant 2

// numbers.length = 0;
// console.log(numbers);

// variant 3

// while (numbers.length) {
//   numbers.pop();
// }
// console.log(numbers);

// variant 4

while (numbers.length) {
  numbers.shift();
}
console.log(numbers);