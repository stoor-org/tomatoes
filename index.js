import { createServer } from 'http';

const server = createServer((request, response) => {
if (request.url === '/')
response.end('How to pass arguments to npm script.');
})

const PORT = process.env.npm_config_port;
