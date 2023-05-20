// write a program that outputs The Flintstones Rock! 10 times,
//with each line indented 1 space to the right of the line above it.

// input: one string argument
// output: same string argument indented by 1 space relative to the last
//         iteration x 10.

//R&R
/*
1) Argument is always a string
2) The string doesn't have any indentation at index 0
3) with each iteration, the string is indented by one space for
a total of 10 iterations.
*/

// A&D:
/*
FUNCTION (str)
  LOOP x10
    print str;
    str = " " + str;
*/

// My Solution

function nerdArtwork(str) {
  for (let i = 0; i < 10; i++) {
    console.log(str);
    str = " " + str;
  }
}

nerdArtwork("The Flintstones Rock!");

//LS ingenius Solution
/*
for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}
*/