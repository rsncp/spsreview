
var express = require('express');
var router = express.Router();
let csrf = require('csurf');
let bcrypt = require('bcrypt-nodejs');
let passport = require('passport');

let dbconfig = require('../dbconfig/db-connect');

let csrfProtection = csrf();
router.use(csrfProtection);

/*router.get('/admin', isLoggedIn, function (req,res) {
  res.render('admin');
});*/

router.get('/admin', isLoggedIn,function(req, res, next) {
  dbconfig.get().collection('user').find().toArray(function (err,docs) {
    if (err){
      console.log(err+'Could not find');
    }else {
      res.render('admin',{datas:docs});
    }
  })
});


router.get('/logout',isLoggedIn, function (req, res, next) {
  req.logout();
  res.redirect('/');
});
router.use('/',notLoggedIn, function (req, res,next) {
  next();
});

router.get('/signup',function (req,res) {
  let messages = req.flash('error');
  res.render('signup',{csrfToken:req.csrfToken(),messages:messages,hasError:messages.length > 0});
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect:'/users/admin',
  failureRedirect:'/signup',
  failureFlash:true
}));


router.get('/signin',function (req,res) {
  let messages = req.flash('error');
  res.render('signin',{csrfToken:req.csrfToken(),messages:messages,hasError:messages.length > 0});
});
router.post('/signin', passport.authenticate('local.signin', {
  successRedirect:'/users/admin',
  failureRedirect:'/signin',
  failureFlash:true
}));


function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}
function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}

module.exports = router;