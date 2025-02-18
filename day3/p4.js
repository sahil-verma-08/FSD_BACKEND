const http = require('http');
const Users=[
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }
 ];
const server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(Users));
});

server.listen(9000, () => {
    console.log('Server running at http://localhost:9000/');
});