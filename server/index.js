var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var AuthRouter = require('./Item/AuthRouter')


var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));


app.use('/api/auth', AuthRouter)

app.get('/', function (req, res) {
  res.json({ message: 'Welcome to the Poke-MongoDB RESTful API!' });
});

var PORT = 3000;

app.listen(PORT, function () {
  console.log('MongoDB RESTful API listening on http://localhost:' + PORT);
});
