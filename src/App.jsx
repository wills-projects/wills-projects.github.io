import React from "react";
import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Leadership from './pages/Leadership'
import About from './pages/About'

function App() {
  useEffect(() => {
    const logos = document.querySelectorAll('.background_div');
    
    const backgroundColor = [ '#A3B18A', '#8D9F6C', '#5C6E3D', '#8D9F6C', '#94A684'];
    
    
    for (let i = 0; i < logos.length; i++) {
        logos[i].style.setProperty('--i', i);
        logos[i].style.setProperty('--d', Math.random() * 8);
        logos[i].style.setProperty('--a', Math.random() * 8 + 4);
        logos[i].style.setProperty('--y', Math.floor(Math.random() * 100));
    
        const randColor = backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
        logos[i].style.setProperty('--color', randColor);
        }
    }, []); 

  return(
    <>
      <section className="background">
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>

        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>

        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>

        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
        <div className="background_div"></div>
      </section>
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
