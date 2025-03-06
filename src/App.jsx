import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import  Login  from "./pages/Login"
import Home from "./pages/Home"
import { About } from "./pages/About"
import CourseDetail from "./pages/CursoDetail"
import FileUpload from "./pages/FileUpload"

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/lista" element={<CourseDetail />}></Route>
          <Route exact path="/upload" element={<FileUpload />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App


