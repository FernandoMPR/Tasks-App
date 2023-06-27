import React from "react"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { TasksPage } from "./pages/TaskPage"
import { TasksFormPage } from "./pages/TaskFormPage"
import Navigates from "./components/Navigate"
import { Toaster } from "react-hot-toast"


function App() {
  return (
  <BrowserRouter>
    <Navigates />
    <Routes>
    <Route path="/" element={<Navigate to ="/tasks"/>} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/tasksCreate" element={<TasksFormPage />} />
      <Route path="/tasks/:id" element={<TasksFormPage />} />
    </Routes>
    <Toaster />
  </BrowserRouter>
  )
}

export default App