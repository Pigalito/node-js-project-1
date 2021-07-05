/*
 * Definition file for our API.
 * Server responds to all requests with a string.
 * Server listens on port 3000
 */

const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hello World');
});

server.listen(3000, () => {
    console.log('Server is listening');
});

