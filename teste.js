const Sequilize = require('sequelize');

const sequelize = new Sequilize('testenode', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('conectado com sucesso');
}).catch(function(erro){
    console.log('falha ao se conectar'+erro);
})