var express = require('express');
var app = express();

const OCP = process.env.OCP || 'variable not found error';

app.get('/', function (req, res) {
  res.send(`Hello from: ${OCP} <br> Your request: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
});

var server = app.listen(3000, function () {
var port = server.address().port;

console.log('nodejs app is listening on port %s',  port);
});