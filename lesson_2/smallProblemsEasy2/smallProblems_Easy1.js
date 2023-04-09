// input: array with 2 or more elements (first + last name)
// and object with 2 keys "title" and "occupation"

// output: greeting person's full name + title

//requirements:

// name should be combined with a space seperating the array elements.

// greeting => actual greeting message!


// rules:
// assuming input is characters only and no blank spaces.
// not only title but profession to be stated as well.


// mental model:
/*
receive a list with the first and last name as well as an object
containing the person's title and occupation. Combine the name elements
with a space inbetween.
Greet the person and name their title and profession.
*/

// A&D:
/*
1) create a function called "greetings" that defines two parameters, 
  1 = array (arrOfName), 2 = object (personDetails).
2) create a string of arr and seperate elements by a space.
3) assign newly created string to a variable (fullName).
4) create new variable and assign it a template literal with the greeting
message and all the required infos.
*/

function greetings(arrOfName, personDetails) {
  let fullName = arrOfName.join(" ");
  let message = `Hello, ${fullName}! Nice to have a ${personDetails.title} ${personDetails.occupation} around.`;
  return message;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.