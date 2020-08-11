var mongoose = require('mongoose');
var obj = new mongoose.Schema({
    Firstname: { type: String },
    Lastname: { type: String },
    Email: { type: String },
    Password: { type: String },
    Date: { type: String },
    Phonenumber: { type: String },
});
module.exports = mongoose.model('RegisterCollection', obj)
