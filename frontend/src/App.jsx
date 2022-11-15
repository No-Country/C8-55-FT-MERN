import React from "react"
import { Routes, Route } from "react-router-dom"
import ClientLayout from "./layout/Client"
import PublicLayout from "./layout/Public"

import Home from "./views/Home"
import LogIndex from "./views/Login"

function App() {

  return (

  <Routes>
    <Route path="/log" element={<LogIndex/>} />
    <Route element={<ClientLayout/>}>
      <Route path="/" element={<Home/>}/>
    </Route>
  </Routes>

  )
}

export default App
