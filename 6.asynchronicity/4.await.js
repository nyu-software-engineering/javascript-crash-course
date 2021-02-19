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

// the await keyword can only be used within an async function...
const main = async () => {
  // show that we're starting the code
  console.log("Starting")

  // the await keyword will wait for the called async function to return before moving on to the next line of code
  // treat the function as if it returned a Promise, because it does!
  res = await getFive().catch(err => {
    // handle failure the usual way
    console.log(`Failure - the number is ${err}`)
  })
  // deal with success by simply checking if we got a return value
  if (res) console.log(`Success - the number is ${res}`)

  // show that we're ending the code
  console.log("Ending")
}

main()
