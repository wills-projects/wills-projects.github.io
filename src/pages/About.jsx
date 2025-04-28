import { useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
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

  return (
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
      <Header />
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
      <Footer />
    </>
  );
}

export default About;