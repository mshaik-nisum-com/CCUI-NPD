var jwt = require("jsonwebtoken");
var User = require("../models/user");


module.exports = function (request, response, next) {
  if (!(request.path === "/auth/login" ||
    request.path === "/auth/register" ||
    request.path === "/auth/logout" ||
    request.path === "/markets/marketList")) {
    var token = request.get("Authorization").split(" ")[1];

    try {
      var decoded = jwt.verify(token, process.env.CRYPTR_KEY);
      var email = decoded.email;
      User.findOne({ "email": email }).then(function (user) {
        if (user.isValid === true) {
          next();
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
        errMsg: "Invalid Request"
      });
    }
  } else if (request.path === "/auth/logout") {
    delete request.session.isExist;
    next();
  } else {
    next();
  }
};
