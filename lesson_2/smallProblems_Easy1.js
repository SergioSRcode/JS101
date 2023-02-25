function isOdd(num) {
  if (num % 2 === 1 || num % 2 === -1) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/* LS solution

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

*/