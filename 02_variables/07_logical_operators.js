/*
LOGICAL OPERATORS

In JavaScript, logical operators are expressed with symbols:

&& (and)
|| (or)
! (not)

The && operator will only return TRUE if both conditions are TRUE.

The || operator returns TRUE if either of the conditions are TRUE:

The ! operator returns TRUE only if the input is FALSE.

true && true
// true

true && false
// false

true || false
// true

false || false
// false

!false
// true

!true
// false
*/

// Assignment
// In order to be a blockbuster, a movie must fulfill the following criteria:

// It's a big hit
// It is new
// It has awards or it can have a sequel
// It is not rated X
// Set the isBlockBuster using the given variables and the appropriate logical operators. Remember that you can specify an "order of operations" by using parentheses.

// Solution
const isBigHit = true
const isNew = true
const hasAwards = false
const canHaveSequel = true
const isRatedX = false

const isBlockBuster = isBigHit && isNew && (hasAwards || canHaveSequel) && !isRatedX

console.log(`The movie is a blockbuster: ${isBlockBuster}`)
