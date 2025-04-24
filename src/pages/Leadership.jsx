import Header from '../components/Header'
import Footer from '../components/Footer'

function Leadership()
{
    return(
    <>
    <Header/>
    <section>
      <ul class="leadership_list">
        <li>
          <div class="text">
            <a
              href="https://www.music.pitt.edu/performance/ensembles/jazz-ensemble"
              >Pitt Jazz Ensemble</a>
            <h3>Vice President (April 2024 - Current)</h3>
            <p>
              The Pitt Jazz Ensemble has been an amazing experience for me. I
              recently became the vice president of the jazz band, where I
              collaborate with the rest of the board members to purchase music,
              organize auditions, and schedule sectionals!
            </p>
            <p>
              If you're interested to hear more, check us out by clicking on the
              image or swing by one of our many jazz concerts throughout the
              year!
            </p>
          </div>
          <a
            href="https://www.music.pitt.edu/performance/ensembles/jazz-ensemble"
            ><img
              src="./src/assets/piano setup.jpg"
              alt="Picture of a red digital keyboard next to a lamp"
              id="piano"
          /></a>
        </li>
        <li>
          <a href="https://discord.gg/KS2rZrHX5E"
            ><img
              src="./src/assets/valorant desktop icon.webp"
              alt="The VALORANT logo in a super cool colorway!"
              id="valorant"
          /></a>
          <div class="text">
            <a href="https://discord.gg/KS2rZrHX5E">VALORANT Club at Pitt</a>
            <h3>President (August 2023 - Current)</h3>
            <p>
              The VALORANT Club at Pitt is a personal project I started back in
              my freshman year, which has blossomed into something incredible.
              VALORANT is a new tactical shooter video game that has a large
              community among younger audiences.
            </p>
            <p>
              As the club president, I've been responsible for coordinating club
              events, facilitating club growth through our <a href="https://discord.gg/KS2rZrHX5E" id="discord">Discord</a> server, 
              and even hosting VALORANT tournaments for other Pitt students!
            </p>
          </div>
        </li>
      </ul>
    </section>
    <Footer/>
    </> 
    );
}

export default Leadership;