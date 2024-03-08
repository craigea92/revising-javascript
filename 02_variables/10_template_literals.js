/**
TEMPLATE LITERALS IN JAVASCRIPT

In JavaScript, you can use a template literal to interpolate dynamic values into a string template. 

const shadeOfRed = 101
console.log(`the shade is ${shadeOfRed}`)
// prints: "the shade is 101"

Template literals must start and end with a backtick, and anything inside of the dollar-sign bracket enclosure is automatically cast to a string.

WHAT DOES "CAST" MEAN IN PROGRAMMING?
To "cast" means to convert from one type to another, like converting from a number to a string.

WHAT DOES "INTERPOLATE" MEAN?
To "interpolate" means to insert something into something else. In this case, template literals allow us to interpolate dynamic values into a string template.
*/

// Assignment
// Print The movie won X stars! to the console, where X is the starRating.

// Solution
const starRating = 10

console.log(`The movie won ${starRating} stars!`)