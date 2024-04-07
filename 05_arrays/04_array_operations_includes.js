/* 
ARRAY OPERATIONS - INCLUDES

Checking whether a value exists in an array is really easy in JavaScript, just use the .includes() method.
*/

// Assignment
// Let's fix up our profanity detection to make it a little more robust. 
// Rather than just marking a review as "clean" or "not clean" we need to give it a ranking, which we'll represent as one of 3 strings:

// clean: No bad words
// dirty: 1 bad word
// filthy: 2 or more different bad words

// The bad words are:
// dang
// shoot
// heck

// Complete the getCleanRank function. It takes an array of words. 
// Return the ranking. If a word contains punctuation, it should escape detection in our naive algorithm for now.

// Solution
function getCleanRank(reviewWords) {
  const badWords = ['dang', 'shoot', 'heck'];
  const foundBadWords = new Set();

  for (const word of reviewWords) {
    if (badWords.includes(word)) {
      foundBadWords.add(word);
    }
  }

  const badWordsCount = foundBadWords.size;

  if(badWordsCount === 0) {
    return 'clean';
  } else if (badWordsCount === 1) {
    return 'dirty';
  } else {
    return 'filthy';
  }
}

function test(reviewWords) {
  const cleanRank = getCleanRank(reviewWords)
  console.log(`'${reviewWords}' has rank: ${cleanRank}`)
}

// Tests
test([ 'avril', 'lavigne', 'has', 'best', 'dang', 'tour' ])
test([ 'what', 'a', 'bad', 'film' ])
test([ 'oh', 'my', 'heck', 'I', 'hated', 'it' ])
test([ 'ripoff' ])
test([ 'That', 'was', 'a', 'pleasure' ])
test([ 'shoot!', 'I', 'cant', 'say', 'I', 'liked', 'the', 'dang', 'thing' ])
test([ 'shoot', 'dang', 'heck' ])

