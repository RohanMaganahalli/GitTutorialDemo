const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);

  // Get the path from the URL
  const path = parsedUrl.pathname;

  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Handle different paths
  if (path === '/home') {
    res.end('Welcome home');
  } else if (path === '/about') {
    res.end('Welcome to About Us page');
  } else if (path === '/node') {
    res.end('Welcome to my Node Js project');
  } else {
    // If the path doesn't match any of the above, return a default response
    res.end('Welcome to my Node Js project');
  }
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
