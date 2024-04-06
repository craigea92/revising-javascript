/*
ARRAY OPERATIONS - CONCATENATE

There are a couple of ways to concatenate two arrays (smushing them together) in JavaScript.

THE .CONCAT() METHOD

let nums = [1, 2, 3]
nums = nums.concat([4, 5, 6])
console.log(nums)
// Prints: [1, 2, 3, 4, 5, 6]

THE SPREAD SYNTAX

const nums = [1, 2, 3]
const newNums = [...nums, 4, 5, 6]
console.log(newNums)
// Prints: [1, 2, 3, 4, 5, 6]

This comes down to personal preference, but I prefer the spread syntax. 
It's newer, but I also like it because, in my opinion, the .concat method can be confusing. 
I would expect the .concat method to mutate the array in place, but instead, it returns a new array.

const nums = [1, 2, 3]
nums.concat([4, 5, 6])
console.log(nums)
// Prints: [1, 2, 3]

*/

// Assignment
// Complete the uploadNewMovies function. 
// It accepts the oldMovies array and a newMovies array, which are the new movies we need to add to the system.
// It should return a new array containing all the movies from both arrays. First the old, then the new.

// Solution
const uploadNewMovies = (oldMovies, newMovies) => {
  const allMovies = [...oldMovies, ...newMovies]
  return allMovies
}

const oldMovies = [ 'Once Upon a Time', 'Django Unchained', 'The Hateful 8' ]
const newMovies = [ 'Inglorious Basterds', 'Dune' ]
const allMovies = uploadNewMovies(oldMovies, newMovies)

console.log('All movies database:')
logArray(allMovies)


function logArray(arr) {
  for (const a of arr) {
    console.log(` - ${a}`)
  }
  console.log('---')
}
