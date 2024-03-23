/*
FUNCTIONS AS VALUES

"Functions as values", or "first-class" functions are supported by JavaScript. 
That means that functions themselves can be passed around as data.

function sayHello() {
  console.log('Hello there!')
}

function doTwice(f) {
  f()
  f()
}

doTwice(sayHello)
// Prints:
// Hello there!
// Hello there!

In the example above, the doTwice function accepts a function as a parameter, then calls that function twice.

CALLBACKS

Another name for this sort of thing is a "callback". 
In this case, the sayHello function is a callback function that's passed into the doTwice function for it to execute later. 
Callbacks are very common in front-end applications. You'll often see code that essentially says

"When the 'sign up' button is clicked, do X"

What's X? Well, it's a function! So you essentially connect functions to UI components (like buttons) so they can be called later when the element is clicked.
*/

// Assignment
// Complete the onReview and main functions.

// ONREVIEW()
// This is the function that's called when a new review is submitted by a user. 
// It should log the review text and then call the provided callbackFunction and give it the reviewText as input.

// MAIN()
// Call onReview with the ohBrotherWhereArtThouReview review, then with the twentyTwelveIceAgeReview review. 
// In both cases use the saveToDatabase function as the callback.

// Solution
function onReview(reviewText, callbackFunction) {
  console.log(`Review: ${reviewText}`);
  callbackFunction(reviewText);
}

function main() {
  const ohBrotherWhereArtThouReview = "Stellar movie!";
  const twentyTwelveIceAgeReview = "Not my favorite";

  onReview(ohBrotherWhereArtThouReview, saveToDatabase);
  onReview(twentyTwelveIceAgeReview, saveToDatabase);
}

function saveToDatabase(reviewText) {
  console.log(`Saving '${reviewText}' to database...`);
}

main();
