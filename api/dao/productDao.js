var Product = require("../models/product");

module.exports = {
  fetchProducts: (req, res) => {
      var query = { 
        "marketId": req.params.marketCode ,
        "brandCode": req.params.brandCode,
        "productId": { $regex : req.params.searchCode }
      };
    Product.find(query)
    .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  }
};
