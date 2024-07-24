import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealTable from './MealTable';

const Home = () => {
  const [meals, setMeals] = useState({});

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = () => {
    axios.get('http://localhost:5000/api/meals')
      .then(response => {
        setMeals(response.data);
      })
      .catch(error => console.error('Error fetching meals:', error));
  };

  const handleDelete = (day, mealType) => {
    axios.delete('http://localhost:5000/api/meals', { data: { day, mealType } })
      .then(response => {
        fetchMeals();
      })
      .catch(error => console.error('Error deleting meal:', error));
  };

  return (
    <div>
      <h1>Weekly Meal Planner</h1>
      {Object.keys(meals).length > 0 ? <MealTable meals={meals} onDelete={handleDelete} /> : <p>Loading meals...</p>}
    </div>
  );
};

export default Home;
