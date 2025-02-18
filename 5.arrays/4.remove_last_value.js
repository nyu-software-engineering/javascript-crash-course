// generate an array from a string
const fruits = 'avocado,tomato,banana'.split(',') // returns ['avocado, 'tomato', 'banana']

// add an element to an array
fruits.push('pepper') // fruits now has ['avocado, 'tomato', 'banana', 'pepper']

// delete last element from the array
fruits.pop() // fruits now has ['avocado, 'tomato', 'banana']

// try to find the index position of pepper
// indexOf returns -1 if value not found in arraay
const fruit = 'pepper'
const pos = fruits.indexOf(fruit) // 'pepper' is no longer there, so -1 is returned
console.log(`${fruit} is now located in the array at index ${pos}.`)
