var authDao = require("../dao/authDao");
var oauthDao= require("../dao/oauthDao");
module.exports = {

    register : function(request, response) {
        authDao.register(request, response);
    },

    login: function(request, response) {
         authDao.login(request, response);
    },
    authorities: function(request, response) {
        authDao.getAuthorities(request, response);
    },

    logout: function(request, response) {
        authDao.logout(request, response);
    },
    
    validateMarketUser: function(req, res)  {
      var marketId= parseInt(req.body.marketId);
      var email= req.body.email;
      oauthDao.getUserByEmailId(email).then(function (user){
            if(user.marketId.includes(marketId)){
                res.redirect('/markets/fetchBrands/'+marketId);
            } else{
                var errInfo= "user is not authorized for the given market";
                res.status(401).send({errInfo: errInfo});
            }
        }).catch(errMsg => {
            res.status(400).json({errMsg});
       });
    }
};
