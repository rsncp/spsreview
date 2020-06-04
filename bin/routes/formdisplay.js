var express = require('express');
var router = express.Router();
let db = require('../dbconfig/db-connect');
const {isEmpty}=require('../config/isEmpty');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('formdisplay');
  
});



/*router.post('/upload', function(req, res) {

  let filename = '';

  if (!isEmpty(req.files)) {
    let file = req.files.uploadfile;
    filename = file.name;
    let uploadDir = '/Uploads/';

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    file.mv(uploadDir + filename, (error) => {
      if (error){
        throw error;
      }else{
        console.log('File Uploaded')
      }
    });
  }
});*/


router.post('/', function(req, res, next) {


  let filename = '';

  if (!isEmpty(req.files)) {
    let file = req.files.uploadfile;
     filename = file.name;
    let uploadDir = './public/Uploads/';

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    file.mv(uploadDir + filename, (error) => {
      if (error){
        throw error;
      }else{
        console.log('File Uploaded')
      }
    });
  }

  let name=req.body.name;
  let telegramId=req.body.telegramid;
  let facebookId=req.body.facebookid;
  let linkedIn=req.body.linkedinid;
  let qualification=req.body.qualification;
  let dateOfBirth=req.body.dob;
  let contactNo= req.body.contact_no;
  let alternativeNo=req.body.alt_contact_no;
  let gender=req.body.gender;
  let status=req.body.status;
  let email=req.body.email;
  let address=req.body.address;
  let uploadFile=`/Uploads/${filename}`;
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



  }, function (err,user) {
    if (err){
      console.log('User data insertion failed');
    }else {
      console.log('User data inserted');
      res.redirect('/admin')
    }
  });
});

module.exports = router;
