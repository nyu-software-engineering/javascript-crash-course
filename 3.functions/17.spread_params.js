// the spread operator, ..., can be used to lump together an arbitrary number of arguments into an array
function foo(a, b, ...args) {
  console.log(`a = ${a}, b = ${b}, args = ${args}`) // args = [30, 40, 50]
}

foo(10, 20, 30, 40, 50) // pass values as separate arguments
