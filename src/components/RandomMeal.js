import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomMeal = () => {
  const [meals, setMeals] = useState([]);
  const [randomMeal, setRandomMeal] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/meals');
        const mealArray = Object.values(response.data).flatMap(day => Object.values(day));
        setMeals(mealArray);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    fetchMeals();
  }, []);

  const randomizeMeal = () => {
    if (meals.length > 0) {
      const randomIndex = Math.floor(Math.random() * meals.length);
      setRandomMeal(meals[randomIndex]);
    }
  };

  return (
    <div className="random-meal-container">
      <h2>Random Meal</h2>
      <button onClick={randomizeMeal}>Randomize Meal</button>
      {randomMeal && (
        <div className="random-meal">
          <h3>{randomMeal.name}</h3>
          {randomMeal.picture && <img src={`http://localhost:5000${randomMeal.picture}`} alt={randomMeal.name} />}
        </div>
      )}
    </div>
  );
};

export default RandomMeal;
