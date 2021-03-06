/*
 * Definition file for our API.
 * Server responds to all requests with a string.
 * Server listens on port 3000
 */

const http = require('http');
const { URL } = require('url');

const urlFunctions = require('./lib/urlFunctions');

const server = http.createServer((request, response) => {
    // request.url is relative so need a dummy base. Will throw error otherwise
    const url = new URL(request.url, 'http://example.com');

    const path = url.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');

    const method = request.method.toLowerCase();

    //TODO change to using querystring for this, it's just easier
    const querystringParams = urlFunctions.convertSearchParamsToObject(url.searchParams);

    response.end('Hello World');

    console.log(`Got request on ${trimmedPath} with method ${method} with params ${JSON.stringify(querystringParams)}`);
});

server.listen(3000, () => {
    console.log('Server is listening');
});

