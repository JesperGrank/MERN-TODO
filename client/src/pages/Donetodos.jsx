import React, {useEffect, useState} from 'react'

export default function Donetodos() {
    const [completedTodos, setCompletedTodos] = useState(null)

    useEffect(() => {
    const token = localStorage.getItem("MERNTODO")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    fetch("http://localhost:3001/completedtodos", {
        headers:headers
    })
    .then(res => res.json())
    .then(data => setCompletedTodos(data.todos))
}, [])

    function todoDone(e, todo){
    e.preventDefault()
    const payload = {complete: todo.complete}
    console.log(todo.complete)
    fetch(`http://localhost:3001/todos/${todo._id}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })

   }

  return (
    <div>
        <h1>Completed todos</h1>
        {console.log(completedTodos)}
        {
            completedTodos && completedTodos.map((todo, index) => {
                return <div key={index}>
                    <p> Content: {todo.text}</p>
                    <p> Date: {todo.createdAt}</p>
                    <p> completed: {todo.complete ? "true" : "false"}</p>
                    <button onClick={ e => todoDone(e, todo)}>DONE</button>
                    <hr></hr>    
                 </div>
            })
        }
    </div>
  )
}
