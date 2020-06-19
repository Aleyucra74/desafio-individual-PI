const { Router } = require('express');
const MessageController = require('./app/controllers/MessageController');
const UserController = require('./app/controllers/UserController');
const { Message } = require('../src/app/models');


const routes = Router();

routes.get('/show', MessageController.index);

routes.post('/new', MessageController.store);
routes.post('/logar', UserController.auth);
module.exports = routes;