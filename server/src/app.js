console.log('Hello')
// import the correspoding modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined')) // use "combined" to print out logs in a certain way
app.use(bodyParser.json())
app.use(cors())

// put requests here:

// handling endpoint /status ; when request is recived,
// func sends back json object with attribute message: and sting 'hello world'
// app.get('/status', (req, res) => { // request and response
//   res.send({
//     message: 'hello world!'
//   })
// })

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email} Your user was resgistered!`
  }) // email here will be from the JSON payload
})

// runs the app
app.listen(process.env.PORT || 8081) // environment port if avalible, or 8081
