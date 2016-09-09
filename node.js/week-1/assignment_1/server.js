var express = require ('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var dishRouter = require ('./dishRouter');
var promoRouter = require ('./promoRouter');
var leaderRouter = require ('./leaderRouter');


var hostname = 'localhost';
var port = 3000;

var app = express();


app.use(morgan('dev'));

app.use('/dishes', dishRouter);
app.use('/leadership', leaderRouter);
app.use('/promotions', promoRouter);
app.use(function(req, res, next) {
  res.status = 404;
  res.end("Error: Cannot " + req.method + " " + req.url + " it's not implemented ");
});


app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log('Server running at http://${hostname}:${port}/');
});
