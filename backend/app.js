// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'], // Allow both ports
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json());
require('dotenv').config();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Serverda xato yuz berdi' });
});

// app.use('/api/auth', require('./routes/user.route'));
app.use('/api/auth', require('./routes/user.route'));
app.use('/api', require('./routes/card.route'));
app.use('/api', require('./routes/hotel.route'))

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { // Changed to MONGO_URI
      serverSelectionTimeoutMS: 5000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

connectDb();