import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Ensure this path is correct
const NavBar = () => {
  return (
    <nav className="navbar grocery-theme">
      <div className="navbar-content">
        <div className="app-name">MetisQ</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Cuisines</Link>
          </li>
          <li>
            <Link to="/update">SNACK</Link>
          </li>
          <li>
            <Link to="/about"></Link>
          </li>
          <li>
            <Link to="./RandomMeal">Quick Meal</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
