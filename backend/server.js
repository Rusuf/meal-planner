const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let meals = {
  Saturday: { Breakfast: { name: 'Pancakes', picture: 'pancakes.jpg' }, Lunch: {}, Supper: {} },
  Sunday: { Breakfast: { name: 'Pancakes', picture: 'pancakes.jpg' }, Lunch: {}, Supper: {} },
  Monday: { Breakfast: { name: 'Pancakes', picture: 'pancakes.jpg' }, Lunch: {}, Supper: {} },
  Tuesday: { Breakfast: { name: 'Pancakes', picture: 'pancakes.jpg' }, Lunch: {}, Supper: {} },
  Wednesday: { Breakfast: { name: 'Pancakes', picture: 'pancakes.jpg' }, Lunch: {}, Supper: {} },
  Thursday: { Breakfast: { name: 'Pancakes', picture: 'pancakes.jpg' }, Lunch: {}, Supper: {} },
  Friday: { Breakfast: { name: 'Pancakes', picture: 'pancakes.jpg' }, Lunch: {}, Supper: {} },
  // Define other days similarly...
};

app.get('/api/meals', (req, res) => {
  res.json(meals);
});

app.post('/api/meals', (req, res) => {
  const { day, mealType, meal } = req.body;
  if (meals[day]) {
    meals[day][mealType] = meal;
    res.json({ message: 'Meal updated' });
  } else {
    res.status(400).json({ message: 'Invalid day' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
