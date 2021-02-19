// generate an array from a string
let fruits = "avocado,tomato,banana".split(",") // returns ['avocado, 'tomato', 'banana']

// add an element to an array
fruits.push("pepper") // fruits now has ['avocado, 'tomato', 'banana', 'pepper']

console.log(`Do you love ${fruits[3]}?`) // expected output "Do you love pepper?"
