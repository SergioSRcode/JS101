//1. count from 1 - 99
//2. filter out odd numbers
//3. print out odd nums on separate line

function oddNumbers() {
  for (let i = 1; i < 100; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

oddNumbers();


//LS solution
/*
for (let number = 1; number < 100; number += 2) {
  console.log(number);
}
*/