import React from "react"
import { Routes, Route } from "react-router-dom"
import ClientLayout from "./layout/Client"
import PublicLayout from "./layout/Public"

import Feed from "./views/Feed"
import Home from "./views/Home"
import LogIndex from "./views/Login"
import Projects from "./views/Projects";
import NotificationsMobile from "./views/NotificationsMobile/NotificationsMobile"

import FormExample from "../FormExample";
import CreateProjects from "./views/Projects/CreateProject"
import ProjectDetails from "./views/Projects/ProjectDetails"

function App() {

  return (
    <Routes>
      <Route path="/log" element={<LogIndex />} />
      <Route element={<ClientLayout />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/create" element={<CreateProjects/>}/>
        <Route path="/project/:id" element={<ProjectDetails/>}/>
      </Route>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
        <Route path="/notifications" element={<NotificationsMobile />} />
        <Route path="/form" element={<FormExample />} />
    </Routes>
  )
}

export default App