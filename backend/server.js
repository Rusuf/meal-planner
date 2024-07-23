const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'public/uploads/' });

app.use(cors());
app.use(bodyParser.json());

// Ensure uploads directory exists
if (!fs.existsSync('public/uploads')) {
  fs.mkdirSync('public/uploads');
}

let meals = {
  Sunday: { Breakfast: { name: 'Pancakes', picture: '/uploads/pancakes.jpg' }, Lunch: {}, Supper: {} },
  Monday: { Breakfast: {}, Lunch: {}, Supper: {} },
  Tuesday: { Breakfast: {}, Lunch: {}, Supper: {} },
  Wednesday: { Breakfast: {}, Lunch: {}, Supper: {} },
  Thursday: { Breakfast: {}, Lunch: {}, Supper: {} },
  Friday: { Breakfast: {}, Lunch: {}, Supper: {} },
  Saturday: { Breakfast: {}, Lunch: {}, Supper: {} },
};

app.get('/api/meals', (req, res) => {
  res.json(meals);
});

app.post('/api/meals', upload.single('picture'), (req, res) => {
  const { day, mealType, name } = req.body;
  if (req.file) {
    const picturePath = `/uploads/${req.file.filename}`;
    if (meals[day]) {
      meals[day][mealType] = { name, picture: picturePath };
      res.json({ message: 'Meal updated', picture: picturePath });
    } else {
      res.status(400).json({ message: 'Invalid day' });
    }
  } else {
    res.status(400).json({ message: 'No file uploaded' });
  }
});

app.put('/api/meals', upload.single('picture'), (req, res) => {
  const { day, mealType, name } = req.body;
  if (req.file) {
    const picturePath = `/uploads/${req.file.filename}`;
    if (meals[day]) {
      meals[day][mealType] = { name, picture: picturePath };
      res.json({ message: 'Meal updated', picture: picturePath });
    } else {
      res.status(400).json({ message: 'Invalid day' });
    }
  } else {
    res.status(400).json({ message: 'No file uploaded' });
  }
});

app.delete('/api/meals', (req, res) => {
  const { day, mealType } = req.body;
  if (meals[day] && meals[day][mealType]) {
    meals[day][mealType] = {};
    res.json({ message: 'Meal deleted' });
  } else {
    res.status(400).json({ message: 'Invalid day or meal type' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
