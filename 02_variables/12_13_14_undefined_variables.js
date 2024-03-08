/*
UNDEFINED VARIABLES

Not all variables have a value, some don't even have a null value. 
In JavaScript we can declare an empty or undefined variable:

let emptyVar

The value of emptyVar in this instance is undefined until we use the assignment operator, =, to give it a value.

UNDEFINED IS NOT A SPECIFIC STRING

Note that the undefined type is not the same as a string with a value of "undefined":

let myUndefinedVar // this is an undefined variable
let myDefinedVar = 'undefined' // this is a defined string

UNDEFINED IS ALSO FALSY
Just like null, undefined is also falsy.

A NOTE ON 'UNDEFINED' VS `NULL'

Undefined literally means that the variable was never assigned a value, whereas the null value must be assigned explicitly.
If you need a "nonetype" value, assign the null value. Try to avoid explicitly assigning the undefined value. 

In short, prefer null!
*/

// Question 01

// Which is not a value in JavaScript?

// undefined
// null
// none

// Answer = none

// Question 02

// When creating a variable with a 'nonetype' value, which should you prefer?

// undefined
// null
// false

// Answer = null

// Question 03

// What does it mean for a value to be 'falsy'?

// When cast to a boolean, the value becomes 'false'
// The value changes randomly
// The value can't be trusted
// The value can't be mutated to 'true'

// Answer = When cast to a boolean, the value becomes 'false'