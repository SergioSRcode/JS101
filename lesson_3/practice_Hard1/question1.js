// will the following functions return the same result?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());


// 1) returns key-value pair
// 2) returns undefined

