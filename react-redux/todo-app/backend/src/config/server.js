const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extend:true }))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`O server será testado na porta:${port}`)
})
