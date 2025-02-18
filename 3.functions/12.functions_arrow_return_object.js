// note that with this shorthand return statement,
// if the value returned is an object, that object must be encapsulated in parentheses
// otherwise the curly braces may be confused for a function block instead of an object block
const getFoo = () => ({ first: 'Foo', last: 'Barstein' })

const me = getFoo() // save the returned object into a variable
console.log(`I am ${me.first} ${me.last}.`) // print out some object data
