var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var request = require('request');
var _ = require('underscore');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

require('./controllers/commits')(app, request);

app.listen(app.get('port'), () => 
  console.log('Express server listening on port ' + app.get('port')));

module.exports = app;