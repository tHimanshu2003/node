// const { on } = require('events');
// const EventEmitter = require('events');

// const CustomEmitter = new EventEmitter();

// CustomEmitter.on('response', (name, age) => {
//     console.log("Data received.")
// })

// CustomEmitter.emit('response', 'Himanshu', 19)

const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    res.write("Hello, I am a Developer.")
    res.end('welcome')
})

server.listen(5000)

