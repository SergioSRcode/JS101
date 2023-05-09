// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:

// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Create a new array that contains all of the above values,
// but in an un-nested format:
// => [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]


// using concat:

// let moreFlintstones = [].concat(...flintstones);
// console.log(moreFlintstones);

// using reduce:

// let moreFlintstones = flintstones.reduce((acc, element) =>
//   acc.concat(element), []);
// console.log(moreFlintstones);

// using forEach:

let moreFlintstones = [];

flintstones.forEach(element => {
  moreFlintstones = moreFlintstones.concat(element);
});
console.log(moreFlintstones);