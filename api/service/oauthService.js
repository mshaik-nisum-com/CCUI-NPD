'use strict';
var oauthDao = require("../dao/oauthDao");

const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');

const { google } = require('googleapis');

const keyPath = path.join(__dirname, "../credentials.json");
const oauthUtility = require("../util/oauthUtilities");
const tokenGenerator = require("../util/generateToken");

/**
 * Create a new OAuth2 client with the configured keys.
 */

let keys = { redirect_uris: [''] };
if (fs.existsSync(keyPath)) {
    keys = require(keyPath).web;
}

const oauth2Client = new google.auth.OAuth2(
    keys.client_id,
    keys.client_secret,
    keys.redirect_uris[0]
);

module.exports = {

    getOauthLoginUrl: function (res) {
        google.options({ auth: oauth2Client });
        oauthUtility.generateOauthLoginUrl(keys.scopes, oauth2Client).then(function (result) {
            res.json({ loginUrl: result });
        }, function (err) {
            throw err;
        });
    },

    oauthCallBack: async function (request, response) {
        try {
            const qs = querystring.parse(url.parse(request.url).query);
            const { tokens } = await oauth2Client.getToken(qs.code);
            oauth2Client.setCredentials({
                access_token: tokens.access_token,
                refresh_token: 'STORED_REFRESH_TOKEN'
            });

            oauthUtility.retrieveUserInfo(oauth2Client).then(async function (userinfo) {
                try {
                    userinfo = JSON.parse(userinfo);

                    //Writing oauth token and user details to file
                    //oauthUtility.writeGoogleResToFile(userinfo);

                    //Remove google details from result.
                    oauthUtility.removeGoogleDataFromRes(userinfo);

                    var email = userinfo.emails[0].value;
                    let user = await oauthDao.getUserByEmailId(email);
                    if (user) {
                        // Formatting result object and append the token to response
                        var tokenStr = tokenGenerator.generateToken(user.name, user.email);
                        // Updating user to start session
                        oauthDao.updateUserToStartSession(user);
                        var userDetails = { name: user.name, roleId: user.roleId, emails: email, marketId: user.marketId, token: tokenStr };
                        userinfo = Object.assign(userinfo, userDetails);

                        //send formatted result object
                        response.json({ userinfo });
                    }
                } catch (err) {
                    console.log(err);
                    response.status(400).json(err);
                }
            }).catch(err => {
                console.log(err);
                response.status(400).json(err);
           });

        } catch (err) {
            console.log(err);
            response.status(400).send(JSON.stringify(err));
        }
    },
    
    logout: function (request, response) {
        response.json({
            message: "User Logout Successfully"
        });
    }
};
