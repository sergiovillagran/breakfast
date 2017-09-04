var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema({
	_id: Schema.ObjectId
	name:  String,
	cost: Number,
	description: String,
	subProducts: [{type: mongoose.Schema.Types.ObjectId, ref: 'product'}]
}

module.exports = mongoose.model('product', product);
