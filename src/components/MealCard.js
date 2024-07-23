import React from 'react';

const MealCard = ({ meal }) => {
  return (
    <div>
      {meal.picture ? (
        <img src={meal.picture} alt={meal.name} width="100" height="100" />
      ) : (
        <p>No image</p>
      )}
      <p>{meal.name || 'No meal name'}</p>
    </div>
  );
};

export default MealCard;

