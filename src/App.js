import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddMeal from './components/AddMeal';
import RandomMeal from './components/RandomMeal';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <div>
                <header className="header">
                    <nav className="navbar">
                        <div className="navbar-brand"></div>
                        <div className="navbar-links">
                            <Link to="/">Home</Link>
                            <Link to="/add-meal"></Link>
                            <Link to="/random-meal"></Link>
                        </div>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-meal" element={<AddMeal />} />
                    <Route path="/random-meal" element={<RandomMeal />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

