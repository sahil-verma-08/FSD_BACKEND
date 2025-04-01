import React from 'react'
import axios from 'axios'
const Update=()=> {
    const handleupdate= async(e)=>{
        e.preventDefault()
        const id =e.target.id.value;
        const name = e.target.name.value;
        const age = e.target.age.value;
        const users={name,age}
        await axios.put(`https://fsd-backend-elyx.onrender.com/users/${id}`,users)
        alert("upadted")

    }
  return (
    <div>
        <h1>delete data</h1>
        <form onSubmit={handleupdate}>
            user id <input type='text' placeholder='user id' name='id' required/>
            name <input type='text' placeholder='name' name='name' required/>
            age <input type='text' placeholder='age' name='age' required/>
            <button type='submit'>update</button>
         </form>
    </div>
  )
}

export default Update