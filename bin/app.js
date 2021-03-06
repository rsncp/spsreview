var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let db = require('./dbconfig/db-connect');
let session = require('express-session');
let passport = require('passport');
let flash = require('connect-flash');
let bodyParser = require('body-parser');
let fileUpload=require('express-fileupload');

let MongoStore = require('connect-mongo')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let adminRouter=require('./routes/admin');
let loginRouter=require('./routes/login');
let formdisplayRouter=require('./routes/formdisplay');
let formeditRouter=require('./routes/formedit');

var app = express();

require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret:'mysecret',
  resave:false,
  saveUninitialized:false,
  cookie: { maxAge: 180 * 60 * 1000 }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(fileUpload());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req,res,next) {
  res.locals.login=req.isAuthenticated();
  next();
});

app.use(function(req, res,next){
  res.locals.session = req.session;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin',adminRouter);
app.use('/login',loginRouter);
app.use('/formdisplay',formdisplayRouter);
app.use('/formedit',formeditRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

db.connect(function (error) {

  if (error){
    console.log('Unable to connect database');
    process.exit(1);
  } else {
    console.log('sps review Database connecetd successfully...');
  }

});

module.exports = app;
