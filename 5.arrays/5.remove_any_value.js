// generate an array from a string
const fruits = 'avocado,tomato,banana'.split(',') // returns ['avocado, 'tomato', 'banana']

// remove the tomato from the middle by its index
fruits.splice(1)

// try to find the index position of tomato
// indexOf returns -1 if value not found in arraay
const fruit = 'tomato'
const pos = fruits.indexOf(fruit) // 'pepper' is no longer there, so -1 is returned
console.log(`${fruit} is now located in the array at index ${pos}.`)
