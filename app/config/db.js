var mongoose = require('mongoose');
exports.connect = function (uri){
    mongoose.connect(uri);
}
//Comment