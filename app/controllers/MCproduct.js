var product = require('./../models/productData.js');
//----------------------------------------------------------------------------------------------------------------------------
exports.create = function (name, cost, description, subProducts, callback)
{
	if(!name || !cost)
		return callback({message: ""});
	else
		var product = new productSchema({
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
    product.find({}, callback ? callback : function(err, productList){
        if(err)
            return null;
        else
            return productList;
    });
}
//----------------------------------------------------------------------------------------------------------------------------
exports.getById = function (id, callback)
{
    product.find({_id: id}, callback ? callback : function(err, prod){
        if(err)
            return null;
        else
            return prod;
    });
}
//----------------------------------------------------------------------------------------------------------------------------
exports.update = function (id, newestRow, callback)
{
    product.update({_id: id}, { $set: newestRow}, callback ? callback : function(err, updateRes){
        if(err)
            return null;
        else
            return updateRes;
    });
}
//----------------------------------------------------------------------------------------------------------------------------
exports.remove = function (id, callback)
{
    product.remove({_id: id}, { $set: newestRow}, callback ? callback : function(err, removeRes){
        if(err)
            return null;
        else
            return removeRes;
    });
}
//----------------------------------------------------------------------------------------------------------------------------
