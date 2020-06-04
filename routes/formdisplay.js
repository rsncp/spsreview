var express = require('express');
var router = express.Router();
let db = require('../dbconfig/db-connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('formdisplay');
  
});

router.post('/', function(req, res, next) {

  let name=req.body.name;
  let telegramId=req.body.telegramid;
  let facebookId=req.body.facebookid;
  let linkedIn=req.body.ldid;
  let qualification=req.body.qualification;
  let dateOfBirth=req.body.dob;
  let contactNo= req.body.contact_no;
  let alternativeNo=req.body.alt_contact_no;
  let gender=req.body.gender;
  let status=req.body.status;
  let email=req.body.email;
  let address=req.body.address;
  let uploadFile=req.body.uploadfile;
  let tellUs=req.body.tellus;


  db.get().collection('user').insertOne({

    name:name,
    telegramid:telegramId,
    facebookid:facebookId,
    linkedinid:linkedIn,
    qualification:qualification,
    dob:dateOfBirth,
    contact_no: contactNo,
    alt_contact_no:alternativeNo,
    gender:gender,
    status:status,
    email:email,
    address:address,
    uploadfile:uploadFile,
    tellus:tellUs



  } ,function (err,user) {
   if (err){
     console.log('User data insertion failed');
   }else {
     console.log('User data inserted');
     res.redirect('/admin')
   }
  });
});



module.exports = router;
