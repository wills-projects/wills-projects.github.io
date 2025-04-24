import Header from '../components/Header'
import Footer from '../components/Footer'

function Projects()
{
    return(
    <>
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
              src="./src/assets/operating systems graphics library.png"
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