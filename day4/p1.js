const http= require('http');
const users=[];
const server=http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
   if(req.url==='/getdata' && req.method==='GET')
    {
        // const data = {name: 'John Doe', age: 30};
        res.end(JSON.stringify(users));
    }
    else if(req.url==='/setdata' && req.method==='POST')
        {
            let body='';
            req.on('data', chunk => {
                body += chunk;
            });
            req.on('end', () => {
                const newData = JSON.parse(body);
                console.log("New data received: ${JSON.stringify(newData)}");
                users.push(newData);
                res.end('Data set successfully');
            });
        } 
});

server.listen(9000,(err)=>{
    if(err)
        console.error(err);
    else             
      console.log("serveris running on port 9000")                                                                  
});