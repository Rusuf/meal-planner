import React from 'react';

const MealCard = ({ meal }) => {
  return (
    <div>
      <img src={`http://localhost:5000${meal.picture}`} alt={meal.name} style={{ width: '100px', height: '100px' }} />
      <p>{meal.name}</p>
    </div>
  );
};

export default MealCard;
