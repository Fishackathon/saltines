// var foo = require('../config.js');

var express = require('express');
var app = express();
var mysql = require('mysql');
var model = require('../model/boat.js');

app.use(express.static('www'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(require('express-ejs-layouts'))

app.get('/test', function(req, res) {
	model.getBoats(function(err, rows) {
		res.render('index', {solution: rows[0].solution});
	});
});

var server = app.listen(GLOBAL.config.port);
