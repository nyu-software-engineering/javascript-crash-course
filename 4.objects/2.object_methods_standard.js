const fido = {
  name: "Fido",
  breed: "Schnauzer",
  // an instance method, written in standard function definition style
  bark(message) {
    console.log(`${this.name} the ${this.breed} says, '${message}'`)
  },
}

fido.bark("Woof!") // call the instance method
