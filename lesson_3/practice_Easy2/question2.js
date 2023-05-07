/*
The Array.prototype.reverse method reverses the order of elements
in an array, and Array.prototype.sort can rearrange the elements
in a variety of ways, including descending.

Both of these methods mutate the original array as shown below.
Write two distinct ways of reversing the array without mutating the original arr
Use reverse for the first solution, and sort for the second.
*/

// input: array of numbers
// output: NEW array of numbers reversed; NEW arr of nums sorted.

//R&R:
/*
1) array contains only numbers
2) reverse the order of the numbers within the array
3) do it twice with "reverse" and with "sort"

*/
// Variant 1
let numbers = [1, 2, 3, 4, 5];

function getReversedNums1(arr) {
  let newArr = arr.slice().reverse();
  return newArr;
}

let reversedNums1 = getReversedNums1(numbers);
console.log(reversedNums1);
console.log(numbers);

// Variant 2

function getReversedNums2(arr) {
  let newArr = arr.map(num => num).sort((num1, num2) => num2 - num1);
  return newArr;
}

let reversedNums2 = getReversedNums2(numbers);
console.log(reversedNums2);
console.log(numbers);

// LS Variant

let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]