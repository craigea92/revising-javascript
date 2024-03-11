/*
TERNARY OPERATORS

Sometimes using 3-5 lines of code to write an if/else block is overkill. The ternary operator provides a simpler alternative in some scenarios.

const price = isMember ? '$2.00' : '$10.00'

It's possible to read it like plain english:

If isMember is true then evaluate to $2.00, otherwise evaluate to $10.00.

let price
if (isMember) {
  price = '$2.00'
} else {
  price = '$10.00'
}

WHY IS IT CALLED "TERNARY"

Ternary's latin root means "3", and it's the only JavaScript operator that takes three operands.

A condition followed by a question mark (?)
An expression to execute if the condition is truthy followed by a colon (:)
The expression to execute if the condition is falsy.
*/

// Assignment
// Create a variable called message and use a ternary operator to set the value of that variable to either
// 'Bobby is older' or 'Jill is older'

// Solution
const bobbyAge = 17;
const jillAge = 19;

const message = bobbyAge > jillAge ? "Bobby is older" : "Jill is older";

console.log(message);
