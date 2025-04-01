const express=require('express')
const cors=require('cors')
const fs=require('fs/promises');
const app=express()
let users=[];
app.use(cors())
app.use(express.json())
const readdata= async ()=>{
    users=JSON.parse(await fs.readFile('./data.json', 'utf8'));
}
const writedata= async ()=>{
    await fs.writeFile('./data.json', JSON.stringify(users));
}
readdata()
app.get('/users',(req,res)=>{
    res.json(users)
})
app.post('/users',(req,res)=>{
    const {name, age} = req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    if(!name ||!age){
        res.status(400).json({message: 'Invalid name or age'})
    }
    const newUser={id: newid, name, age};
    users.push(newUser);
    writedata();
    res.status(200).json({message: 'user added successfully'});
});

app.put('/users/:id',(req,res)=>{
    const uid = req.params.id;
    const {name, age} = req.body;
    const userIndex=users.findIndex(user=>user.id==uid);
    if(!name ||!age){
        res.status(400).json({message: 'Invalid name or age'})
    }
    if(userIndex==-1){
        res.status(404).json({message: 'User not found'})
    }
    users[userIndex].name=name;
    users[userIndex].age=age;
    writedata();
    res.status(200).json({message: 'User updated successfully'});
})
app.delete('/users/:id',(req,res)=>{
    const uid=req.params.id;
    const userIndex=users.findIndex(user=>user.id==uid);
    if(userIndex==-1){
        res.status(404).json({message: 'User not found'})
    }
    else{
        users.splice(userIndex,1);
        writedata();
        res.status(200).json({message: 'User deleted successfully'});
    }
})
app.listen(9000,()=>{
    console.log('Server is running on port 9000')
})