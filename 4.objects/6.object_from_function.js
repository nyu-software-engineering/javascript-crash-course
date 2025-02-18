// a function can be used as an object constructor
function Dog (name, breed) {
  this.name = name
  this.breed = breed
  this.bark = message => {
    console.log(`${this.name} the ${this.breed} says, '${message}'`)
  }
}

// instantiate an object and call its method
const fido = new Dog('Fido', 'Schnauzer')
fido.bark('Woof!')
