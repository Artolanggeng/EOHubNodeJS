var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Add by Ignat
var argv = require('minimist')(process.argv.slice(2));

var index = require('./routes/index');

// Add by Ignat
var user    = require('./routes/users');
var member  = require('./routes/member');
var media  = require('./routes/media');
var product  = require('./routes/product');
var brand  = require('./routes/brand');

var mysql = require('mysql2');
var conn = require('express-myconnection');
var FixValue = require('./utils/fixvalue.json');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add by Ignat
// Connect to MySQL
app.use(conn(mysql,
  {
    host      : FixValue.Database.strHost,
    user      : FixValue.Database.strUser,
	  password  : FixValue.Database.strPassword,
    database  : FixValue.Database.strDatabase,
	  port      : FixValue.Database.strPort
  }, 'request'));

// Connect to routes
app.use('/', index);
app.use('/users', user);
app.use('/members', member);
app.use('/media', media);
app.use('/products', product);
app.use('/brands', brand);

app.use(FixValue.RouterAPIV1.users, user);
app.use(FixValue.RouterAPIV1.members, member);
app.use(FixValue.RouterAPIV1.media, media);
app.use(FixValue.RouterAPIV1.product, product);
app.use(FixValue.RouterAPIV1.brand, brand);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
