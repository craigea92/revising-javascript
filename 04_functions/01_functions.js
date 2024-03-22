/*
FUNCTIONS

To create a new function, you'll use the function keyword. 
Similar to other blocks like if and else, the body of the function is surrounded by brackets:

function main() {
  const sum = getSum(5, 6)
  console.log(`The sum is ${sum}`)
}

function getSum(a, b) {
  return a + b
}

main()
*/

// Assignment
// Complete the getLabel function. 
// It takes the number of stars a movie received in its reviews and returns a string label describing how good the movie was.
// 8 - 10 stars: great
// 4 - 7 stars: okay
// less than or equal to 3 stars: awful

// Solution
function getLabel(numStars) {
  if (numStars > 7) {
    return 'great'
  } else if (numStars > 3){
    return 'okay'
  } else {
    return 'awful'
  }
}
  
function test(numStars) {
  console.log(`Stars = ${numStars}, The movie was ${getLabel(numStars)}.`);
}

// Tests
test(10);
test(9);
test(8);
test(7);
test(6);
test(5);
test(4);
test(3);
test(2);
test(1);
test(0);
