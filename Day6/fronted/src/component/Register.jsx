import React from 'react'
import axios from "axios"
const Register = () => {
    const handleReg=async(e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const age = e.target.age.value;
        const users={name,age}
       await axios.post('http://localhost:9000/users/',users)
       alert("User registered")
    }
  return (
    <div>
             <form onSubmit={handleReg}>
                name<input type='text' placeholder='Name' name='name' required />
                age<input type='text' placeholder='Name' name='age' required />
                <button type='submit'> Register</button>
             </form>
    </div>
  )
}

export default Register