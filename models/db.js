const Sequilize = require('sequelize');

//conexao bd
const sequelize = new Sequilize('mensagens', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('conectado com sucesso');
}).catch(function(erro){
    console.log('falha ao se conectar'+erro);
})


module.exports = {
    Sequelize: Sequilize,
    sequelize: sequelize
}