// Se crea componente para taskList en cual mostrara informacion de titulo y descripcion de la tarea en base a su id 
//Toda modificacion realizada cambiara la estructura de cada tarea.
import { useNavigate } from "react-router-dom"


export function TaskCard({task}){
    const navigate = useNavigate()

    return(
    <div key={task.id}
    onClick={() => {
        navigate("/tasks/" + task.id)
    }}
    className="task-div">
        <h1 className="title">{task.title}</h1>
        <p>{task.description}</p>
    </div>
    )
}