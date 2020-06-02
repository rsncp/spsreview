const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    imagePath: {
        type: String,
        required: true,
        trim:true
    },

    name: {
        type: String,
        required: true,
        trim:true
    },

    place: {
        type: String,
        required: true,
        trim:true
    },

    gender: {
        type: String,
        required: true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },

});

module.exports = mongoose.model('user',schema);