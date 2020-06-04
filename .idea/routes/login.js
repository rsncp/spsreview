var express = require('express');
var router = express.Router();
let dbconfig = require('../dbconfig/db-connect');
let csrf = require('csurf');
let bcrypt = require('bcrypt-nodejs');
let passport = require('passport')


let csrfProtection = csrf();
router.use(csrfProtection);

router.get('/admin', isLoggedIn, function (req,res) {
  res.render('admin');
});



router.get('/logout',isLoggedIn, function (req, res, next) {
  req.logout();
  res.redirect('/login');
});
router.use('/',notLoggedIn, function (req, res,next) {
  next();
});

router.post('/',function (req,res,next) {
  let email='admin@admmin';
  let password='admin';
  dbconfig.get().collection('admin').insertOne({email:email,password:password},function (err,user) {
    if (err){
      console.log(err+'error found..............');
    }else{
      console.log(user+'added to database');
    }
  });
});

router.get('/',function (req,res) {
  let messages = req.flash('error');
  res.render('login',{csrfToken:req.csrfToken(),messages:messages,hasError:messages.length > 0});
});
router.post('/logIn', passport.authenticate('local.logIn', {
  successRedirect:'/admin',
  failureRedirect:'/login',
  failureFlash:true
}));


function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/admin');
}
function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}



module.exports = router;
