// how to import something from a module in the CommonJS style

/**
 * IMPORTANT NOTE
 * This ES6 style import/export code will not work in Node.js
 * unless either it is run from within an npm project with the setting,
 * 'type': 'module'
 * ... or the file extension is .mjs instead of .js
 */

import { foo, bar, baz } from './3.export_something_es6.mjs'

// prove that we imported correctly

console.log(foo) // risotto
bar() // paella
console.log(baz.favoriteFood) // plov
