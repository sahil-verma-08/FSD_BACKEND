const fs= require('fs')
fs.mkdir('mydir',(err)=>{
    if(err)
        console.log("error creating directory",err)
    else
    console.log("directory created1")
})