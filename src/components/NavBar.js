import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Ensure this path is correct

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="app-name">MEALPLANNER</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/update">Update/Add Meals</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
