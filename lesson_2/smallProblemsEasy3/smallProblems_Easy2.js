// Write a function that will take a short line of text,
// and write it to the console log within a box.

// input: short line of text (string)
// output: short line in a box

// R&R
/*
1) box must always be bigger than content
2) one space before and after the content
3) Edges are maked by "+" while horizontals are "-" and verticals "|"
*/

// D&A
/*
FUNCTION (string)
  arr = empty
  arrOfString
  lengthOfStr = string.length

  arrOfString.forEach(element => arr.push(-));
  strOfArr = arr.join(" ");

  emptyline;
  emptyline.charAt(lengthOfStr) = "|"

  realEmptyline = "|" + emptyline;


  console.log(
    `+-${strOfArr}-+
    ${realEmptyLine}
    | ${string} |
    ${realEmptyLine}
    +-${strOfArr}-+`);
*/

function logInBox(str) {
  let horizontalDivider = `+${"-".repeat(str.length + 2)}+`;
  let emptyLine = `|${" ".repeat(str.length + 2)}|`;

  console.log(
    `${horizontalDivider}
${emptyLine}
| ${str} |
${emptyLine}
${horizontalDivider}
    `);
}


logInBox('To boldly go where no one has gone before.');