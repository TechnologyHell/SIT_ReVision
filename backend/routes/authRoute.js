const express = require('express');
const router = express.Router();

const { register, login, fetchCounts, searchItems } = require('../controllers/authController');
const authenticateAndAuthorize = require('../middlewares/authenticateAndAuthorize'); // Authentication and authorization middleware

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

router.get('/count', authenticateAndAuthorize('admin'), fetchCounts)

router.get('/search',searchItems)

module.exports = router;