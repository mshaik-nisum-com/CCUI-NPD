var marketDao = require("../dao/marketDao");

module.exports = {
  marketList: (req, res) => {
    marketDao.marketList(req, res);
  },
  fetchBrands: (req, res) => {
    marketDao.fetchBrands(req, res);
  }
};
