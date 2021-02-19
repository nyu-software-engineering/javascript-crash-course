// a function that explicitly returns a Promise
let getFive = () => {
  return new Promise((resolve, reject) => {
    // generate a random number between 0-10
    const rand = parseInt(Math.random() * 10)

    // if it's a 5, call the success callback function
    if (rand == 5) resolve(rand)
    // if it's any other number, call the failure callback function
    else reject(rand)
  })
}

// show that we're starting the code
console.log("Starting")

// call the function, pass functions to handle its success or failure, whenever it completes
getFive()
  .then(res => {
    console.log(`Success - the number is ${res}`)
  })
  .catch(err => {
    console.log(`Failure - the number is ${err}`)
  })

// show that we're ending the code
console.log("Ending")
