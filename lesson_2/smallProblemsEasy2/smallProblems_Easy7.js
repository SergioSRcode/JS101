// input: two arguments
// output: true || false

// requirements:
/*
function takes two arguments
returns true ONLY if one of these arguments is truthy
if both are truthy => return false
=> create exclusive or
return exclusively boolean values.
*/

// mental model:
/*
Create a function that takes two arguments of which only one should be
a truthy value for the function to return true. If both arguments are
truthy or falsy, return false.
*/

// D&A
/*
1) declare function xor with two args
2) if arg1 and arg2 === true => return false
3) if arg1 or arg2 === true => return true
4) else return false;
*/

function xor(arg1, arg2) {
  if (arg1 && arg2) {
    return false;
  } else if (arg1 || arg2) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true