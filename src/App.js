import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealTable from './components/MealTable';
import './App.css';

const App = () => {
  const [meals, setMeals] = useState({});
  const [newMeal, setNewMeal] = useState({ day: '', mealType: '', name: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = () => {
    axios.get('http://localhost:5000/api/meals')
      .then(response => {
        setMeals(response.data);
      })
      .catch(error => console.error('Error fetching meals:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeal(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('day', newMeal.day);
    formData.append('mealType', newMeal.mealType);
    formData.append('name', newMeal.name);
    if (selectedFile) {
      formData.append('picture', selectedFile);
    }

    axios.post('http://localhost:5000/api/meals', formData)
      .then(response => {
        fetchMeals();
        setNewMeal({ day: '', mealType: '', name: '' });
        setSelectedFile(null);
      })
      .catch(error => console.error('Error adding meal:', error));
  };

  const handleDelete = (day, mealType) => {
    axios.delete('http://localhost:5000/api/meals', { data: { day, mealType } })
      .then(response => {
        fetchMeals();
      })
      .catch(error => console.error('Error deleting meal:', error));
  };

  return (
    <div>
      <h1>Weekly Meal Planner</h1>
      <form onSubmit={handleSubmit}>
        <select name="day" value={newMeal.day} onChange={handleInputChange}>
          <option value="">Select Day</option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
        <select name="mealType" value={newMeal.mealType} onChange={handleInputChange}>
          <option value="">Select Meal Type</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Supper">Supper</option>
        </select>
        <input type="text" name="name" placeholder="Meal Name" value={newMeal.name} onChange={handleInputChange} />
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Add/Update Meal</button>
      </form>
      {Object.keys(meals).length > 0 ? <MealTable meals={meals} onDelete={handleDelete} /> : <p>Loading meals...</p>}
    </div>
  );
};

export default App;
