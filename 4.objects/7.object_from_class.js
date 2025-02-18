// the keyword 'class' is syntactic sugar in Javascript
class Dog {
  // a constructor function
  constructor (name, breed) {
    this.name = name
    this.breed = breed
  }

  // an instance method
  bark (message) {
    console.log(`${this.name} the ${this.breed} says, '${message}'`)
  }
}

// instantiate an object and call its instance method
const fido = new Dog('Fido', 'Schnauzer')
fido.bark('Woof!')
