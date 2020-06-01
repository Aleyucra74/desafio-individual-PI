const { Message } = require('../models');

class MessageController {
  async index(req, res) {
    try {
      const messages = await Message.findAll();

      return res.json(messages);
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