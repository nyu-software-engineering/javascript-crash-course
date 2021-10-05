// note that there are 3rd-party modules, such as axios, that make calling APIs easier

const https = require("https") // using Node's built-in http module for http requests
const apiUrl = "https://my.api.mockaroo.com/animals.json?key=d9ddfc40" // a mock-API for demo purposes that returns a JSON array of objects

// check out the API URL directly in your web browser to see how the data is formatted
// this api returns a JSON array of objects representing animals

// make an HTTP request to the API server
// the second argument is a callback function to be run when the response is received
https
  .get(apiUrl, res => {
    // print out the HTTP headers
    // console.log("statusCode:", res.statusCode)
    // console.log("headers:", res.headers)

    let data = "" // will hold the response data

    // set a function to be called each time a chunk of data is received
    res.on("data", chunk => {
      // each chunk of data comes in as a buffer... concatenate it to a string
      data = data + chunk.toString()
    })

    // set a function to be called at the end once all data has been received
    res.on("end", () => {
      // convert the data from a string to a proper Javascript object
      data = JSON.parse(data)
      // loop through each object in the array of data, and output some details
      data.forEach((obj, i, arr) => {
        console.log(`${obj.title} - ${obj.country}`)
      })
    })
  })
  .on("error", e => {
    console.error(`Error fetching data: ${e}`)
  })
