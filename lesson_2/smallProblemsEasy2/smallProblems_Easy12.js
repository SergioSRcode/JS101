// input: one number
// output: negative version of argument

//req and rules
/*
Goal) Return the negative version of the argument (number)

1) argument is a number
2) if argument is a negative num => return as-is
3) otherwise return negative version
*/

// mental model
/*
function takes one number argument which returns the
negative value of that number. If the argument is negative,
return as-is.
*/

// D&A
/*
FUNCTION (number)
  if number < 0
    return number
  else
    return -number
*/

// function negative(num) {
//   if (num < 0) {
//     return num;
//   } else {
//     return -num;
//   }
// }

function negative(num) {
  return num < 0 ? num : -num;
}


console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0