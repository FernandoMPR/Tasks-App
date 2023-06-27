import React from "react"
import { Link } from "react-router-dom"
import "../styles/TaskPage.css"
//Navegador para ir entre pagina principal(task) y crear tareas 

function Navigates() {
    return (
        <div className="navigate">
            <Link to="/tasks">
            <h1 className="Task-App">  Task App  </h1>
            </Link>
            <Link to="/tasksCreate">
            <p className="Create-Task">Create Task</p>
            </Link>
        </div>
  )
}

export default Navigates