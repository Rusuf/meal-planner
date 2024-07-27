const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5000;

// Configure Multer
const upload = multer({ dest: 'uploads/' });

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware to parse JSON
app.use(express.json());

// Route to handle meal uploads
app.post('/api/meals', upload.single('image'), (req, res) => {
    console.log(req.body); // Log form fields
    console.log(req.file); // Log uploaded file

    const { name } = req.body;
    const image = req.file;

    if (!name || !image) {
        return res.status(400).send('Missing name or image');
    }

    // Process the meal data (e.g., save to database or file system)
    // For simplicity, we'll just send a success response

    res.status(200).send('Meal added successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
