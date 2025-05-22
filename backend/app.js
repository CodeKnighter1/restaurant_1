const express = require('express');
require('dotenv').config();
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 8080;

app.use('/api')

const connectDB = () => {
    try {
        mongoose.connect().then(() => console.log('Connected to MongoDB'))
    } catch (error) {
        console.error('Error connecting to the database:', error);

    }
}

app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);
