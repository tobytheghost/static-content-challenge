const express = require('express')
const handleRequest = require('./handle-request')

const app = express()
const port = process.env.PORT || 8080

app.listen(port)

console.log(`Server started at http://localhost:${port}`)

app.get('/*', handleRequest)
