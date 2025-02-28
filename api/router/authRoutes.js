const express = require('express');
const { register } = require('../controllers/authControllers');
const authRoutes = express.Router()

authRoutes.get('/register', register)

module.exports = authRoutes;