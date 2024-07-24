import React from 'react';

const MealCard = ({ meal }) => {
  return (
    <div>
      <p>{meal.name}</p>
      {meal.picture && <img src={`http://localhost:5000${meal.picture}`} alt={meal.name} style={{ width: '100px' }} />}
    </div>
  );
};

export default MealCard;
