const express = require('express');
const bodyParser = require('body-parser');
const navigator = require('./controllers/navigationController');
const postControl = require('./controllers/postController');
const app = express();

// set view engin.
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// add body parser
app.use(bodyParser.urlencoded({
    extended: false
}));



navigator(app);
postControl(app);

// start listen to port 3000
app.listen(3000);
console.log('Listen to port 3000.');
