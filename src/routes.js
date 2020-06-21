const { Router } = require('express');
const MessageController = require('./app/controllers/MessageController');
const UserController = require('./app/controllers/UserController');
const { Message } = require('../src/app/models');
const { celebrate, Joi } = require('celebrate');

const routes = Router();

routes.get('/show', MessageController.index);

routes.post('/new', celebrate({
    body: Joi.object().keys({
        name: Joi.string().required().error( new Error('Nome é necessario')),
        email: Joi.string().required().email().error( new Error('Email é necessario')),
        onde: Joi.string().required().error( new Error('Local é necessario')),
        phone: Joi.number().required().error( new Error('Numero é necessario')),
        message: Joi.string().required().error( new Error('Mensagem é necessario')),
    })
}, {
    abortEarly:false
}), MessageController.store);
routes.post('/logar', UserController.auth);
module.exports = routes;