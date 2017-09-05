var express             = require('express');
var router              = express.Router();
var productController   = require('../controllers/MCproduct.js');
//------------------------------------------------------------------------------------------------------------------------------------------------------------
router.route('/product')
    .post(doPost)
    .get(doGet)
    .put(doPut)
    .delete(doDelete);

module.exports = router;
//------------------------------------------------------------------------------------------------------------------------------------------------------------
function doPost(req, res)
{
    var name        = req.body.name;
    var cost        = req.body.cost;
    var description = req.body.description;
    var subProducts = req.body.subProducts;

    productController.create(name, cost, description, subProducts, function (err, product){
        if(err)
            res.status(500).jsonp(err);
        else
            res.status(200).jsonp(product);
    });
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------
function doGet(req, res)
{
    productController.listAll(function(err, productList){
        if(err)
            res.status(500).jsonp(err);
        else
            res.status(200).jsonp(productList);
    });
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------
function doPut(req, res)
{
    var id      = req.param.id;
    var product = req.body;
    
    productController.update(id, product, function (err, updateRes){
        if(err)
            res.status(500).jsonp(err);
        else
            res.status(200).jsonp(updateRes);
    });
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------
function doDelete(req, res){
    var id      = req.param.id;
    var product = req.body;
    
    productController.remove(id, function (err, removeRes){
        if(err)
            res.status(500).jsonp(err);
        else
            res.status(200).jsonp(removeRes);
    });
}