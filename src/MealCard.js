import React from 'react';

const MealCard = ({ meal }) => {
  if (!meal || !meal.name) return <p>No meal</p>;

  return (
    <div>
      <img src={meal.picture} alt={meal.name} width="100" height="100" />
      <p>{meal.name}</p>
    </div>
  );
};

export default MealCard;
