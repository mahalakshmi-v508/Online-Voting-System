import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faSignInAlt, faInfoCircle, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <img
          src={require("../../images/vote.png")} // Ensure TypeScript knows about image imports
          alt="Election Commission Logo"
          className="nav-logo"
        />
        <h1 className="nav-title">ONLINE VOTING</h1>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>
      <nav className={`nav-right ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-menu">
          <li>
            <Link className="nav-link" to="/" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </Link>
          </li>
          <li>
            <div className="registerheader">
              <Link className="nav-link" to="/register" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faUser} /> Register
              </Link>
            </div>
          </li>
          <li>
            <Link className="nav-link" to="/login" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
