function multisum(number) {
  let UnsortedArray = [];

  for (let i = 1; i <= number; i++) {
    UnsortedArray.push(i);
  }

  let SortedArray = UnsortedArray.filter(num => (num % 3 === 0) || (num % 5 === 0));
  return SortedArray.reduce((acc, num) => acc + num);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168