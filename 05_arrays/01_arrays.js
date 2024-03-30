/*
ARRAYS

One important thing about an array is that items in an array are not required to be of the same type.

const numbers = [1, 2, 3, 4, 5]
const strings = ['banana', 'apple', 'pear']
const random = ['banana', 1, 'apple', 2, 'pear']

INDEX INTO A LIST

Just like we already saw with strings, you can get items from an array using square brackets.

const strings = ['banana', 'apple', 'pear']
console.log(strings[0])
// Prints: 'banana'

PUSH TO A LIST
In JavaScript, we .push() items to an array.

const drinks = []
drinks.push('lemonade')
console.log(drinks)
// Prints: ['lemonade']

drinks.push('root beer')
console.log(drinks)
// Prints: ['lemonade', 'root beer']
*/

// Assignment
// Create an empty array called 'movies'
// Push the dark knight to your array of movies
// Print the array using logArray()
// Push the notebook to your array of movies
// Print the array using logArray()
// Print the item at index 0 of your movies array

// Solution
let movies = [];

movies.push('The Dark Knight');
logArray(movies);

movies.push('The Notebook');
logArray(movies);

console.log(movies[0])

function logArray(arr) {
  console.log("logging array...");
  for (const a of arr) {
    console.log(` - ${a}`);
  }
  console.log("---");
}