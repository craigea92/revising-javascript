/*
FAT ARROW FUNCTIONS

Fat arrow functions, or "arrow functions" are another way to define functions in JavaScript. 
Arrow functions are newer than the function keyword, however, unlike the let/var issue, arrow functions are sometimes more appropriate, not always.

'FUNCTION' KEYWORD

const add = function(x, y) {
  return x + y
}

FAT ARROW

const add = (x, y) => {
  return x + y
}

WHAT ARE THE DIFFERENCES BETWEEN THE TWO?

Fat arrow functions are always declared as variables - usually consts, while the function keyword may or may not be a variable.
Fat arrow functions handle object scoping in a more intuitive way.
*/

// Assignment
// Convert isSuperReview to the fat arrow function syntax. Don't change its internal behavior.

// Solution
const isSuperReview = (authorAccountAge, authorReputation) => {
  if (authorAccountAge > 2) {
    return false
  }
  return authorReputation > 100
}

function isFunctionType(f) {
  return f.hasOwnProperty('prototype')
}

if (isFunctionType(isSuperReview)) {
  console.log('isSuperReview is a classic function')
} else {
  console.log('isSuperReview is a fat arrow function')
}

const isSuper = isSuperReview(50, 200)
console.log(`The review is super: ${isSuper}`)

const isSuper2 = isSuperReview(1, 200)
console.log(`The review is super: ${isSuper2}`)