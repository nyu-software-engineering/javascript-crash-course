// generate an array from a string
const fruits = 'avocado,tomato,banana'.split(',') // returns ['avocado, 'tomato', 'banana']

// add an element to an array
fruits.push('pepper') // fruits now has ['avocado, 'tomato', 'banana', 'pepper']

// find index position of element by value
const fruit = 'pepper'
const pos = fruits.indexOf(fruit) // returns 3
console.log(`${fruit} is located in the array at index ${pos}.`)
