import { NavLink } from "react-router-dom";
import "./navbar.css";
import menuIcon from "../../assets/menu.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">VENUGOPAL S P</div>
      <ul className={`navlinks ${isOpen ? "navlinks-mobile" : ""}`}>
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#project">
          <li>Projects</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <img src={menuIcon} alt="" />
      </button>
    </nav>
  );
};

export default Navbar;
