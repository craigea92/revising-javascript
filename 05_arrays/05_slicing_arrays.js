/*
SLICING ARRAYS

JavaScript makes it easy to slice and dice arrays to work only with the section you care about.

The syntax is as follows: slice(fromIndex, untilIndex).

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))
// ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4))
// ["camel", "duck"]

console.log(animals.slice(1, 5))
// ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2))
// ["duck", "elephant"]

console.log(animals.slice(2, -1))
// ["camel", "duck"]

console.log(animals.slice())
// ["ant", "bison", "camel", "duck", "elephant"]

*/

// Assignment
// First, print a slice of the movies array that starts with the third item in the array and goes to the end.
// Next, print a slice of the movies array that starts at the first item and ends with the third to last item in the array (included).
// Use logArray() for printing the arrays.

// Solution
const movies = [
  'oh brother where art thou',
  'oceans eleven',
  'fight club',
  'the island',
  'shutter island',
  'the magnificent seven'
]

function logArray(arr) {
  for (const a of arr) {
    console.log(` - ${a}`)
  }
  console.log('---')
}

console.log(movies.slice(2))
console.log(movies.slice(0, -2))
