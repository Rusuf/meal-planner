import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Ensure this path is correct

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="app-name"></div>
        <ul className="nav-links">
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/update"></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
