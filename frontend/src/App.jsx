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
import Profile from "./views/Profile"

import "bootstrap/scss/bootstrap.scss";
import "./assets/scss/paper-kit.scss?v=1.3.0";
import "./assets/demo/demo.css?v=1.3.0";
import LandingPage from "./views/Landing"
import PersonalLayout from "./layout/Admin"

function App() {


  return (
    <Routes>
      <Route path="/log" element={<LogIndex />} />
      <Route element={<ClientLayout />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/create" element={<CreateProjects/>}/>
        <Route path="/project/:id" element={<ProjectDetails/>}/>
        <Route path="/notifications" element={<NotificationsMobile />} />
      </Route>
      <Route element={<PersonalLayout />}>
        <Route path="/profile/:id" element={<Profile />} />
      </Route>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
        <Route path="/notifications" element={<NotificationsMobile />} />
        <Route path="/form" element={<FormExample />} />
    </Routes>
  )
}

export default App