var Product = require("../models/product");

module.exports = {
  fetchProducts: (req, res) => {
    if (req.params.searchCode.length > 9){
      console.log("Searching for product");
      var query = { 
        "marketId": req.params.marketCode ,
        "brandCode": req.params.brandCode,
        "productId": req.params.searchCode 
      };
    }
    else{
      console.log("Searching for sku");
      var query = { 
        "marketId": req.params.marketCode ,
        "brandCode": req.params.brandCode,
        "sku": req.params.searchCode
      };
    }
    Product.find(query)
    .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  }
};
