var express = require('express');
var router = express.Router();
let db = require('../dbconfig/db-connect');

/* GET home page. */


router.get('/',function (req,res,next) {
  db.get().collection('user').find().toArray(function (err,docs) {
    if (err){
      console.log(err +'error found')
    }else {
       console.log('checked\n'+docs);
       res.render('index',{data:docs});
    }
  });
});

module.exports = router;
