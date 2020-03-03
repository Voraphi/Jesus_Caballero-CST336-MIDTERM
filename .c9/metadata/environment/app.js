{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":41,"column":0},"action":"insert","lines":["var createError = require('http-errors');","var express = require('express');","var path = require('path');","var cookieParser = require('cookie-parser');","var logger = require('morgan');","","var indexRouter = require('./routes/index');","var usersRouter = require('./routes/users');","","var app = express();","","// view engine setup","app.set('views', path.join(__dirname, 'views'));","app.set('view engine', 'hbs');","","app.use(logger('dev'));","app.use(express.json());","app.use(express.urlencoded({ extended: false }));","app.use(cookieParser());","app.use(express.static(path.join(__dirname, 'public')));","","app.use('/', indexRouter);","app.use('/users', usersRouter);","","// catch 404 and forward to error handler","app.use(function(req, res, next) {","  next(createError(404));","});","","// error handler","app.use(function(err, req, res, next) {","  // set locals, only providing error in development","  res.locals.message = err.message;","  res.locals.error = req.app.get('env') === 'development' ? err : {};","","  // render the error page","  res.status(err.status || 500);","  res.render('error');","});","","module.exports = app;",""],"id":1}]]},"ace":{"folds":[],"scrolltop":256,"scrollleft":0,"selection":{"start":{"row":15,"column":8},"end":{"row":15,"column":8},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":10,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1583201703677,"hash":"b543327d59021ff89e0681019e43f27e56a2a169"}