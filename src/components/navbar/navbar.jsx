import React from "react";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [click, setClick] = useState(false);

  const toggleMenu = () => {
    setClick(!click);
  };
  return (
    <>
      <div
        className="menu-button"
        onClick={toggleMenu}
        src="https://cdn-icons-png.freepik.com/512/2976/2976215.png?ga=GA1.1.543487733.1707214542&"
      >
        {click ? (
          <FaTimes size={30} style={{ color: "#e82628" }} />
        ) : (
          <FaBars size={30} style={{ color: "#e82628" }} />
        )}
      </div>
      <nav className="navbarr">
        <ul className={`Butonn-links ${click ? "active" : ""}`}>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li className="propos">
            <a href="#">À propos</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/" spy={true} smooth={true} offset={-320} duration={500}>
              Accueil
            </Link>
          </li>
          <li className="propos">
            <a href="#cards">À propos</a>
          </li>
          <li>
            <Link
              to="cards"
              spy={true}
              smooth={true}
              offset={-320}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div class="InputContainer">
        <input
          placeholder="Search.."
          id="input"
          class="input"
          name="text"
          type="text"
        ></input>
      </div>
    </>
  );
}
