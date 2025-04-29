const expresss=require("express")
const cors=require("cors")
const mongoose= require("mongoose")
const dotenv=require("dotenv")


const app=expresss();
app.use(expresss.json())
app.use(cors())
dotenv.config();

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("connected to mogo"))
.catch((err)=>console.log('error'));


const BookSchema =new mongoose.Schema({
   title: String,
   author: String,
   date: String,
   image: String
})



const Book=mongoose.model("MyBook", BookSchema)

app.post("/book", async(req,res)=>{
   try {
      const newbook= new Book(req.body);
      await newbook.save();
      res.status(200).send('Book Added')
   } catch (error){
      res.status(500).send('sever error')
   }
         
})
app.get("/books",async (req,res)=>{
   try{
      const Books =await Book.find()
      res.json(Books)

   }
   catch(error){
      console.log(error)
      res.status(500).send('server Error')

   }
})
app.get('/search', async (req, res) => {
   const { title } = req.query;
   try {
       const books = await Book.find({ title: { $regex: title, $options: 'i' } }); // case-insensitive search
       res.json(books);
   } catch (error) {
       console.error(error);
       res.status(500).send('Server Error');
   }
});
app.delete('/books/:id', async (req, res) => {
   try {
     const book = await Book.findByIdAndDelete(req.params.id);
     if (!book) return res.status(404).send('Book not found');
     res.send('Book deleted successfully');
   } catch (error) {
     console.error(error);
     res.status(500).send('Server error');
   }
 });

 app.put('/books/:id',async (req,res)=>{
   const book=await Book.findByIdAndUpdate(req.params.id,req.body)
   if(!book)
       return res.status(404).send('Book Not Found')
   res.json(book)
})

app.listen(9000,()=>{
   console.log("server is running on port 9000")
})

