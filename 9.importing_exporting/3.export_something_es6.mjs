// how to export something from a module in the ES6 style

/**
 * IMPORTANT NOTE
 * This ES6 style import/export code will not work in Node.js
 * unless either it is run from within an npm project with the setting,
 * 'type': 'module'
 * ... or the file extension is .mjs instead of .js
 */

const foo = 'risotto'

const bar = () => {
  console.log('paella')
}

const baz = {
  favoriteFood: 'plov'
}

const bum = true

// export these all to make them available for import into another Javscript file
export { foo, bar, baz, bum } // note the ES6 syntax!
