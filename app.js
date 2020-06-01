const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const cors = require('cors');
// const Admin = require('./routes/Admin');
// const Mensagem = require('./routes/Mensagem');
const path = require('path');
// const { Message } = require('./src/app/models');
const routes = require('./src/routes');

//config
    //template
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
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
    app.use(routes);
    // Message.create({name: 'ale', email: 'ale@alee.com', where: 'escola', phone: 943666677, message: 'ois'});
    
    // app.use('/admin', Admin)
    // app.use('/mensagem', Mensagem)

app.listen(3333, function (){
    console.log('servidor rodando na url http://localhost:3333');
});
