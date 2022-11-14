import React from "react"
import { Routes, Route } from "react-router-dom"
import ClientLayout from "./layout/Client"
import PublicLayout from "./layout/Public"

import Home from "./views/Home"

function App() {

  return (

  <Routes>
    <Route element={<ClientLayout/>}>
      <Route path="/" element={<Home/>}/>
    </Route>
  </Routes>

  )
}

export default App
