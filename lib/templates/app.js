const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = require('./config/db');

// Connect to the database
db();

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/api'));

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the MVC Backend!');
});

module.exports = app;
