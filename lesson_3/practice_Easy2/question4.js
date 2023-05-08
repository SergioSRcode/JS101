// Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

// variant 1:

// let fullPhrase = "Four score and " + famousWords;
// console.log(fullPhrase);

// variant 2:

let partOfFamousWords = "Four score and ";
console.log(partOfFamousWords.concat(famousWords));
