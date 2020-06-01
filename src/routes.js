const { Router } = require('express');
const MessageController = require('./app/controllers/MessageController');

const routes = Router();

routes.get('/show', MessageController.index);

routes.post('/new', MessageController.store);

module.exports = routes;