import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MealTable.css';

const MealTable = () => {
  const [meals, setMeals] = useState({
    Sunday: { Breakfast: {}, Lunch: {}, Supper: {} },
    Monday: { Breakfast: {}, Lunch: {}, Supper: {} },
    Tuesday: { Breakfast: {}, Lunch: {}, Supper: {} },
    Wednesday: { Breakfast: {}, Lunch: {}, Supper: {} },
    Thursday: { Breakfast: {}, Lunch: {}, Supper: {} },
    Friday: { Breakfast: {}, Lunch: {}, Supper: {} },
    Saturday: { Breakfast: {}, Lunch: {}, Supper: {} },
  });

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/meals');
        const mealsData = response.data.reduce((acc, meal) => {
          if (!acc[meal.day]) {
            acc[meal.day] = { Breakfast: {}, Lunch: {}, Supper: {} };
          }
          acc[meal.day][meal.type] = meal;
          return acc;
        }, {});
        setMeals(mealsData);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div className="meal-table">
      {Object.keys(meals).map((day) => (
        <div key={day} className="meal-day">
          <h3>{day}</h3>
          {['Breakfast', 'Lunch', 'Supper'].map((type) => (
            <div key={type} className="meal-type">
              <h4>{type}</h4>
              <div className="meal">
                {meals[day][type].picture && (
                  <img src={`http://localhost:5000${meals[day][type].picture}`} alt={meals[day][type].name} />
                )}
                <p>{meals[day][type].name}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MealTable;
