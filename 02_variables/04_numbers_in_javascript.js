/*
NUMBERS IN JS

In JavaScript all numbers are just a number type.
Numbers aren't surrounded by quotes when created, but they can have decimals and negative signs.

let x = 5

let x = 5.2

let x = -5
*/

// Assignment
// Create a mcuTotalStars variable that contains the sum of the stars of all the movies listed
// Create a mcuAverageStars variable that contains the average star count of the 5 movies.

// Solution
const ironManStars = 4
const thorStars = 5
const captainAmericaStars = 3
const avengerStars = 1
const hulkStars = 2

let mcuTotalStars = ironManStars + thorStars + captainAmericaStars + avengerStars + hulkStars
let mcuAverageStars = mcuTotalStars / 5

console.log(mcuTotalStars)
console.log(mcuAverageStars)
