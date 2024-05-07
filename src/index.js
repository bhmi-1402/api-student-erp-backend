require('dotenv').config();

/**
 * Module dependencies.
 */

const app = require('./app');
const http = require('http');

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '5000';
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

server.listen(port);
