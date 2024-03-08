/* 
JAVASCRIPT STRINGS

In JavaScript, a string can be written using either single quotes, for example: 'Hello', or double quotes, such as "Hello".

It's important to have styling conventions so that all the code in a project looks consistent, making it easier to read and contribute to.

INDEXING INTO STRINGS

Square brackets are used to access individual characters inside a string. 
The chars are numbered starting with 0, and running up to length-1.

const greeting = 'Hello'
greeting[0]    // 'H'
greeting[1]    // 'e'
greeting[2]    // 'l'
greeting[3]    // 'l'
greeting[4]    // 'o'
// you can also get the last char at length-1
greeting[greeting.length - 1] // 'o'

The .length property on a JavaScript string returns its length.
*/

// Assignment
// Print the first character
// Print the last character
// Print the entire string

// Solution
const email = 'johndoe@gmail.com'

console.log(email[0])
console.log(email[email.length -1])
console.log(email)

