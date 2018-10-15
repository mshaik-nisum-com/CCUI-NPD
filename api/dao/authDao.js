var User = require("../models/user");
var jwt = require("jsonwebtoken");
var Cryptr = new require('cryptr');
var cryptr = new Cryptr(process.env.CRYPTR_KEY);

module.exports = {

    register: function(request, response) {
        var name = request.body.name;
        var email = request.body.email;
        var password = cryptr.encrypt(request.body.password);
        var roleId = request.body.roleId;
        var user = new User({
            name , email, password
        })
        User.findOne({email}).then(function (data) {
            if(data) {
                response.status(400).json({"errMsg":"Email Already Exists"});

            }else{
                user.save().then(function (user) {
                    response.json({
                        name: user.name,
                        email: user.email
                    })
                }).catch(function (error) {
                    response.status(400).json(error);
                })
            }

        })
    },

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
