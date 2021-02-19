// when destructuring, you can optionally use the spread syntax, ..., to lump together the rest of the arguments
const [a, b, ...rest] = [10, 20, 30, 40, 50] // a=10, b=20, rest=[30, 40, 50]

console.log(`The rest of the values after the first two are ${rest}.`)
