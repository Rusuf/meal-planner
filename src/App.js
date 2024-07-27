import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AddMeal from './components/AddMeal';
import FullScreenMealTable from './components/ FullScreenMealTable';
import RandomMeal from './components/RandomMeal';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h1 className="app-title">MEALPLANNER</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-meal">Add Meal</Link></li>
            <li><Link to="/random-meal">Randomize Meal</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-meal" element={<AddMeal />} />
          <Route path="/random-meal" element={<RandomMeal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
