// block-scoped non-constant variables are declared with the let keyword

let it = true; // it's true!

it = it ? false : true; // reassign it to be its opposite using the ternary operator

console.log(`It is ${it}!`); // expected output: 'It is false!' - note the string template syntax

