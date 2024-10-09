const express = require('express');
const router = express.Router();

// Controllers
const userController = require('../controllers/userController');

// Routes
router.get('/users', userController.getUsers);

module.exports = router;
