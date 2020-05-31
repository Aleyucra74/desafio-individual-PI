const db = require('./db');

const Post = db.sequelize.define('mensagem', {
    nome: {
        type: db.Sequelize.STRING,
              allowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
              unique: true,
              allowNull: false
    },
    onde: {
        type: db.Sequelize.STRING,
              allowNull: false
    },
    numero: {
        type: db.Sequelize.INTEGER(11),
              allowNull: true
    },
    message: {
        type: db.Sequelize.STRING,
              allowNull: false
    }
})

module.exports = Post
// Post.sync({force:true})