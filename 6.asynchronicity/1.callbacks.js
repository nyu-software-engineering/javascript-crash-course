// a function that accepts two callbacks - one for success, one for failure
const getFive = (callbackSuccess, callbackFailure) => {
  // generate a random number between 0-10
  const rand = parseInt(Math.random() * 10)

  // if it's a 5, call the success callback function
  if (rand == 5) callbackSuccess(rand)
  // if it's any other number, call the failure callback function
  else callbackFailure(rand)
}

// show that we're starting the code
console.log("Starting")

// call the function, pass two callback functions to handle its success or failure
getFive(
  res => {
    console.log(`Success - the number is ${res}`)
  },
  err => {
    console.log(`Failure - the number is ${err}`)
  }
)

// show that we're ending the code
console.log("Ending")
