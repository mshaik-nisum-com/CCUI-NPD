var authDao = require("../dao/authDao");
module.exports = {
  login: function(request, response) {
    authDao.login(request, response);
  },

  logout: function(request, response) {
    authDao.logout(request, response);
  }
};
