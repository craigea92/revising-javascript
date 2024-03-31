/*
ARRAY LENGTH

The .length property returns the current length of an array.

const foods = ['burger', 'fries', 'pizza']
console.log(foods.length)
// Prints: 3

*/

// Assignment
// Complete the getMostRecentUser function.
// If the usernames array is empty, it should return null. Otherwise, it should return the last username in the array.

// Solution
const getMostRecentUser = (usernames) => {
  const mostRecentUser = usernames[usernames.length - 1];

  if (usernames.length === 0) {
    return null;
  } else {
    return mostRecentUser;
  }
};

console.log(`Most recent user: ${getMostRecentUser([])}`);

console.log(
  `Most recent user: ${getMostRecentUser(["johndoe123", "billyrae456"])}`
);

console.log(
  `Most recent user: ${getMostRecentUser([
    "wagslane",
    "jimmyjohn",
    "bopeep",
    "strightkilla",
    "reddyman",
  ])}`
);
