import React from 'react';
import MealCard from './MealCard';

const MealTable = ({ meals }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const mealTypes = ['Breakfast', 'Lunch', 'Supper'];

  return (
    <table>
      <thead>
        <tr>
          <th>Day</th>
          {mealTypes.map(mealType => (
            <th key={mealType}>{mealType}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {days.map(day => (
          <tr key={day}>
            <td>{day}</td>
            {mealTypes.map(mealType => (
              <td key={mealType}>
                <MealCard meal={meals[day][mealType]} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MealTable;
