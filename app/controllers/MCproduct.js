var Product = require('./../models/productData.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;
//----------------------------------------------------------------------------------------------------------------------------
exports.create = function (name, cost, description, subProducts, callback)
{
	if(!name || !cost)
		return callback({message: ""});
	else
		var product = new Product({
            _id: new ObjectId(),
            name:  name,
			cost: cost,
			description: description,
			subProducts: subProducts
		}).save(callback ? callback : function(err, prod){
			if(err)
				return null;
			else
				return product;
		});
}
//----------------------------------------------------------------------------------------------------------------------------
exports.listAll = function (callback)
{
    Product.find({}, callback ? callback : function(err, productList){
        if(err)
            return null;
        else
            return productList;
    });
}
//----------------------------------------------------------------------------------------------------------------------------
exports.getById = function (id, callback)
{
    Product.findById(id, callback ? callback : function(err, prod){
        if(err)
            return null;
        else
            return prod;
    });
}
//----------------------------------------------------------------------------------------------------------------------------
exports.update = function (id, newestRow, callback)
{
    Product.update({_id: id}, { $set: newestRow}, callback ? callback : function(err, updateRes){
        if(err)
            return null;
        else
            return updateRes;
    });
}
//----------------------------------------------------------------------------------------------------------------------------
exports.remove = function (id, callback)
{
    Product.remove({_id: id}, callback ? callback : function(err, removeRes){
        if(err)
            return null;
        else
            return removeRes;
    });
}
//----------------------------------------------------------------------------------------------------------------------------
