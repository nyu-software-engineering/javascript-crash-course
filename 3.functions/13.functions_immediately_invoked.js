// a function definition that is immediately invoked
// immediately-invoked function definitions must be surrounded in parentheses

(function () {
  console.log("doing something")
})(); // note these trailing parentheses are the function invocation

// the same thing in arrow function style
(() => {
  console.log("doing something")
})();

// the same thing, with an unused return value
(() => console.log("doing something") )();
