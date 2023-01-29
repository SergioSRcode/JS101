// Write a function that determines the index of the 3rd occurrence of a given character in a string. For instance, 
// if the given character is 'x' and the string is 'axbxcdxex', 
// the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.

/* pseudocode casual problem 4:

# given a string containing one character at least 3 times. 
# e.g. if given char is "x" and string is "axbxcdxex" => return 6

- function takes one argument (string) 
- test whether given char in included at least 3 times in string
- if true, return the index of 3 instance of the char within the string
- else, return null


// pseudocode formal problem 3:

# given a string containing one character at least 3 times. 
# e.g. if given char is "x" and string is "axbxcdxex" => return 6

START

SET indexOf3rdInstance = function that takes one string as an argument.
  SET instanceCounter = 0
  SET iterator = 0
  
  WHILE iterator < string.length
    iterator += 1
    
    IF instanceCounter === 3
      return i;

    IF string[i] === "x"
      instanceCounter += 1

  IF instanceCounter < 3
    return null

PRINT function invocation

END

*/



function indexOf3rdInstance(str) {
  let instanceCounter = 0;

  for (let i = 0; i < str.length; i++) {
      
  if (instanceCounter === 3) {
    return i - 1;
    
  } else if (str[i] === "a") {
      instanceCounter += 1;
    }
  }

  if (instanceCounter < 3) {
    return null;
  } 
}

console.log(indexOf3rdInstance("ccaaaxbxcdxex"));
