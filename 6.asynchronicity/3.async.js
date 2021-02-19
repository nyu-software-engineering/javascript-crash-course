// a function defined with the async keyword... it is implied that it returns a promise
let getFive = async () => {
  // this function automatically returns a Promise, even if it doesn't say so

  // generate a random number between 0-10
  const rand = parseInt(Math.random() * 10)

  // if it's a 5, return that
  if (rand == 5) return rand
  // if it's any other number, throw an error!
  else throw rand
}

// show that we're starting the code
console.log("Starting")

// treat the function as if it returned a Promise, because it does!
getFive()
  .then(res => {
    console.log(`Success - the number is ${res}`)
  })
  .catch(err => {
    console.log(`Failure - the number is ${err}`)
  })

// show that we're ending the code
console.log("Ending")
