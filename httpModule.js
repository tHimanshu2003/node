const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req);
    res.write('Hello my name is Himanshu.')
    res.end()
})

server.listen(5000)

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log("request");
//     res.end("Hello World");
// })

// server.listen(5000, () => {
//     console.log("Server is running.");
// })

// blocking code in server.
// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log("Hey, i am using node");
//     if (req.url === "/about") {
//         res.end("Hello World");
//     }    
    
// })

// server.listen(5000, () => {
//     console.log("Server is running.");
// })