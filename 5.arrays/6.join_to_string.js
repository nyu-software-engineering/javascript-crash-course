// generate an array from a string
const fruits = 'avocado,tomato,banana'.split(',') // returns ['avocado, 'tomato', 'banana']

// join all elements in array into a comma-separated string
const stringAgain = fruits.join(', ') // returns 'avocado, tomato, banana'
console.log(`The fruits are ${stringAgain}.`)
