/*
VAR, LET AND CONST

JavaScript is a language that changes rapidly, and because it's been around for 20+ years, that means there are a lot of old ways of writing JavaScript. 
The "old ways" should generally be avoided, but it's important to understand them because you'll come across old code and need to understand it.

The var keyword is one such piece of "legacy code". var is similar to let and const in that it allows us to define a new variable. 
Like let, var creates "mutable" or "changeable" variable. However, unlike let, var is less safe because it does some strange things with scope.

Basically, var works as you would expect within function scopes, but not within block scopes. An "if" statement is an example of a block scope.

function printX(shouldSet) {
  if (shouldSet) {
    var x = 2
  }
  console.log(x);
  // Prints: 2
}
printX(true)

function printX(shouldSet) {
  if (shouldSet) {
    let x = 2
  }
  console.log(x);
  // ReferenceError: x is not defined
}
printX(true)

The let behavior makes much more sense because it treats block scope the same as function scope, which is what almost every other programming language does as well.

Always use let and const, never var.
*/

// Assignment
// Fix the scoping bug and simplify the getIsPowerUser function. 
// It should return true if user has submitted more than 10 reviews to MovieStarz or false otherwise.

// Solution
function getIsPowerUser(numReviews) {
  const isPowerUser = numReviews > 10;
  return isPowerUser;
}

function test(numReviews) {
  const isPowerUser = getIsPowerUser(numReviews);
  console.log(
    `Number of reviews: ${numReviews}, is power user: ${isPowerUser}`
  );
}

// Tests
test(100);
test(50);
test(10);
test(5);
test(2);
