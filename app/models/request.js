var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var request = new Schema({
    _id: Schema.ObjectId,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    date: Date,
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'product'}]  
});

module.exports = mongoose.model('request', request);