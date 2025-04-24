
function Footer()
{
    return(
    <footer class="footing">
      <ul class="footer_icons">
        <li>
          <a href="./home"
            ><img src="./src/assets/home icon.png" alt="Home Icon" />
            <p>Home</p></a>
        </li>
        <li>
          <a href="./about"
            ><img
              src="./src/assets/about me icon.png"
              alt="Info/About Me Icon"
            />
            <p>About Me</p></a>
        </li>
        <li>
          <a href="mailto:williampaullee@gmail.com"
            ><img
              src="./src/assets/contact me icon.png"
              alt="Telephone/Contact Me Icon"
            />
            <p>Contact</p></a>
        </li>
      </ul>
    </footer>
    );
}

export default Footer;