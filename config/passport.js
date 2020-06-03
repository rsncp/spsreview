let passport = require('passport');
let LocalStrategy= require('passport-local').Strategy;
let bcrypt = require('bcrypt');
let validator = require('express-validator');
var express = require('express');
let dbconfig = require('../dbconfig/db-connect');

passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

/*
passport.use('local.signup',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    email = 'admin@admin';
    password = 'admin';

    console.log('Creating New User');

    password = bcrypt.hashSync(password,bcrypt.genSaltSync(),null);

    dbconfig.get().collection('admin').insertOne({email:email,password:password},function (err,user) {
       if (err){
           return done(err);
       }
       else{
           return done(null,email)
       }
    });

}));
*/

passport.use('local.logIn',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    email = req.body.email;
    password = req.body.password;

    dbconfig.get().collection('admin').findOne({ email:email }, function (err, user) {
        if(!err){
            if(user){
                console.log(user)
                if(bcrypt.compare(password,user.password)){
                    console.log(email+' login Success');
                    return done(null, user);
                }else {
                    console.log(email+' Wrong Password');
                    return done(null, false, {message:'Please check your Password'});
                }

            }else {
                console.log(' User does not exist');
                return done(null, false, {message:'Sorry! User does not exist'})
            }

        }else {
            console.log('Server Error');
            return done(err)
        }
    });

}));