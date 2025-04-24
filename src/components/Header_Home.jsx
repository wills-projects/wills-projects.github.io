import { NavLink } from "react-router-dom";

function Header_Home()
{
    return(
    <header class="heading">
      <img
        src="./src/assets/portfolio portrait.jpg"
        alt="A headshot of William Lee"
        id="portrait"
      />
      <div id="container"> 
        <h1 class="typewriter">Welcome to my <span class="grow">Portfolio</span>!</h1>
      </div>

      {/* Horizontal Navigation Bar */}
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => isActive ? "nav_links active" : "nav_links"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? "nav_links active" : "nav_links"}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) => isActive ? "nav_links active" : "nav_links"}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leadership"
              className={({ isActive }) => isActive ? "nav_links active" : "nav_links"}
            >
              Leadership
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "nav_links active" : "nav_links"}
            >
              About Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    );
}

export default Header_Home;