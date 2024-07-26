import React, { useState } from 'react';

const UpdateMeals = () => {
  const [mealData, setMealData] = useState({
    day: 'Sunday',
    type: 'Breakfast',
    name: '',
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMealData({
      ...mealData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setMealData({
      ...mealData,
      picture: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('day', mealData.day);
    formData.append('type', mealData.type);
    formData.append('name', mealData.name);
    formData.append('picture', mealData.picture);

    try {
      const response = await fetch('http://localhost:5000/api/meals', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Meal updated successfully!');
      } else {
        alert('Failed to update meal.');
      }
    } catch (error) {
      console.error('Error updating meal:', error);
    }
  };

  return (
    <div>
      <h2>Update/Add Meals</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Day:
          <select name="day" value={mealData.day} onChange={handleChange}>
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
          Meal Type:
          <select name="type" value={mealData.type} onChange={handleChange}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Supper">Supper</option>
          </select>
        </label>
        <label>
          Meal Name:
          <input
            type="text"
            name="name"
            value={mealData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Meal Picture:
          <input type="file" name="picture" onChange={handleFileChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateMeals;
