const doSomething = async () => {
  const num = Math.random() * 10
  const allisgood = num > 5
  if (allisgood) return 'number greater than 5!'
  else throw 'number was less than or equal to 5'
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

console.log('This will print before the doSomething() function completes.')
