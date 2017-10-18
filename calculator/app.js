
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , calculate=require('./routes/calculate');

var app = express();

// all environments
app.set('port', process.env.PORT || 3233);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
// development only
app.get('/', calculate.getInput);
app.post('/result', calculate.add);
app.post('/subtract', calculate.subtract);
app.post('/multiply', calculate.multiply);
app.post('/divide', calculate.divide);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
