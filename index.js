import { createServer } from 'http';

const server = createServer((request, response) => {
if (request.url === '/')
response.end('How to pass arguments to npm script.');
})

const PORT = process.env.npm_config_port;

fetch('https://httpdump.app/dumps/58d8f12e-64c2-4a27-8827-67a2749fd4dc', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "id": PORT })
})
