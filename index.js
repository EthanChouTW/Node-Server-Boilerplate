const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();
var router = require('./services/router');

mongoose.connect('mongodb://localhost:introToAuth/introToAuth');
console.log('ddddd')
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/v1', router);
app.get('/', function (req, res, next) {
    console.log('hello');
})
var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || 'localhost';

console.log(PORT, HOST);

app.listen(PORT, HOST);