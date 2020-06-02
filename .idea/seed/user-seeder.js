const user = require('../models/user');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/spsreview',{useUnifiedTopology:true,useNewUrlParser:true});

let users = [
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

var done = 0
for(var i=0; i < users.length; i++){
    users[i].save((error, result)=>{
        done++
        if (done === users.length){
            exit()
        }
    })}
function exit(){
    mongoose.disconnect()
}
