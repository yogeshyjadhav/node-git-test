const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js <<<<||>>>> Git Test Project!\nThis Node Server Developed By Yogesh J');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log()
});
