const express = require('express')
const UserController = require('../src/app/controllers/UserController')

const routes = express.Router()

routes.get('/signup', UserController.create)

routes.post('/signup', UserController.store)

module.exports = routes
