// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// Try to answer without running the code.

// Guess
/*
1) str1 is initialized to the string "hello there".
2) str2 is initialized to the current value of str1.
3) str2 is reassigned the string value "goodbye!".
4) str1 is logged to the console.

conclusion) str1 prints "hello there" to the console, as strings
are primitive data types and immutable, passing data by value, not by reference.
Hence the value of str2 at the time of initialization to the value of str1
is actually a different string in memory than the one str1 utilizes, therefore
they are completely detached although having the same value.
*/