
/*

write out pseudocode (both casual and formal) that does the following:

a method that takes an array of integers, and returns a new array with every other element from the original array, 
starting with the first element. For instance: everyOther([1,4,7,2,5]); // => [1,7,5]

*/

/* pseudocode casual problem 3:

given an array of integers (everyOther)

- declare function that takes an array as argument
- implement a method to iterate over the array
- return new array with every other element from original array starting with the first element (index 0).


pseudocode formal problem 3:

START

SET everyOther = function taking the array as an argument
  SET newArr = empty array
  SET iterator = 0

  WHILE iterator < length of the array
    IF iterator % 2 === 0
      newArr.push(current element)

  
  READ newArr

PRINT everyOther function invocation

END

*/

/* SOLUTION 1

function everyOther(arr) {
  const NEW_ARR = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      NEW_ARR.push(arr[i]);
    }
  }
  return NEW_ARR;
}

console.log(everyOther([1,4,7,2,5])); // => [1,7,5]
*/

// SOLUTION 2: less code

function everyOther(arr) {
  return arr.filter((num, i) => i % 2 === 0);
}

console.log(everyOther([1,4,7,2,5])); // => [1,7,5]