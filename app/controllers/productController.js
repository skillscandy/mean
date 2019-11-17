'use strict';

var Product = require('../models/productModel.js');

exports.getProductDetailsM = function(req, res) {
  Product.getProductDetails(req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};



