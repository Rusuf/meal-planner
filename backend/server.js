const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// In-memory storage for meals (in a real application, use a database)
let meals = [];

// Configure Multer with file type and size restrictions
const upload = multer({
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Error: File upload only supports the following filetypes - ' + filetypes));
    },
    limits: { fileSize: 2 * 1024 * 1024 } // 2MB limit
});

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route to handle meal uploads
app.post('/api/meals', upload.single('picture'), (req, res) => {
    console.log('Request received: ', req.body); // Log form fields
    console.log('File received: ', req.file); // Log uploaded file

    const { day, type, name } = req.body;
    const image = req.file;

    if (!day || !type || !name || !image) {
        console.error('Missing required fields');
        return res.status(400).send('Missing required fields');
    }

    // Add meal to in-memory storage
    const meal = {
        id: meals.length + 1, // Simple ID assignment
        day,
        type,
        name,
        imageUrl: `/uploads/${image.filename}`
    };
    meals.push(meal);

    console.log('Meal added successfully:', meal);
    res.status(200).send('Meal added successfully');
});

// Route to fetch meals
app.get('/api/meals', (req, res) => {
    res.json(meals);
});

// Error handling middleware for Multer
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        console.error('Multer error:', err.message);
        return res.status(400).send('Multer Error: ' + err.message);
    } else if (err) {
        console.error('Server error:', err.message);
        return res.status(500).send('Server Error: ' + err.message);
    }
    next();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
