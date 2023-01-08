// EX 1

const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Hello, World!</h1><p>This is a paragraph.</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul></body></html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// EX 2

const http = require('http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  const user = {
    firstname: 'John',
    lastname: 'Doe'
  }

  res.end(JSON.stringify(user));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// EX 3

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000/');
});