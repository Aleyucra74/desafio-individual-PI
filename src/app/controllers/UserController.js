const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const alert = require('alert');

const { User } = require('../models');
users.use(cors())

process.env.SECRET_KEY = 'secret'

class UserController {
    async auth(req, res) {
        try {
            const usuario = await User.findOne({
                where: {
                  email: req.body.email
                }
              })
              .then(user => {
                if (user) {
                  if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                      expiresIn: 1440
                    })
                    alert(token, 'console');
                    res.render('messages', {user:user});
                    return res.redirect('/show');
                  }
                } else {
                  res.status(400).json({ error: 'User does not exist' })
                }
              })
              .catch(err => {
                res.status(400).json({ error: err })
              })
              return usuario;
        } catch (error) {
          return res.status(400).json({ error: err.message });
        }
    }

}

module.exports = new UserController();