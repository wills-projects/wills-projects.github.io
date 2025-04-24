import Header from '../components/Header'
import Footer from '../components/Footer'

function About()
{
    return(
    <>
    <Header/>
    <section id="about_section">
      <h2 id="about_me">About Me</h2>
      <p>
        Hey there! My name is William Lee. I'm currently a junior at the
        University of Pittsburgh studying in computer and information science.
        I'm an aspiring software developer, focusing on full stack development
        and IT. This summer I'm excited to join Howmet Aerospace as their IT
        applications development intern! I hope you'll join me along the way for
        this awesome journey.
      </p>
      <p>
        In my free time, I enjoy playing video games, practicing piano, and
        going out with friends! I've recently enjoyed playing the game Summoners
        War and performing on stage with the Pitt Jazz Ensemble. I hope you
        enjoy looking around my portfolio, while you're here check out my <a href="./William Lee Software Engineer Resume.pdf" id="resume">resume</a>!
      </p>
    </section>
    <Footer/>
    </> 
    );
}

export default About;