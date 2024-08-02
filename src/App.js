import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar'; // Ensure this path is correct
import AddMeal from './components/AddMeal';
import RandomMeal from './components/RandomMeal';
import Home from './components/Home';
import MealTable from './components/MealTable';
import './App.css'; // Ensure this path is correct

const App = () => {
    const location = useLocation();

    const getBackgroundClass = () => {
        switch (location.pathname) {
            case '/':
                return 'home-background';
            case '/add-meal':
                return 'add-meal-background';
            case '/random-meal':
                return 'random-meal-background';
            case '/meal-table':
                return 'meal-table-background';
            default:
                return '';
        }
    };

    return (
        <div className={getBackgroundClass()}>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-meal" element={<AddMeal />} />
                <Route path="/random-meal" element={<RandomMeal />} />
                <Route path="/meal-table" element={<MealTable />} />
            </Routes>
        </div>
    );
};

const AppWithRouter = () => (
    <Router>
        <App />
    </Router>
);

export default AppWithRouter;
