// input: String argument
// output: new string with douplicate chars as single char

// requ & rules
/*
1) consecutive characters that appear 2 or more times
2) empty string returns empty string
3) Argument is always a string
*/

// mental model
/*
Function takes one string argument and checks
whether that argument contains consecutive duplicate
characters (2 or more) and reduces those to only one
respective character and returns the new string.
*/

// D&A
/*
FUNCTION (string)
  new arr = string
  new arr2 = []
  new str = "";
  arr.ForEach(element)
    => IF !arr2.includes(element)
      => arr2.push(element);
  return new str = arr2;
*/


function crunch(string) {
  let newStr = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      newStr += string[i];
    }
  }
  return newStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""