// Write a function that takes a positive integer, n, as an argument
// and logs a right triangle whose sides each have n stars.

// The hypotenuse of the triangle (the diagonal side in the images below)
// should have one end at the lower-left of the triangle,
// and the other end at the upper-right.

// input: 1 positive integer as argument
// output triangle shape

//mental model:
/*
function takes one integer argument which serves as magic num.
Setup counter to value of argument and decrement while greater than 0.

setup an array for each count with the length of our argument.
fill in current value of counter - 1 with empty strings and fill
in the rest up to the arguments value with "*".

Join each array to a string and print to the console.
*/

//D&A:

/*
FUNCTION (num)
  counter = num
  let arr = []
  while (counter > 0) {
    arr[counter] += "*"
    console.log(arr.join(" "))

    counter -= 1;
  }

*/
/* My solution

function triangle(num) {
  let counter = num;
  let starCont = 1;
  let arr = [];

  while (counter > 0) {
    arr.push(" ");
    counter -= 1;
  }
  counter = num;

  while (counter >= 1) {
    arr[arr.length - starCont] = "*";
    console.log(arr.join(""));

    starCont += 1;
    counter -= 1;
  }
}

triangle(5);
triangle(9);
*/

// LS solution

function triangle(height) {
  let spaces = height - 1;
  let stars = 1;

  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}

triangle(5);
triangle(9);