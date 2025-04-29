import React, { useEffect, useState } from 'react'
import axios from "axios"
const View = () => {
  const [Books,setBooks]=useState([])
  useEffect(()=>{
    handeleview()
  },[])

  const handeleview =async()=>{
    try{
    const res= await axios.get("http://localhost:9000/books");
    setBooks(res.data)
    console.log(Books)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
    <h1>book detail</h1>
    <div style={{display:'flex', flexWrap: 'wrap', gap:"20px"}}>
      {
      Books.map((book)=>(
        <div key={book.id}>
          <img src={book.image} style={{ borderRadius:"15px",}}/>
          <h3>{book.title}</h3>
          <h2>{book.author}</h2>
          <h2>{book.date}</h2>

        </div>
      ))
      }
    </div>
  
</div>
)
}


export default View