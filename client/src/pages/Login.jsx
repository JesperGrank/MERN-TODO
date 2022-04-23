import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  
  function fetchData(){
    const payload = {username, password}
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      const token = data.token
      localStorage.setItem("MERNTODO", token)
    })
    navigate('/')
  }
  return (
    <div>

      <h1>Login Page</h1>

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
