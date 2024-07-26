import React, { useState, useEffect } from 'react';
import MealTable from './MealTable';
import NavBar from './NavBar';

const Home = () => {
  const [meals, setMeals] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/meals')
      .then(response => response.json())
      .then(data => setMeals(data))
      .catch(error => console.error('Error fetching meals:', error));
  }, []);

  if (!meals) {
    return <div>Loading meals...</div>;
  }

  return (
    <div>
      <NavBar />
      <MealTable meals={meals} />
    </div>
  );
};

export default Home;
