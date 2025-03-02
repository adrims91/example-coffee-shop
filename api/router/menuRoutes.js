const express = require('express');
const { getMenu, createItem, updateItem, deleteItem, getMenuItem } = require('../controllers/menuController');
const menuRoutes = express.Router()

menuRoutes.get('/menu', getMenu)
menuRoutes.get('/menu/:id', getMenuItem)
menuRoutes.post('/menu', createItem)
menuRoutes.put('/menu/:id', updateItem)
menuRoutes.delete('/menu/:id', deleteItem)

module.exports = menuRoutes;