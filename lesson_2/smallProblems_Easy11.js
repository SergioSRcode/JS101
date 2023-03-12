// Objective: return UTF-16 string value of string argument
// retrieve the UTF-16 string value of every character in given string
// get sum of retrieved values.

// start
/*
FUNCTION (string)
  ARRAY = [];

  LOOP (counter 0; while counter < string.length; counter += 1)
    ARRAY.push(string.charCodeAt(counter))

  RESULT = ARRAY.reduce((acc, num) => acc + num)
  RETURN RESULT.

*/

function utf16Value(string) {
  let utf16OfChars = [];

  for (let i = 0; i < string.length; i++) {
    utf16OfChars.push(string.charCodeAt(i));
  }
  let sumOfChars = utf16OfChars.reduce((acc, num) => acc + num, 0);
  return sumOfChars;
}

console.log(utf16Value("Four score"));
console.log(utf16Value("Launch School"));
console.log(utf16Value("a"));
console.log(utf16Value(""));

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811

