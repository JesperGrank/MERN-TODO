import React, {useEffect, useState} from 'react'

export default function Todolist() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
      }, [])
    
      function getTodos() {
        const token = localStorage.getItem("MERNTODO")
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
    
            fetch("http://localhost:3001/todos", {
                headers: headers
            })
            .then(res => res.json())
            .then(data => {
               setTodos(data.todos)
            })
      }
    
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
        <h2>Todos page</h2>
        {
          todos && todos.map(function(todo, index){
            return <div key={index}>
                 <p>text: {todo.text} </p>
                 <p>created at: {todo.createdAt}</p>
                 <p>completed: {todo.complete ? "true" : "false"}</p>

                  <button onClick={ e => todoDone(e, todo)}>DONE</button> 
              
                 <hr></hr> 
                 </div>
          })
        }
    </div>
  )
}
