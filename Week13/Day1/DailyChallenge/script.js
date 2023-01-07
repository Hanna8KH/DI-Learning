import { largeNumber } from './main.js'
const b = 5;
console.log(largeNumber + b);

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <p>My Module is ${largeNumber}</p>
    <h1>Hi there at the frontend</h1>
  `);
});

server.listen(3000, () => {
  console.log("I'm listening on port 3000");
});


const http = require('http');
const getDateTime = require('./main');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <p>The current date and time is: ${getDateTime()}</p>
  `);
});

server.listen(8080, () => {
  console.log("I'm listening on port 8080");
});