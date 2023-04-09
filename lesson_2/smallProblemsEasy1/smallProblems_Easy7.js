// function taking two strings as arguments
// determine length of both strings
// concatenate shorter str + longer str + shorter str
// return value

function shortLongShort(str1, str2) {
  let lengthOfStr1 = str1.length;
  let lengthOfStr2 = str2.length;

  if (lengthOfStr1 > lengthOfStr2) {
    return str2 + str1 + str2;
  } else if (lengthOfStr2 > lengthOfStr1) {
    return str1 + str2 + str1;
  } else {
    return "strings need to have different length";
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"