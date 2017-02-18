var express = require('express');
var firebase = require('firebase');
var config = require('./config');

var app = express();
var PORT = 8080;

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');

	next();
}

app.use(express.bodyParser());
app.use(allowCrossDomain);

firebase.initializeApp(config);

require('./Controller/TripController.js')(app, firebase);
require('./Controller/LocationController.js')(app, firebase);
require('./Controller/UserController.js')(app, firebase);

app.listen(PORT);  