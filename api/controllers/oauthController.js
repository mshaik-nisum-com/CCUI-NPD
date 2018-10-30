var oauthService = require("../service/oauthService");

module.exports = {
    getOAuthLoginUrl: function (request, response) {
        oauthService.getOauthLoginUrl(response);
    },

    oauthcallback: function (request, response) {
        oauthService.oauthcallback(request, response);
    },

    logout: function (request, response) {
        oauthService.logout(request, response);
    }
};