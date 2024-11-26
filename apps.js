const express = require('express');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/booksRoutes');
const membersRoutes = require('./routes/membersRoutes');
const staffRoutes = require('./routes/staffRoutes');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
app.use('/api/books', booksRoutes);
app.use('/api/members', membersRoutes);
app.use('/api/staff', staffRoutes);

module.exports = app;