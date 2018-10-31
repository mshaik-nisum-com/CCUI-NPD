var jwt = require('jsonwebtoken');
var constant = require("../constants/constants");
var User = require("../models/user");


module.exports = function (request, response, next) {
  if (!(constant.AUTHPATHS.includes(request.path))) {

    var token = request.get('Authorization').split(' ')[1];
    try {
      console.log("In Middle Ware ");
      var decoded = jwt.verify(token, process.env.CRYPTR_KEY);
      var email = decoded.email;
      User.findOne({ "email": email }).then(function (user) {
        if (user.isValid === true) {
          if ((request.path === '/auth/logout') || (request.path === '/oauth/logout')) {
            User.updateOne({ "email": email }, { "isValid": false }, { new: true }).then(function (data) {
              next();
            }).catch(function (error) {
              console.log(error);
              response.json(error);
            });
          } else {
            next();
          }
        } else {
          response.status(400).json({
            errMsg: "Invalid Token"
          });
        }
      }).catch(function (error) {
        response.json(error);
      });
    } catch (e) {

      response.status(400).json({
        errMsg: 'Invalid Request'
      })
    }
  } else if ((request.path === '/auth/logout') || (request.path === '/oauth/logout')) {
    var token = request.get('Authorization').split(' ')[1];

    var decoded = jwt.verify(token, process.env.CRYPTR_KEY);
    var email = decoded.email;
    User.updateOne({ "email": email }, { "isValid": false }, { new: true }).then(function (data) {
      next();
    }).catch(function (error) {
      response.json(error);
    });
    delete (request.session.isExist);

  } else {
    next();
  }
};
