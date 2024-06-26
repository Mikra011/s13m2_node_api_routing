// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');
const adaptersRouter = require('./adopters/adopters-router')
const dogsrouter = require('./dogs/dogs-router')

const server = express();

server.use(express.json());
server.use('/api/adopters',adaptersRouter)
server.use('/api/dogs', dogsrouter)

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Shelter API</h>
    <p>Welcome to the Shelter API</p>
  `);
});

module.exports = server;
