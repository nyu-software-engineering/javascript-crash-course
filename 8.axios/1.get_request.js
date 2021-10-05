/**
 * Example of using the axios 3rd party module to make asynchronous requests to an API
 * In order to run this code, you must install all dependencies, including the axios module
 * Install dependencies using the npm package manager:
      npm install
**/

const axios = require("axios") // import axios module

// a mock-API for demo purposes that returns a JSON array of objects
const apiUrl = "https://my.api.smockaroo.com/animals.json?key=d9ddfc40" // the api we will call

// an immediately-invoked function expression to run our program immediately
;(async () => {
  try {
    // call the API using axios
    const response = await axios.get(apiUrl)
    console.log(`success: ${response.status}`) // output the status of the response

    // extract the data from the response
    const data = response.data

    // we expect an array, so loop through it
    data.forEach((obj, i, arr) => {
      // output some features of each object in the array
      console.log(`${obj.title} - ${obj.country}`)
    })
  } catch (err) {
    // what to do if the request/response fails for some reason
    console.log(`failure: ${err}`)
  }
})()
