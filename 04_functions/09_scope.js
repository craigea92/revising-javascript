/*
SCOPE

Scope deals with where values and functions can be accessed in your code. 
For example, you'll likely write code at some point, or see code at some point where the bug is related to a variable being "out of scope".

Some "scopes" include:

Global scope - Values in the global scope are accessible everywhere
File or module scope - Values can only be accessed from within the same code file
Function scope - Values can only be accessed within the same function
Block scope - Values can only be accessed within that { ... } codeblock

function getCar() {
  const car = 'Volvo';
  // code here can use 'car'
}

// code here can NOT use 'car'

const car = 'Volvo'
// code here can use 'car'

function getCar() {
  console.log(car);
  // code here CAN use 'car'
}

*/

// Assignment
// isMovieValid should check if the movie title's length is greater than 2 and return the result. 
// Use the movieLength function to get the length of a movie title and fix the scoping bug.

// Solution
function isMovieValid(title) {
  function movieLength(title) {
    const len = title.length;
    return len;
  }

  const len = movieLength(title);
  return len > 2;
}

function test(title) {
  const valid = isMovieValid(title);
  console.log(`'${title}' is valid: ${valid}`);
}

// Tests
test("The League of Extraordinary Gentlemen");
test("Hunt for Red October");
test("007");
test("");
test("12");
