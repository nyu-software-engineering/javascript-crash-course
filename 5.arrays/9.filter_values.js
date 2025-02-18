let fruits = 'avocado,tomato,banana'.split(',') // ['avocado, 'tomato', 'banana']

// create a new array with a subset of the original values
/*
the filter function filters the values in the array
it accepts a function definition as its argument
that function is called for each value in the array
if that function returns true for any value, that value is added to a new array
if that function returns false for any value, that value is not included in the new array
*/
fruits = fruits.filter((val, i, arr) => {
  return val != 'banana' // returns true for all fruits except 'banana'
})

console.log(fruits) // expected output: ['avocado', 'tomato']
