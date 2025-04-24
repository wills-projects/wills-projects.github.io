import { NavLink } from "react-router-dom";

function Header()
{
    return(
    <header class="heading">
      <img
        src="./src/assets/portfolio portrait.jpg"
        alt="A headshot of William Lee"
        id="portrait"
      />

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

export default Header;