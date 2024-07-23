import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealTable from './MealTable';
import './App.css';

const App = () => {
  const [meals, setMeals] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/meals')
      .then(response => {
        console.log('Fetched meals:', response.data); // Debugging log
        setMeals(response.data);
      })
      .catch(error => console.error('Error fetching meals:', error));
  }, []);

  return (
    <div>
      <h1>Weekly Meal Planner</h1>
      {Object.keys(meals).length > 0 ? <MealTable meals={meals} /> : <p>Loading meals...</p>}
    </div>
  );
};

export default App;
