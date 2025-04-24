import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Leadership from './pages/Leadership'
import About from './pages/About'

function App() {
  return(
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/leadership" element={<Leadership/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/*" element={<Home/>}/>
        </Routes>
      </HashRouter>
    </> 
  );
}

export default App
