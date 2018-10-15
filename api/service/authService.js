var authDao = require("../dao/authDao");
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
    }
};
