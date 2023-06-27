import axios from "axios"
// Conexion a nuestro backend con la ruta establecida solo del back
//Si desea cambiar de servidor, dar de alta en CORS_ALLOWED_ORIGINS ubicado en settings 

const taskApi = axios.create({
    baseURL:"http://127.0.0.1:8000/tasks/api/v1/tasks/"
})

//Methodo Get, Post para enviar y mostrar tareas

export const getAllTask = () =>{
    return taskApi.get("/")
}

export const getTask = (id) =>{
    return taskApi.get(`/${id}/`)
}

export const createTask = (task) => {
    return taskApi.post("/",task)
}

export const deleteTask = (id) => {
    return taskApi.delete(`/${id}`)
}

export const putTask = (id, task) => {
    return taskApi.put(`/${id}/`, task)
}