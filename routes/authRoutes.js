const express = require('express');
const { createUser } = require('../controllers/authController');
const router = express.Router()

//sign-up routes
router.post('/register', createUser);

module.exports = router