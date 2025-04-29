import React from 'react'
import axios from 'axios'

const Delete=()=>{
  
    const handledelete =async(e)=>{
        e.preventDefault()
        const id = e.target.id.value;
        await axios.delete(`https://fsd-backend-elyx.onrender.com/users/${id}`)
        alert("user delete succesfullt")
    }


  return (
    <div>
         <form onSubmit={handledelete}>
            user id <input type='text' placeholder='user id' name='id' required/>
            <button type='submit'>delete</button>
         </form>
    </div>
  )
}

export default Delete