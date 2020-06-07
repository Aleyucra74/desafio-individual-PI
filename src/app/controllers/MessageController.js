const { Message } = require('../models');
const express = require('express');
const send = express();

class MessageController {
  async index(req, res) {
    try {
      const messages = await Message.findAll().then(function(mensagem) {
       return res.render('messages', {mensagem:mensagem});
      //  return console.log(mensagem);
      });

      // return res.json(messages);
      return messages;
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const message = await Message.create(req.body);

      return res.json(message);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

}

module.exports = new MessageController();