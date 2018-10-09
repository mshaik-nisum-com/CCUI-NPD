var User = require("../models/user");
var jwt = require("jsonwebtoken");

module.exports = {
  login: function(request, response) {
    var email = request.body.email;
    var password = request.body.password;

    User.findOne({ email }).then(function(user) {
      if (user) {
        if (user.isValidPassword(password)) {
          var token = jwt.sign(
            { name: user.name, email: user.email },
            process.env.CRYPTR_KEY
          );
          request.session.isExist = true;
          request.session.email = user.email;
          response.send({
            name: user.name,
            email: user.email,
            token
          });
        } else {
          response.json({
            errMsg: "InCorrect Password"
          });
        }
      } else {
        response.status(400).json({ errMsg: "Invalid Credentials" });
      }
    });
  },
  logout: function(request, response) {
    response.json({
      message: "User Logout Successfully"
    });
  }
};
