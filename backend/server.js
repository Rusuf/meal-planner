const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Ensure uploads directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// Storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

let meals = {
  Sunday: { Breakfast: {}, Lunch: {}, Supper: {} },
  Monday: { Breakfast: {}, Lunch: {}, Supper: {} },
  Tuesday: { Breakfast: {}, Lunch: {}, Supper: {} },
  Wednesday: { Breakfast: {}, Lunch: {}, Supper: {} },
  Thursday: { Breakfast: {}, Lunch: {}, Supper: {} },
  Friday: { Breakfast: {}, Lunch: {}, Supper: {} },
  Saturday: { Breakfast: {}, Lunch: {}, Supper: {} },
};

// Endpoint to get all meals
app.get('/api/meals', (req, res) => {
  res.json(meals);
});

// Endpoint to update or add a meal
app.post('/api/meals', upload.single('picture'), (req, res) => {
  const { day, type, name } = req.body;
  const picture = req.file ? `/uploads/${req.file.filename}` : null;

  if (meals[day] && meals[day][type]) {
    meals[day][type] = { name, picture };
    res.status(200).json({ message: 'Meal updated successfully!' });
  } else {
    res.status(400).json({ message: 'Invalid day or meal type.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
