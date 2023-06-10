// input: one line Text
// output: same taxt in a box

//R&R
/*
1) box consists of hyphens horizontally
2) box consists of single "or"s vertically.
3) The text is vertically and horizontally padded with one space
*/

// D&A
/*
FUNCTION (string)
  let horizontalLine = "-".repeat(string.length + 2);
  let verticalLineStart = "|";
  let vertivalLineEnd = 

*/

function logInBox(str) {
  let horizontalLine = "-".repeat(str.length + 2);
  let verticalLineStart = "|";
  let verticallLineEnd = "|".padStart(str.length + 3);

  console.log(`+${horizontalLine}+`);
  console.log(`${verticalLineStart}${verticallLineEnd}`);
  console.log(`${verticalLineStart} ${str} ${verticalLineStart}`);
  console.log(`${verticalLineStart}${verticallLineEnd}`);
  console.log(`+${horizontalLine}+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('Bananas are green.');
logInBox('No, they are yellow, what are you talking about?');
logInBox('Beeeb error.');
logInBox('');
