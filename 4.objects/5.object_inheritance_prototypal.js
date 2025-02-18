// a simple object written in object notation
const me = {
  name: 'Foo Barstein',
  phone: '212-666-1212',
  age: 63,
  isRobot: false,
  speak: message => {
    console.log(`${this.name} says, "${message}".`)
  }
}

// make a copy of an object - this is prototypal inheritance
const robotMe = Object.create(me) // creates a new object based on the original prototype

robotMe.isRobot = true // modify this new object in some way

console.log(`me ${me.isRobot ? 'is indeed' : 'is not'} a robot.`) // expected output: "My name is Foo Barstein"
console.log(`robotMe ${robotMe.isRobot ? 'is indeed' : 'is not'} a robot.`) // expected output: "My name is Foo Barstein"

// add human speech abilities to the human object
me.speak = function (message) {
  console.log(`${this.name} the human says, "${message}".`)
}

// add robot-specific speech abilities to the robot object
robotMe.speak = function (message) {
  console.log(
    `${this.name} the robot states in monotonous voice, "${message}".`
  )
}

// let each speek
me.speak('Hello!')
robotMe.speak('Hello!')
