const fido = {
  name: "Fido",
  breed: "Schnauzer",
  // a instance method in arrow function form... avoid this
  bark: message => {
    // within an arrow function, the 'this' keyword does not refer to the object within which the method resides
    console.log(`${this.name} the ${this.breed} says, '${message}'`) // expected output, "undefined the undefined says, 'Woof!'"
  },
}

fido.bark("Woof!") // call the instance method
