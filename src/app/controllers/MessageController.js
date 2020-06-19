const { Message } = require('../models');
const express = require('express');
const send = express();
const alert = require('alert');
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
        await Message.create(req.body);
        // alert('Mensagem enviada com sucesso', 'console');
        alert('Mensagem enviada com sucesso');
        return res.redirect('/');
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

}

module.exports = new MessageController();