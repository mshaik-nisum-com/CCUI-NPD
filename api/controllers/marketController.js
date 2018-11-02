var marketService = require("../service/marketService");

module.exports = {
  marketList: (req, res) => {
    marketService.marketList(req, res);
  },
  fetchBrands: (req, res) => {
    marketService.fetchBrands(req, res);
  },
  validateMarketUser: (req, res) => {
    marketService.validMarketUser(req, res);
  }
};
