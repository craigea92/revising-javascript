/*
COMPARISON OPERATOR EVALUATIONS

When a comparison happens, the result of the comparison is just a boolean value, it's either true or false.

Take the following two examples:

const isBigger = 5 > 4

const isBigger = true

In both of the above cases, we're creating a Boolean variable called isBigger with a value of true.

Since 5 is greater than 4, isBigger is assigned the value of true once the 5 > 4 expression is evaluated.
*/

// Assignment
// Use the provided values and the comparison operators to calculate the following:
// encantoBetterThanFrozen
// tangledBetterThanFrozen
// toyStoryBetterThanTangled

// Solution
const frozenStars = 5
const tangledStars = 10
const toyStoryStars = 7
const encantoStars = 6

const encantoBetterThanFrozen = encantoStars > frozenStars
const tangledBetterThanFrozen = tangledStars > frozenStars
const toyStoryBetterThanTangled = toyStoryStars > tangledStars

console.log(`encantoBetterThanFrozen is a ${typeof encantoBetterThanFrozen}`)
console.log(`Encanto is better than Frozen: ${encantoBetterThanFrozen}`)

console.log(`tangledBetterThanFrozen is a ${typeof tangledBetterThanFrozen}`)
console.log(`Tangled is better than Frozen: ${tangledBetterThanFrozen}`)

console.log(`toyStoryBetterThanTangled is a ${typeof toyStoryBetterThanTangled}`)
console.log(`Toy Story is better than Tangled: ${toyStoryBetterThanTangled}`)

