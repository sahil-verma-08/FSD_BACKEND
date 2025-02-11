const fs=require('fs')
fs.unlink("./data.txt",(err)=>{
    if(err) 
        console.log(err)
    else
    console.log("file deleted")
})