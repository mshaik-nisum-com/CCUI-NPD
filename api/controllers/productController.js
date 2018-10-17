var productService = require("../service/productService");

module.exports = {
  fetchProducts: (req, res) => {
    productService.fetchProducts(req, res);
  }
};
