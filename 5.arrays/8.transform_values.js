const numbers = [65, 44, 12, 4]

/*
the map function transforms the values in the array
it accepts a function definition as its argument
that function is called for each value in the array
the returned values are stored in a new array
*/
const newNumbers = numbers.map(n => n * 10)
// newNumbers now refers to [650, 440, 120, 40]

console.log(newNumbers)
