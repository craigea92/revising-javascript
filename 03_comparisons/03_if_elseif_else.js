/*
IF, ELSE IF, ELSE

There are a few things to note about if statements:

The condition must be inside parentheses
The body should be within brackets

if (height > 100) {
  console.log("you're tall!")
} else if (height > 60) {
  console.log("you're average height")
} else if (height > 50) {
  console.log("you could be taller")
} else {
  console.log("you're short")
}
*/

// Assignment
// Write two if/else blocks - one for Bobby and one for Jill.
// If Bobby is 18 or older, print Bobby is old enough, otherwise print Bobby is not old enough. Do the same for "Jill".

// Solution
const bobbyAge = 17;
const jillAge = 19;

if (bobbyAge >= 18) {
  console.log("Bobby is old enough");
} else {
  console.log("Bobby is not old enough");
}

if (jillAge >= 18) {
  console.log("Jill is old enough");
} else {
  console.log("Jill is not old enough");
}
