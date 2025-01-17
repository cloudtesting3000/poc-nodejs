var express = require('express');
var app = express();

const OCP = process.env.OCP || 'Var. error';

app.get('/', function (req, res) {
  res.send('Hello World from ' + OCP + '\n' + req.protocol + '://' + req.get('host') + req.originalUrl);
});

var server = app.listen(8080, function () {
  var port = server.address().port;

  console.log('nodejs app is listening at port %s',  port);
});