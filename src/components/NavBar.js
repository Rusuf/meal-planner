import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MealTable from './MealTable'; // Import the MealTable component
import Home from './Home'; // Import the Home component
import RandomMeal from './RandomMeal';
import AddMeal from './AddMeal';
import SnackPage from './SnackPage';
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cuisines">Cuisines</Link>
            </li>
            <li>
              <Link to="/add-meal">New Meal</Link>
            </li>
            <li>
              <Link to="/snack">Snack</Link>
            </li>
            <li>
              <Link to="/random-meal">Meals Roulette</Link>
            </li>
            <li>
              <Link to="/groceries">Groceries</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisines" element={<MealTable />} />
          <Route path="/random-meal" element={<RandomMeal />} />
          <Route path="/add-meal" element={<AddMeal />} />
          <Route path="/snack" element={<SnackPage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
      <footer className="nav-footer">
        <p>&copy; 2024 MetisQ. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NavBar;
