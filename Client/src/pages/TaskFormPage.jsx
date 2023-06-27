//Pagina para crear tareas
import { useEffect } from "react"
import {useForm} from "react-hook-form"
import { createTask, deleteTask, putTask, getTask } from "../api/task.api"
import {useNavigate, useParams} from "react-router-dom"
import {toast} from "react-hot-toast"
import "../styles/TaskForm.css"


export function TasksFormPage () {
    const {
        register,
        handleSubmit, 
        formState: {errors},
        setValue
    } = useForm() //registra inputs cuando se registra un nuevo form y se le da a onSubmit

    const navigate = useNavigate()

    const params = useParams() //Divide cada elemento con sus respectivos objetos e id
    

    const onSubmit = handleSubmit(async data =>{ //extrae los datos del form
        if (params.id) {
            await putTask(params.id, data)
        } else {
            await createTask(data)
            toast.success("Tarea creada")
        }
        navigate("/tasks")
    })

    useEffect(() => {  //Mostrar la informacion para actualizar
    async function loadTask () {    
        if (params.id){
           const res = await getTask(params.id)
           setValue("title", res.data.title)
           setValue("description", res.data.description)
        }
    }
    loadTask()    
    })


    return (
        <div className="form">
            <form onSubmit={onSubmit} >
                <input className="title"
                type="text" 
                placeholder="title" 
                {...register("title", {required:true})}/> 
                {errors.title && <span>Este campo es Requerido</span>}
                <textarea 
                rows="3" 
                placeholder="description"
                {...register("description", {required:true})}></textarea>
                {errors.description && <span>Este campo es Requerido</span>}
                <button className="guardar">Guardar</button> 
            </form>
            {params.id && <button onClick={async () => {
                const accpted = window.confirm("¿Estas seguro de querer eliminar esta tarea?")
                if (accpted) {
                    await deleteTask(params.id)
                    navigate("/tasks")
                }
            }} className="Delete">Delete</button>}
        </div>
    )
}