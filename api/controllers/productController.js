var productDao = require("../dao/productDao");

module.exports = {
  fetchProducts: (req, res) => {
    productDao.fetchProducts(req, res);
  }
};
