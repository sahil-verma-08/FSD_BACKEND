const http = require('http');
const server = http.createServer((req,res)=>{
   
    res.writeHead(200,{'content-Type':'text/plain'});
    if (req.url=='/home'){
        res.end("welcome to home page")
    }
    else if (req.url=='/about'){
        res.end("welcome to home page")
    }
    else {
        res.end("page not found")
    }

});
server.listen(9000,(err)=>{
    if(err)
        console.error(err);
    else             
      console.log("serveris running on port 9000")                                                                  
});