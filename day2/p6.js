 const fs =require('fs')
 fs.rmdir("mydir",(e)=>
{
    if(e){
                console.error("eror",e);
    return;}
    console.log("dir deleted")
}
)