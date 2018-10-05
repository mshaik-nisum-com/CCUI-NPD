var express = require("express");

var router = express.Router();

var marketController = require("../controllers/marketController");

router.get("/marketList", marketController.marketList);

router.get("/fetchMarkets/:marketId", marketController.fetchMarkets);

//router.post("/addMarkets", marketController.addMarkets);

module.exports = router;
