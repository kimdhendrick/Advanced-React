require('dotenv').config({path: 'variables.env'});
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// todo: use express middleware to handle cookies (JWT)
// todo: use express middleware to popuplate current user

server.start({
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is running on http://localhost:${deets.port}`);
  }
);
