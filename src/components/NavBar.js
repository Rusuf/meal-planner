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
            <Link to="/add-meal">New Meal</Link>
          </li>
          <li>
            <Link to="/">Snack</Link>
          </li>
          <li>
            <Link to="/random-meal">Meals Roullete</Link>
          </li>
          <li>
            <Link to="/">Groceries</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
