
var express = require('express');
var navigator = require('./controllers/navigationController');
var app = express();

// set view engin.
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

app.get('/', function(req, res){
    res.render('home');
});

navigator(app);

// start listen to port 3000
app.listen(3000);
console.log('Listen to port 3000.');