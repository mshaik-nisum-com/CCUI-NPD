var Market = require("../models/market");
var Brand = require("../models/brand");
var User = require("../models/user");

module.exports = {
  marketList: (req, res) => {
    Market.find()
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  },

  fetchBrands: (req, res) => {
    var query = { marketId: req.params.marketId };
    Market.find(query)
      .then(function(marketRes) {
        var brandIds = marketRes[0].brands;
        Brand.find({ brandCode: { $in: brandIds } }).then(function(data) {
          res.json({ data });
        });
      })
      .catch(error => {
        res.status(400).json(error);
      });
  },

  retrieveUserByEmail: async function(email){
    var user= undefined;
    user= await User.findOne({email: email})
                    .then(function(data){
                      return data;
                    })
                    .catch(function(error){
                      console.log(error); 
                    });
    return user;
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
