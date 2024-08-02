import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomMeal.css'; // Import the CSS file for styling

const RandomMeal = () => {
  const [meals, setMeals] = useState([]);
  const [randomMeal, setRandomMeal] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await axios.get('http://localhost:5000/api/meals');
        setMeals(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching meals:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    }

    fetchMeals();
  }, []);

  const pickRandomMeal = () => {
    if (meals.length > 0) {
      const randomIndex = Math.floor(Math.random() * meals.length);
      setRandomMeal(meals[randomIndex]);
    }
  };

  return (
    <div className="random-meal-container">
      {loading ? (
        <div className="loading-message">Loading meals...</div>
      ) : (
        <>
          <div className="meal-wheel">
            {meals.map((meal) => (
              <div key={meal.id} className="meal-item">
                {meal.imageUrl && (
                  <img
                    src={`http://localhost:5000${meal.imageUrl}`}
                    alt={meal.name}
                    className="meal-image"
                  />
                )}
                <div className="meal-name">{meal.name}</div>
              </div>
            ))}
          </div>
          <button className="randomize-button" onClick={pickRandomMeal}>
            Pick a Random Meal
          </button>
          {randomMeal && (
            <div className="random-meal-result">
              <h2>Your Random Meal</h2>
              <div className="meal-item">
                {randomMeal.imageUrl && (
                  <img
                    src={`http://localhost:5000${randomMeal.imageUrl}`}
                    alt={randomMeal.name}
                    className="meal-image"
                  />
                )}
                <div className="meal-name">{randomMeal.name}</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RandomMeal;