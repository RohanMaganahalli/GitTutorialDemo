const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  const yourName = "Rohan M";

  res.end(yourName);
  
  console.log(yourName);
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
