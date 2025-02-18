// define an anonymous function with parameters and a return value, but assign a variable to refer to it
const doSomething3 = function (x, y) {
  const msg = `doSomething3 is running with x=${x} and y=${y}.`
  return msg
}

console.log(doSomething3('hello', 'world')) // call the function and use its return value
