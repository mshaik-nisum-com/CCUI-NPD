var express = require("express");

var router = express.Router();

var marketController = require("../controllers/marketController");

router.get("/marketList", marketController.marketList);

router.get("/fetchBrands/:marketId", marketController.fetchBrands);

router.post("/validmarkuser", marketController.validateMarketUser);

//router.post("/addMarkets", marketController.addMarkets);

module.exports = router;
