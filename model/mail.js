
var mongoose = require('mongoose');
var obj = new mongoose.Schema({
    To: { type: String },
    Subject: { type: String },
    Text: { type: String },
    Date: { type: String },
    status: { type: String }
});
module.exports = mongoose.model('MailCollection', obj)