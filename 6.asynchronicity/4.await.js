const doSomething = async () => {
  const num = Math.random() * 10
  const allisgood = num > 5 ? true : false
  if (allisgood) return "number greater than 5!"
  else throw "number was less than or equal to 5"
}

// await can only be used within an async function
;(async () => {
  try {
    const msg = await doSomething()
    console.log(`success!: ${msg}`)
  } catch (err) {
    console.log(`failure!: ${err}`)
  }
})()
