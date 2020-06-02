var express = require('express');
var router = express.Router();
var user = require('../models/user');
var dbConnect=require('../dbconfig/db-connect');

/* GET home page. */
router.get('/', function(req, res, next) {
    dbConnect.get().collection('user').find().toArray(function (err, docs) {
        res.render('index', { title: 'spsreview', users: docs});
  });
});

module.exports = router;
