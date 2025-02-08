const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            'message': 'Welcome to the BasicAPI',
        }));
    } else if (req.url === '/api/v1/info') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            'email': 'tettehmagnus35@gmail.com',
            'current_datetime': new Date().toISOString(),
    }))
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            'message': 'Not Found',
        }));

    }
    
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});