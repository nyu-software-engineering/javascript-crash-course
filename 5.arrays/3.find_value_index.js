// generate an array from a string
let fruits = "avocado,tomato,banana".split(",") // returns ['avocado, 'tomato', 'banana']

// add an element to an array
fruits.push("pepper") // fruits now has ['avocado, 'tomato', 'banana', 'pepper']

// find index position of element by value
const fruit = "pepper"
let pos = fruits.indexOf(fruit) // returns 3
console.log(`${fruit} is located in the array at index ${pos}.`)
