const mongoose = require('mongoose');
   const bcrypt = require('bcrypt');

   const userSchema = new mongoose.Schema({
       username: { type: String, required: [true, 'Username kiritilishi shart'], unique: true },
       email: { type: String, required: [true, 'Email kiritilishi shart'], unique: true },
       password: { type: String, required: [true, 'Parol kiritilishi shart'], minlength: 6 },
       isAdmin: { type: Boolean, default: true },
   }, { timestamps: true });

   userSchema.pre('save', async function (next) {
       if (!this.isModified('password')) return next();
       this.password = await bcrypt.hash(this.password, 10);
       next();
   });

   userSchema.methods.comparePassword = async function (candidatePassword) {
       return await bcrypt.compare(candidatePassword, this.password);
   };

   module.exports = mongoose.model('User', userSchema);