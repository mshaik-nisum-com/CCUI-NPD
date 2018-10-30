'use strict';

var User = require("../models/user");

module.exports = {
    getUserByEmailId: function (email) {
        
        return new Promise(function (resolve, reject) {
             User.findOne({ email }, function (err, user) {
                if (err) {
                    reject(err);
                }
                if (user) {
                    resolve(user);
                } else {
                    reject( "No user found with email " + email);
                }
         });
      });
    }
}