// Grade Book

/*
Write a function that determines the mean (average) of the
 three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

*/

// input: 3 number arguemnts
// output: grading letter corresponding to average score

// R&R
/*
pre) Values are all between 0 and 100
pre) negatives or nums greater than 100 are not checked.
1) determine the average score of 3
2) return letter according to average score
*/

// mental model
/*
Function takes three number arguments and gets the
average of those. Then determines and returns the corresponding score.
*/

//D&A
/*
FUNCTION (num1, num2, num3)
  average = (num1 + num2 + num3) / 3;
  if average <= 0
    return "F"
    ...

*/

function getGrade(grade1, grade2, grade3) {
  const AVERAGE_GRADE = (grade1 + grade2 + grade3) / 3;

  if (AVERAGE_GRADE >= 0 && AVERAGE_GRADE < 60) {
    return "F";
  } else if (AVERAGE_GRADE >= 60 && AVERAGE_GRADE < 70) {
    return "D";
  } else if (AVERAGE_GRADE >= 70 && AVERAGE_GRADE < 80) {
    return "C";
  } else if (AVERAGE_GRADE >= 80 && AVERAGE_GRADE < 90) {
    return "B";
  } else {
    return "A";
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"