// how to export something from a module in the CommonJS style

const foo = 'risotto'

const bar = () => {
  console.log('paella')
}

const baz = {
  favoriteFood: 'plov',
}

// export these all to make them available for import into another Javscript file
module.exports = { foo, bar, baz } // note the CommonJS syntax!

/*
// alternatively, we could also have exported each individually, e.g.
module.exports.foo = foo
module.exports.bar = bar
module.exports.baz = baz
*/
