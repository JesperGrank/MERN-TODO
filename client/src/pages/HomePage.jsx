import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

  function logout() {
    localStorage.removeItem("MERNTODO")
    console.log("removed token")
  }
  
  return (
    <div>
        <h2>HomePage / StartPage</h2>
        <button onClick={logout}>Logout</button>
        <br></br>
        <Link to="/register">Register</Link>
        <br></br>
        <Link to="/login">Login</Link>
    </div>
  )
}
