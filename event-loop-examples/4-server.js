const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request sent');
    res.end('Hello world')
})

server.listen(5000, ()=> {
    console.log('Sever listening on port: 5000......');
})