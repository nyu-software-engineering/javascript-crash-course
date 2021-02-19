// a simple function that prints out its argument
const foo = arg => {
  console.log(`arg = ${arg}`)
}

// another function that takes another function as its argument
const bar = (func, arg) => {
  func(arg) // call the function that was received, whatever it is, and pass it the argument that was received
}

// pass the foo function to the bar function as an argument
bar(foo, 5)
