/*
FUNCTION ORDERING

Like most other programming languages, as long as the function is defined somewhere in the code, it can be called even before the definition.

console.log(getLabel(3))
// prints 'awful'

function getLabel(numStars) {
  if (numStars > 7) {
    return 'great'
  } else if (numStars > 3) {
    return 'okay'
  } else {
    return 'awful'
  }
}

The way to think about how it works is the JavaScript interpreter reads all the code first (including function definitions). 
Then goes back and starts executing the code from the beginning.
*/

// Question 01

// Functions need to be defined before they are called

// True
// False

// Answer = True

// Question 02

// The JavaScript interpreter executes code from start to finish without looking ahead

// True
// False

// Answer = False
