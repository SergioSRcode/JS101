//Write a function that takes two arrays of numbers and returns the result of merging the arrays.
// The elements of the first array should become the elements at the even indexes of the returned array,
// while the elements of the second array should become the elements at the odd indexes.
// e.g. merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

// You may assume that both array arguments have the same number of elements.


/* pseudocode casual problem 5:

# given two arrays of numbers
GOAL => merging the arrays, while numbers from arr1 gets assigned to odd indexes and from arr2 to even indexes.
=>      merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

- function that takes two arrays as arguments.
- create new empty array to store the elements one by one.
- looping over the arrays (2 loops)
(since both arrays have the same length, one loop would suffice but upon manipulation of an array, may cause errors)
- add the current element of the array's iteration to the empty array, starting with the element of arr1 then arr2.
– return new array
- log function invocation to the console to confirm if it works.


pseudocode formal problem 5:

# given two arrays of numbers

GOAL => merging the arrays, while numbers from arr1 gets assigned to odd indexes and from arr2 to even indexes.
=>      merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

START

SET merge = function taking two array arguments
  SET mergedArray = empty
  SET counter1 = 0
  SET counter2 = 0

  WHILE counter1 < array1.length
    mergedArray push array1[counter1]
    counter1 += 1
    WHILE counter2 < array2.length
      mergedArray push array2[counter2]
      counter2 += 1

  READ mergedArray

PRINT merge function invocation

END

*/


// can lead to a lot of errors if any array's length is greater than the other's
function merge(arr1, arr2) {
  const MERGED_ARRAY = [];

  for (let i = 0; i < arr1.length; i++) {
    MERGED_ARRAY.push(arr1[i]);
    MERGED_ARRAY.push(arr2[i]);
  }
  return MERGED_ARRAY;
}

console.log(merge([1, 2, 3], [4, 5, 6]));
