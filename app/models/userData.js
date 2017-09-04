var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var address = new Schema({
	_id: Schema.ObjectId,
	name:  String,
	main: {
		type: String,
		number: Number,
		name: String
	},
	complement: [{
		type: String,
		number: Number,
		name: String
	}]
});

var user = new Schema({
	_id: Schema.ObjectId,
	name:  String,
	lastName: String,
	userName: String,
	password: String,
	registerDate: { type: Date, default: Date.now },
	address: [address],
	credentials: [String] // validate the identity of an user
});

module.exports = mongoose.model('user', user);