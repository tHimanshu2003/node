const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req);
    res.write('Hello my name is Himanshu.')
    res.end()
})

server.listen(5000)