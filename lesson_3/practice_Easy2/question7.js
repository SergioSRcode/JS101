// Consider the following object:
let flintstones =
  { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object
// that contains only two elements: Barney's name and Barney's number:

// Variant 1
// const onlyBarney = Object.entries(flintstones);
// console.log(onlyBarney[2]);

// LS Variant
const onlyBarney = Object.entries(flintstones).filter(entry => entry[0] === "Barney").shift();
console.log(onlyBarney);

