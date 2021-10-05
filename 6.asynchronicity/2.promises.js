const doSomething = () => {
  return new Promise((resolve, reject) => {
    const num = Math.random() * 10
    const allisgood = num > 5 ? true : false
    if (allisgood) resolve("number greater than 5!")
    else reject("number was less than or equal to 5")
  })
}

doSomething()
  .then(msg => {
    // doSomethign ran successfully
    console.log(`success!: ${msg}`)
  })
  .catch(err => {
    // doSomething ran unsuccessfully
    console.log(`failure!: ${err}`)
  })
