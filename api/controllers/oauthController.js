var oauthService = require("../service/oauthService");

module.exports = {
    getOAuthLoginUrl: function (request, response) {
        oauthService.getOauthLoginUrl(response);
    },

    oauthCallBack: function (request, response) {
        oauthService.oauthCallBack(request, response);
    },

    logout: function (request, response) {
        oauthService.logout(request, response);
    }
};