// constants are declared with the const keyword

const data = [10, 20, 30]; // a constant - i.e. a variable that cannot be reassigned.  in this case a pointer to an array.

data[1] = "ha!"; // this is not variable reassignment!

console.log(data); // expected output: [10, 'ha!', 30]

// note that arrays can contain a mix of data types
