const person = {
  age: 72,
  name: "Foo Barstein",
  email: "fb1258@teleworm.us",
  address: {
    street: "92 Rue Jamil Sedki",
    city: "Beni Brahim",
    country: "Tunisia",
    postalCode: 7040,
  },
}

// destructure the object and extract only two parts
const { name, age } = person // name='Foo Barstein', age=72
console.log(`name='${name}', age=${age}`)

// variable names do not need to match object field names
const { name: fullName, age: apparentAge } = person // { fullName: 'Foo Barstein', apparentAge: 72 }
console.log(`fullName=${fullName}, apparentAge=${apparentAge}`)

// nested objects can also be destructured, such as the address.city property
const {
  email,
  address: {
    city, // create a variable for this field only
  },
} = person
console.log(`email='${email}', city='${city}'`)
