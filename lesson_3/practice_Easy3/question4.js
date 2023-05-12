// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// Try to answer without running the code.

// guess
/*
1) arr1 is declared and initialized to an array containing two objects and 3nums
2) arr2 is declared and initialized to all values of the arr1 array without
mutating arr1.
3) arr2 reassigns the value of the property
of the first element (object) of it's array to the number 42,
mutating the object.
4) loggs arr1 to the console

// guess
since we are directly changing the value of the first object, it is
mutated. As both arrays contain pointers to the exact same object,
arr1 is mutated as well, logging the first object with the key-value pairs:
first: 42, while leaving the rest of the array as it was initialized.
*/