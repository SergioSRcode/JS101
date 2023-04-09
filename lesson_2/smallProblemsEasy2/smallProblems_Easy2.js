// input: username or username!
// output: greeting message with respective message to input

// requirements an rules:
/*
1) check for number characters upon input
2) allow "!" on input
3) special message if user includes "!" in their input else normal greeting
4) looping when other input
5) no need to loop whole program
*/

// metal model:
/*
receive a name and check whether name ends with "!". If true,
the user gets greeted in caps, otherwise normal greeting.
Should user give e.g. a number input, ask him again for his name.
*/

// D&A:
/*
pre) give program rl-sync requirements.

1) prompt the user for their name => get username
2) store name in variable (userName)
3) check for input validation
4) while input invalid => ask again
5) if input with "!" => greeting in caps
6) else if input without "!" => normal greeting.
*/

const RL_SYNC = require('readline-sync');

// helper function

function prompt(message) {
  console.log(`=> ${message}`);
}

// input validation

function inputIsNumber(userName) {
  let userNameIsNumber = userName.match('^[0-9]+$');
  return userNameIsNumber;
}

function getUserName() {
  prompt('What is your name? ');
  let userName = RL_SYNC.question();

  while (inputIsNumber(userName)) {
    prompt('... try again, you can do it!');
    userName = RL_SYNC.question();
  }

  if (userName[userName.length - 1] === "!") {
    userName = userName.slice(0, -1);
    prompt(`HELLO ${userName.toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    userName = userName[0].toUpperCase() + userName.slice(1);
    prompt(`Hello ${userName}.`);
  }
}

// program start

getUserName();