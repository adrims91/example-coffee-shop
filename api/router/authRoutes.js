const express = require('express');
const {  login } = require('../controllers/authControllers');
const authRoutes = express.Router()

// authRoutes.post('/register', register)
authRoutes.post('/login', login)


module.exports = authRoutes;