function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }
  return false;
}

function isCorrectLength(arr) {
  if (arr.length === 4) {
    return true;
  } else {
    return false;
  }
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split("."); // => [10, 4, 5, 11]

  if (!isCorrectLength(dotSeparatedWords)) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop(); // iteration 1) => 11; 2) => 5; 3) => 4...

    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress("10.4.5.11")); // => true
console.log(isDotSeparatedIpAddress("10.4.5.25")); // => true
console.log(isDotSeparatedIpAddress("10.5.11")); // => false
console.log(isDotSeparatedIpAddress("255.4.5.11")); // => true
console.log(isDotSeparatedIpAddress("256.4.5.11")); // => false
console.log(isDotSeparatedIpAddress("10.4.5.11.34")); // => false
console.log(isDotSeparatedIpAddress("10.4.450.11")); // => false