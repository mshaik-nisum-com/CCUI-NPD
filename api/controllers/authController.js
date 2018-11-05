var authService = require("../service/authService");
module.exports = {

    register: function (request, response) {
        authService.register(request, response);
    },

    login: function (request, response) {
        authService.login(request, response);
    },
    getAuthorities: function (request, response) {
        authService.authorities(request, response);
    },

    logout: function (request, response) {
        authService.logout(request, response);
    },

    validateMarketUser: (req, res) => {
        authService.validateMarketUser(req, res);
      }
};
