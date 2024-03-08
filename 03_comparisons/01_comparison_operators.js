/*
COMPARISON OPERATORS

You're already familiar with these inequality operators, and they work as you would expect:

5 < 6 // evaluates to true
5 > 6 // evaluates to false
5 >= 6 // evaluates to false
5 <= 6 // evaluates to true

The equality operators however are a bit... strange. To compare two values to see if they are same or different, you use an extra = sign:

5 === 6 // evaluates to false
5 !== 6 // evaluates to true

The more common equality operators have unintuitive behavior and frankly should be avoided:

5 == 6 // evaluates to false
5 == '5' // evaluates to true

5 != 6 // evaluates to true
5 != '5' // evaluates to false

The "strict equals" (===) and "strict not equals" (!==) compare both the value AND the type. 
The "loose equals" (==) and "loose not equals" (!=) just compare the value. 
That means that with loose equals, the string '5' and the number 5 are considered "equal" - which is basically just something that you shouldn't be comparing in good code.

This is a fairly unique quirk of the JavaScript language.
*/

// Assignment
// Change the operators (and only the operators) in the code so that each statement evaluates to true if it doesn't already.

// Solution
console.log(5 != 6)
console.log(5 !== 6)
console.log(5 == '5')
console.log(6 >= 6)