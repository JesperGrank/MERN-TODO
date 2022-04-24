import React, {useState} from 'react'

export default function Newtodo() {

    const [text, setText] = useState("")

    function createTodo(){
        const token = localStorage.getItem("MERNTODO")
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const payload = { text } 
        fetch("http://localhost:3001/todos/create", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        })
    }

  return (
    <div>
        <h2>Create todo</h2>
        <form onSubmit={createTodo}>
            <label name="text">
            <input type="text" placeholder="What needs to be done?" value={text} onChange={e => setText(e.target.value)}></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
