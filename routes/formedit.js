var express = require('express');
var router = express.Router()
let objectId=require('mongodb').ObjectId;
db=require('../dbconfig/db-connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('formedit');
  
});

/*
router.post('/', function(req, res, next) {
  res.render('formedit');
});
*/

router.post('/delete', function(req, res, next) {

  let id=req.body.id;

  console.log(id);

  db.get().collection('user').deleteOne({_id:objectId(id)},function (err,result) {

    if (err) {
      console.log('error' + err)
    } else {
      // console.log('displayed' + docs);

      res.send(true);

    }

  });
});

module.exports = router;
