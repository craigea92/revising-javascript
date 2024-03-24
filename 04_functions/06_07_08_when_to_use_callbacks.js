/*
WHEN TO USE CALLBACKS

The #1 rule of programming is "KISS":

Keep it simple, stupid

What that means in regards to fancy programming tactics like callbacks is only use them if there isn't a simpler alternative. 
95% of the time you won't need a callback to accomplish what you're trying to do.

When callbacks are needed in application code, they are usually being passed to functions imported from a library or framework. 
Applications rarely define their own functions which accept callbacks, while libraries and frameworks commonly do because they need to stay application agnostic.

For example, the requestAnimationFrame() is part of every web browser's JavaScript API. 
It needs to accept a callback because it needs to be able to run an arbitrary piece of code the next time the browser redraws the webpage. 
It can't hard-code the behavior because it needs to support every web application imaginable.

However, when you are writing your very specific app, you can usually "hard code" what happens next.
You shouldn't need to write functions that callback to any other function.
*/

// Question 01

// Is 'KISS' generally a good idea?

// Yes
// No

// Answer = Yes

// Question 02

// Are functions that accept callbacks more common in the code of an app or the code of a library?

// Library
// App

// Answer = Library

// Question 03

// Callbacks should be used in your code ____

// never
// as necessary
// as much as possible
// always

// Answer = as necessary
