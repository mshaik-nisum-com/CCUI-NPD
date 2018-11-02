var marketDao = require("../dao/marketDao");


module.exports = {
  marketList: (req, res) => {
    marketDao.marketList(req, res);
  },
  fetchBrands: (req, res) => {
    marketDao.fetchBrands(req, res);
  },
  validMarketUser: async function(req, res)  {
    console.log("In Service " + email, marketId);
    var marketId= parseInt(req.body.marketId);
    var email= req.body.email;
    var user= await marketDao.retrieveUserByEmail(email);
    if( user === undefined || user === null){
      res.status(400).send({errMsg: "No data found for the given user"}) ;
    } else if(user.marketId !== marketId){
        var wrongInfo= "Given user " + email + " is found with the Market " + user.marketId + " but not with " + marketId;
        res.status(400).send({wrongInfo: wrongInfo});
    } else if( user.marketId === marketId){
      res.redirect('/markets/fetchBrands/'+marketId);
    }
  }
};


