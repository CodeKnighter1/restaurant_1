const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async ({ username, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email already in use');
  }
  const isAdmin = email === 'rahmonqulqoraboyev01@gmail.com';
  const user = new User({ username, email, password, isAdmin }); // Parol modelda hash qilinadi
  await user.save();
  return { ...user.toObject(), isAdmin }; // Parolni qaytarmaslik uchun toObject ishlatildi  
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }
  const isMatch = await user.comparePassword(password); // Modeldagi metod
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }
  const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { user: { email: user.email, isAdmin: user.isAdmin }, token };
};