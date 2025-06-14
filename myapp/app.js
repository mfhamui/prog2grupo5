var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");
const db = require('./database/models')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "myapp",
  resave: false,
  saveUninitialized: true
}));
//middleware de session
app.use(function (req, res, next) {
  if (req.session.user != undefined) {
    res.locals.user = req.session.user;
  } else {
    res.locals.user = undefined;
  }

  return next();
})
// middleware de cookies para vistas
app.use(function (req, res, next) {
  if (req.cookies.recordarme != undefined && req.session.user == undefined) {
    db.User.findByPk(req.cookies.recordarme)
    .then(function(usuario){
      if(usuario){
        req.session.user = usuario;
        res.locals.user = usuario;
      }else{
        res.clearCookie('recordarme')
      }

    })
    .catch(function(error){
      return res.send(error)
    })
  }
  return next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
