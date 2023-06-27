import { useEffect, useState } from "react";
import { getAllTask } from "../api/task.api";
import { TaskCard } from "./TaskCard";
import  "../styles/Taskpage.css"

// Se efectura la respuesta get de todas las tareas cuando sea llamada la url de taskpage

export function TasksList() {
    const [tasks, setTasks] = useState([]); 

    useEffect(() => {
        async function loadTasks(){
            const res = await getAllTask();
            setTasks(res.data)
        }
        loadTasks();
    },[])

    return (
        <div>
        {tasks.map(task => (
           <TaskCard key={task.id} task={task}/>
        ))}
    </div>
    );
}
 