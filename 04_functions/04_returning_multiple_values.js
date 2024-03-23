/*
MULTIPLE RETURN VALUES

function getUser() {
  return 'name@domain.com', 21, 'active'
  // DON'T DO THIS
  // only returns 'active'
}

The above code won't actually throw any sort of error, it will silently return the active string, which as you can probably guess is strange, unintuitive behavior. 
You can only return one value from a function in JavaScript!.

THERE IS A WORKAROUND
There is a common workaround used by JavaScript developers, and that's to return an object that contains multiple values. 
You're still just returning a single object, but that way you can return more than one "thing". 
*/

// Assignment
// Fix the bug in the function! It should return false if dang, shoot, or heck are present in the text, and true otherwise.

// Solution
function isClean(review) {
  let clean = true
  if (review.includes('dang')) {
    clean = false
  }
  if (review.includes('shoot')) {
    clean = false
  }
  if (review.includes('heck')) {
    clean = false
  }
  return [clean, review]
}

function test(review) {
  const clean = isClean(review)
  console.log(`'${review}' is it clean: ${clean}`)
}

// Tests
test('avril lavigne has the best dang tour')
test('what a bad film')
test('oh my heck, I hated it')
test('ripoff!')
test('That was a great film')
test('shoot! I cant say I liked it')
