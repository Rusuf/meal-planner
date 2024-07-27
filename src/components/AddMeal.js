import React, { useState } from 'react';
import axios from 'axios';

const AddMeal = () => {
  const [meal, setMeal] = useState({
    day: 'Sunday',
    type: 'Breakfast',
    name: '',
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal({ ...meal, [name]: value });
  };

  const handleFileChange = (e) => {
    setMeal({ ...meal, picture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('day', meal.day);
    formData.append('type', meal.type);
    formData.append('name', meal.name);
    formData.append('picture', meal.picture);

    try {
      await axios.post('http://localhost:5000/api/meals', formData);
      alert('Meal added successfully!');
    } catch (error) {
      console.error('Error adding meal:', error);
      alert('Error adding meal');
    }
  };

  return (
    <div className="add-meal-container">
      <h2>Add a Meal</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Day:
          <select name="day" value={meal.day} onChange={handleChange}>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </label>
        <label>
          Type:
          <select name="type" value={meal.type} onChange={handleChange}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Supper">Supper</option>
          </select>
        </label>
        <label>
          Name:
          <input type="text" name="name" value={meal.name} onChange={handleChange} />
        </label>
        <label>
          Picture:
          <input type="file" name="picture" onChange={handleFileChange} />
        </label>
        <button type="submit">Add Meal</button>
      </form>
    </div>
  );
};

export default AddMeal;
