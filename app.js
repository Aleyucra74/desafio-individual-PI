const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');


//config
    //template
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //bodyparser
    app.use(bodyparser.urlencoded({extended:false}))
    app.use(bodyparser.json())

//routes
    app.get('/home', function(req,res){
        res.render('form')
    })


app.listen(3333, function (){
    console.log('servidor rodando na url http://localhost:3333');
});
