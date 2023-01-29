
/*

write out pseudocode (both casual and formal) that does the following:

1) a function that returns the sum of two numbers
2) a function that takes an array of strings, and returns a string that is all those strings concatenated together
3) a method that takes an array of integers, and returns a new array with every other element from the original array, 
starting with the first element. For instance: everyOther([1,4,7,2,5]); // => [1,7,5]

*/

/* pseudocode casual problem 1:

# a function that returns the sum of two numbers

- function takes two numbers as arguments.
- declare variable sum and initialize it to the sum of both arguments.
- return sum to the calling function.


pseudocode formal problem 1:

START

# a function that returns the sum of two numbers

SET sumOf = function declaration taking two arguments (number1 and number2)
SET sum = sum of number1 + number2

READ sum

PRINT sumOf function invocation 

END

*/

function sumOf(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

console.log(sumOf(5, 12));

