const fs=require('fs');
fs.appendFile("./data.txt","I am append data",(err)=>{
    if(err)
        console.error(err);
    else
     console.log("datta append success");
    
})