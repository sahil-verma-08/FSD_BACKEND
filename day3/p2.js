const http = require('http');
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    res.end(`<h1 style="color:green;background-color:grey">helllo world</h1>`)
   

})

server.listen(9000,(err)=>{
    if(err)
        console.error(err);
    else                                                                               //npm install -g nodemon
    console.log("server is running on 9000")
});