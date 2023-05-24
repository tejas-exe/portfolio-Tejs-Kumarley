import "./Header.css";
import logo from "../../Assets/logo.svg";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    if (document.getElementById("targetSection")) {
      const targetSection = document.getElementById("targetSection");
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="heading-name">Tejas Kumarley</h3>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/projects"}>Projects</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <Link to={"/?letsConnect=true"}>
            <button className="button-connect" onClick={handleClick}>
              Lets Connect
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
