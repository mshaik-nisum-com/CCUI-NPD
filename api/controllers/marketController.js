var Market = require("../models/market");
var Brand = require("../models/brand");

module.exports = {
  marketList: (req, res) => {
    console.log("Market List");
    Market.find()
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  },

  fetchMarkets: (req, res) => {
    var query = { marketId: req.params.marketId };
    console.log("Fetch Markets");
    Market.find(query)
      .then(function(marketRes) {
        console.log("marketRes", marketRes);
        var brandIds = marketRes[0].brandId;
        Brand.find({ brandId: { $in: brandIds } }).then(function(data) {
          res.json({ marketId: req.params.marketId, data });
        });
      })
      .catch(error => {
        res.status(400).json(error);
      });
  }

  // addMarkets: (req, res) => {
  //   var market = new Market({
  //     marketName: req.body.marketName,
  //     brand: req.body.brand
  //   });
  //   market
  //     .save()
  //     .then(market => {
  //       res.json(market);
  //     })
  //     .catch(error => {
  //       res.status(400).json(error);
  //     });
  // }
};
