import { useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Projects()
{
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
    <Header/>
    <section>
      <ul class="projects_list">
        <li>
          <div class="text">
            <h2>Virtual Machine Graphics Library</h2>
            <h3><i>C, QEMU, Linux, WinSCP</i></h3>
            <p>
              For this project, I developed a simple graphics library in C using
              strictly Linux system calls! This library ran in a virtual machine
              environment, specifically one called QEMU. The library used
              functions that manipulated a framebuffer for pixel-based graphics
              which is what you see in the drawing below!
            </p>
            <p>
              This project involved many elements, such as handling user input,
              drawing shapes, and utilizing specific system calls such as mmap()
              for efficient memory access.
            </p>
          </div>
          <a href=""
            ><img
              src="/operating systems graphics library.png"
              alt="Picture of a red digital keyboard next to a lamp"
          /></a>
        </li>
      </ul>
    </section>
    <Footer/>
    </> 
    );
}

export default Projects;