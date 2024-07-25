import React from 'react';

const FullScreenMealTable = ({ meals }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const mealTypes = ['Breakfast', 'Lunch', 'Supper'];

  return (
    <div className="fullscreen-meal-table">
      <h1>Weekly Meal Planner</h1>
      <div className="meal-grid">
        {days.map(day => (
          <div key={day} className="meal-day">
            <h2>{day}</h2>
            {mealTypes.map(mealType => (
              <div key={mealType} className="meal-circle-container">
                {meals[day] && meals[day][mealType] && meals[day][mealType].name ? (
                  <>
                    <div className="meal-circle">
                      <img src={`http://localhost:5000${meals[day][mealType].picture}`} alt={meals[day][mealType].name} />
                    </div>
                    <div className="meal-name">{meals[day][mealType].name}</div>
                  </>
                ) : (
                  <p>No meal</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullScreenMealTable;
