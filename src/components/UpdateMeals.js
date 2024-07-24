import React, { useState } from 'react';
import axios from 'axios';

const UpdateMeals = () => {
  const [newMeal, setNewMeal] = useState({ day: '', mealType: '', name: '' });
  const [selectedFile, setSelectedFile] = useState(null);

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
        setNewMeal({ day: '', mealType: '', name: '' });
        setSelectedFile(null);
        alert('Meal updated successfully');
      })
      .catch(error => console.error('Error adding meal:', error));
  };

  return (
    <div>
      <h1>Update/Add Meals</h1>
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
    </div>
  );
};

export default UpdateMeals;
