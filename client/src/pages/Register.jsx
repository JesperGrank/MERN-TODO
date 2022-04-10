import React, {useState } from 'react'

export default function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    
    function fetchData(){
      const payload = {username, password}
      fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
    }
  return (
    <div>
        <h2> Register Page</h2>
        <form onSubmit={fetchData}>
                <label name="username">
                Username <input type="text"
                 placeholder="Username" 
                 onChange={(e) => setUsername(e.target.value)} />
                <br/>
                </label>
                
                <label name="password">
                Password <input type="password" 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                </label>
                <button type="submit">Submit</button> 
        </form>

        
    </div>
  )
}
