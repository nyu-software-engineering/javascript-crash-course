// how to import something from a module in the CommonJS style
const { foo, bar, baz } = require('./1.export_something_commonjs.js')

// prove that we imported correctly

console.log(foo) // risotto
bar() // paella
console.log(baz.favoriteFood) // plov
