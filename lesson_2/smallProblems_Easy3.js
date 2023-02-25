//1. count from 1 - 99
//2. filter out even numbers
//3. print out even nums on separate line

function evenNumbers() {
  for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

evenNumbers();