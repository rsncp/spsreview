var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    imagePath: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    place: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('user',schema);