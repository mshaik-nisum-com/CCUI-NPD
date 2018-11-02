var marketService = require("../service/marketService");

module.exports = {
  marketList: (req, res) => {
    marketService.marketList(req, res);
  },
  fetchBrands: (req, res) => {
    marketService.fetchBrands(req, res);
  }
};
