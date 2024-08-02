import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MealTable from './MealTable'; // Import the MealTable component
import './NavBar.css'; // Ensure this path is correct

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-footer-container">
      <nav className="navbar grocery-theme">
        <div className="navbar-content">
          <div className="app-name">MetisQ</div>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
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
              <Link to="/random-meal">Meals Roulette</Link>
            </li>
            <li>
              <Link to="/">Groceries</Link>
            </li>
          </ul>
        </div>
      </nav>
      <MealTable /> {/* Add the MealTable component here */}
      <footer className="nav-footer">
        <p>&copy; 2024 MetisQ. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NavBar;
