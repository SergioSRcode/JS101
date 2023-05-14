// Write a function that takes one argument, a positive integer,
// and returns a string of alternating '1's and '0's,
// always starting with a '1'.
// The length of the string should match the given integer.

// input: 1 number
// output: string with lenght === size of number
//         returned string alternates between 1 and 0.

function stringy(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
      arr.push(1);
    } else {
      arr.push(0);
    }
  }
  let result = arr.join("");
  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"