const fs =require('fs');

const data ="I am new Data";

fs.writeFile("./data.txt",data,(err) => {
    if(err) throw err;
    console.log("file created successfully!");
})