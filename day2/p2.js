const fs= require('fs');

//read the data from the file
fs.readFile("./data.txt","utf8",(err,data) => {
    if(err) throw err;
    console.log("Data read from file",data);
})