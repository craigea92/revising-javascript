/*
NULL VARIABLES

JavaScript has the null value, you can use null to set a "default" value.

For example, null values can be used for variables in websites while waiting for the data to load from the server.

let profilePic = null

// show a loading spinner while profilePic is null

const dataFromBackend = waitForDataFromBackend()

// once the profilePic is loaded, the picture
// can be displayed in the browser
profilePic = dataFromBackend.profilePic

NULL IS NOT A SPECIFIC STRING

Note that the null type is not the same as a string with a value of "null":

let profilePic = null // this is a null value
let profilePic = "null" // this is a string

NULL VALUES ARE "FALSY"

"Falsy" means that a value evaluates to false when cast to a boolean. Here are some examples of "falsy" values:

false (false boolean)
'' (empty string)
0 (number zero)

Here are some truthy values:

true (true boolean)
1 (a non-zero number)
'name' (a string with more than zero characters)
*/

// Assignment
// Fix the code so that instead of storing a movie without a title as the string 'null', we use a null value.

// Solution
const movieTitle = null
const movieHasNoTitle = !movieTitle

console.log(`The movie does not have a title: ${movieHasNoTitle}`)
