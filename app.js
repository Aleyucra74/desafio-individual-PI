const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequilize = require('sequelize');


//config
    //template
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //conexao bd
    const sequelize = new Sequilize('testenode', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    })
    
    sequelize.authenticate().then(function(){
        console.log('conectado com sucesso');
    }).catch(function(erro){
        console.log('falha ao se conectar'+erro);
    })

//routes
    app.get('/home', function(req,res){
        res.render('form')
    })


app.listen(3333, function (){
    console.log('servidor rodando na url http://localhost:3333');
});