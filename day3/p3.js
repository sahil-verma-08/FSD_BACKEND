const http = require('http');
const fs= require('fs/promises')
const server = http.createServer(async(req,res)=>{
    const data=await fs.readFile("./index.html")
    res.writeHead(200,{'content-Type':'text/html'});
    res.end(data);
   

})
server.listen(9000,(err)=>{
    if(err)
        console.error(err);
    else                                                                               //npm install -g nodemon
    console.log("server is running on 9000")
});