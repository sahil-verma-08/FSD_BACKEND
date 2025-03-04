const express= require('express')
const app =express();
app.use(express.json())
let user=[
    
        {id:1 ,name:"sahil",age:16},
        {id:2 ,name:"sah",age:14},
        {id:3 ,name:"sahi",age:18}
        

    
]
app.get("/users",(req,res)=>{
    res.json(user)
})
app.post("/users",(req,res)=>{
    const {username ,password, name ,age}=req.body;
    console.log(`user ${username} and password${password} ans ${age} and ${name} recived`);
    
    res.json({message:"data reciveed"})
});
app.post("/reg",(reg,res)=>{
    const newuser=reg.body;
    const newId =user.length>0?user[user.length-1].id+1:1;
    newuser.id=newId;
    user.push(newuser);



    res.json(newuser)
})


app.listen(9000,()=>{
    console.log("server is running ");
    
});