import React from "react"
import { Routes, Route } from "react-router-dom"
import ClientLayout from "./layout/Client"
import PublicLayout from "./layout/Public"

import Feed from "./views/Feed"
import Home from "./views/Home"
import LogIndex from "./views/Login"
import Projects from "./views/Projects";

function App() {

  return (
    <Routes>
      <Route path="/log" element={<LogIndex />} />
      <Route element={<ClientLayout />}>
        <Route path="/feed" element={<Feed />} />
      <Route path="/projects" element={<Projects />} />
      </Route>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />}/>
      </Route>
    </Routes>
  )
}

export default App
