// a simple object written in object notation
const me = {
  name: 'Foo Barstein',
  phone: '212-666-1212',
  age: 63,
  isRobot: false,
}

// attach a method to the object
me.speak = function (message) {
  console.log(`${this.name} says, "${message}".`)
}

me.speak('Hello!') // expected output: 'Foo Barstein says, "Hello!".'
