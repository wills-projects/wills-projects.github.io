import Header from '../components/Header'
import Footer from '../components/Footer'

function Experience()
{
    return(
    <>
    <Header/>
    <section>
      <ul class="experiences_list">
        <li>
          <a href="https://www.lrdc.pitt.edu/kitlab/"
            ><img src="./src/assets/kitlab.png" alt="KiTLab Logo" id="kitlab"
          /></a>
          <div class="text">
            <a href="https://www.lrdc.pitt.edu/kitlab/">Pitt KiTLab</a>
            <h3>Research Assistant (April 2023 - April 2024)</h3>
            <p>
              The Pitt Kids Thinking Lab is a group underneath the University of
              Pittsburgh. They are responsible for studying how cognitive
              abilities develop in children such as their mathematical skills.
            </p>
            <p>
              I was able to work there as a research assistant during my
              freshman and sophomore year, doing data analysis and writing
              scripts!
            </p>
          </div>
        </li>
        <li id="tartan">
          <a href="https://tartanhacks.com/"
            ><img
              src="./src/assets/tartanhacks logo.jpg"
              alt="TartanHacks Logo"
              id="tartanlogo"
          /></a>
          <div class="text">
            <a href="https://tartanhacks.com/">TartanHacks</a>
            <h3>Hackathon Organizer (February 2025)</h3>
            <p>
              ScottyLabs is an organization affiliated with Carnegie Mellon
              University, and I had the pleasure of helping them organize the
              biggest hackathon in Pittsburgh.
            </p>
            <p>
              This opportunity involved coordinating sponsors with hackers,
              hosting workshops to enhance the experience of participants, and
              judging the final projects to award the prizes!
            </p>
          </div>
        </li>
        <li>
          <a href="https://www.howmet.com/"
            ><img
              src="./src/assets/howmet aerospace.webp"
              alt="Howmet Aerospace Logo"
              id="howmet"
          /></a>
          <div class="text">
            <a href="https://www.howmet.com/">Howmet Aerospace</a>
            <h3>IT Applications Developer (June 2025...)</h3>
            <p>Coming soon May 2025...</p>
          </div>
        </li>
      </ul>
    </section>
    <Footer/>
    </> 
    );
}

export default Experience;