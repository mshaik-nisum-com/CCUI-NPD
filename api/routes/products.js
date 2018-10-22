var express = require("express");

var router = express.Router();

var productController = require("../controllers/productController");

router.get("/fetchProducts/:marketId/:brandCode/:searchCode", productController.fetchProducts);

module.exports = router;
