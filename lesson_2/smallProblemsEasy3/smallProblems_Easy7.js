// Double Doubles
/*
A double number is an even-length number whose left-side digits are
exactly the same as its right-side digits.
For example, 44, 3333, 103103, and 7676 are all double numbers,
whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as
an argument multiplied by two, unless the argument is a double number;
otherwise, return the double number as-is.
*/

// input: 1 number
// output: num multiplied by 2; unless double num => as-is.

// R&R
/*
1) only one argument is passed
2) the argument is always a number
3) if argument is a double number => return as-is.
4) if argument is not a double number => return num x2
*/

// mental model
/*
Function takes one number argument and checks whether
the passed number is a double number. If so, return as-is, otherwise
return the number multiplied by 2.
*/

//D&A
/*
FUNCTION (num)
  extract half the integers of number
  check if first half === second half
  if true => return as-is

  else return num x2
*/

function twice(num) {
  num = String(num);
  let firstHalf = num.slice(0, num.length / 2);
  let secondHalf = num.slice(num.length / 2);

  return firstHalf === secondHalf ? Number(num) : Number(num * 2);
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676