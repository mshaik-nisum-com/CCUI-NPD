var productDao = require("../dao/productDao");
module.exports = {
    fetchProducts : function(request, response) {
        productDao.fetchProducts(request, response);
    }
 };