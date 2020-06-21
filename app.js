const express = require('express');
const app = express();
const hbs = require('handlebars');
const handlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');
const cors = require('cors');
const {Messagem} = require('./src/app/models/Message');
const sequelize = require('sequelize');
const { errors } = require('celebrate');
// const Admin = require('./routes/Admin');
// const Mensagem = require('./routes/Mensagem');
const path = require('path');
// const { Message } = require('./src/app/models');
const routes = require('./src/routes');

//config
    //template
    app.engine('handlebars', handlebars({
        defaultLayout: 'main',
        handlebars: allowInsecurePrototypeAccess(hbs),
        helpers: {
            toJson: function(obj){
                let a = JSON.stringify(obj);
                return console.log(a.id);
            }
        },
    }));
    app.set('view engine', 'handlebars')
    //bodyparser
    app.use(bodyparser.urlencoded({extended:false}))
    app.use(bodyparser.json())
    //cors
    app.use(cors())
    //public
    app.use(express.static(path.join(__dirname,'public')));
//routes
    app.get('/', function(req, res){
        res.render('body')
    })
    app.get('/login', function(req, res){
        res.render('login')
    })
    // app.get('/show',async function(req,res) {
    //     await Messagem.findAll().then(function(mensagem) {
    //         res.render('messages', {mensagem:mensagem});
    //     })
    // });
    app.use(routes);
    // Message.create({name: 'ale', email: 'ale@alee.com', where: 'escola', phone: 943666677, message: 'ois'});
    
    // app.use('/admin', Admin)
    // app.use('/mensagem', Mensagem)
    app.use(errors());
app.listen(3333, function (){
    console.log('servidor rodando na url http://localhost:3333');
});
