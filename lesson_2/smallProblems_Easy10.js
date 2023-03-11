// compute sum of all numbers between 1 and an integer passed as argument
// the numbers inbetween must be multiples of 3 or 5

// given integer greater than 1

// start

/*
function (number)
  ARRAY = all numbers between 1 and given number (inklusive)
  loop (counter = 1; while counter < number; counter += 1)
    ARRAY.push(counter);

  SORTED_ARRAY = ARRAY.filter(num => num % 3 === 0 || num % 5 === 0)
  Return SORTED_ARRAY.reduce(num => num + num);

*/

function multisum(number) {
  let unsortedArray = [];

  for (let i = 1; i <= number; i++) {
    unsortedArray.push(i);
  }
  // eslint-disable-next-line max-len
  let sortedArray = unsortedArray.filter(num => (num % 3 === 0) || (num % 5 === 0));
  return sortedArray.reduce((acc, num) => acc + num);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
