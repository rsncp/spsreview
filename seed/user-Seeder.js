var user = require('../models/user');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/spsreview');

var users = [
    new user({
    imagePath: '../images/spss.jpg',
    name: 'Ajmal',
    place:'calicut',
    gender:'male',
    email:'mohajmal@gmail.com'
  }),
  new user({
    imagePath: '../images/spss.jpg',
    name: 'Ajmal',
    place:'calicut',
    gender:'male',
    email:'mohajmal@gmail.com'
  }),
  new user({
    imagePath: '../images/spss.jpg',
    name: 'Ajmal',
    place:'calicut',
    gender:'male',
    email:'mohajmal@gmail.com'
  }),
  new user({
    imagePath: '../images/spss.jpg',
    name: 'Ajmal',
    place:'calicut',
    gender:'male',
    email:'mohajmal@gmail.com'
  }),
];

var done = 0;
for(var i=0;i<users.length; i++){
    users[i].save(function(err, result){ 
        done++;
        if(done === users.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}


