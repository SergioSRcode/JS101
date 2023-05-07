// Question 1:
/*
Given a string, return a new string that replaces every occurence of
the word "important" with "urgent".
*/

// input: string
// output: same string with "important" replaced by "urgent"

//R&R
/*
1) returned value has to be a string
2) only the word "important" should be replaced
3) if no occurence of the word "important" => return string as-is.
*/

// mental model:
/*
A function is passed a string argument and checks
whether the string contains the word "important" and
replaces every instance of it with the word "urgent".
Lastly it returns the string.
*/

//D&A:
/*
pre) given =>
let advice =
"Few things in life are as important as house training your pet dinosaur."

1) function takes "advice" as argument.
2) if string includes "important" => replace all instances by "urgent"
3) return string
*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

function urgentAdvice(advice) {
  let newAdvice = advice.replace(/important/g, "urgent");
  return newAdvice;
}

let newAdvice = urgentAdvice(advice);

console.log(newAdvice);