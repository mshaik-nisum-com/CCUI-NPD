const { google } = require('googleapis');
const plus = google.plus('v1');
const fs = require('fs');
const TOKEN_PATH = 'D:/token.json';


module.exports = {
    generateOauthLoginUrl: function (scopes, oauth2Client) {
            const authorizeUrl = oauth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: scopes.join(' '),
            });
        //console.log(authorizeUrl);
        return new Promise(function (resolve) {
            resolve(authorizeUrl);
        });
    },

    retrieveUserInfo: async function (client) {
        // retrieve user profile
        try {
            const res = await plus.people.get({ userId: 'me', auth: client });
            return new Promise(function (resolve) {
                resolve(JSON.stringify(Object.assign(res.data, client.credentials)));
            }); 
        } catch (err) {
            console.error(err);
        }
    },

    writeGoogleResToFile: function (result) {
        return new Promise(function (resolve, reject) {
            fs.writeFile(TOKEN_PATH, JSON.stringify(result), (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve('Token stored to', TOKEN_PATH);
                }
            });
        });
    },

    removeGoogleDataFromRes: function (result) {
        delete result.kind;
        delete result.etag;
        delete result.image;
        delete result.objectType;
        delete result.id;
        delete result.name;
        delete result.url;
        delete result.isPlusUser;
        delete result.scope;
        delete result.verified;
        delete result.circledByCount;
        delete result.access_token;
        delete result.refresh_token;
        delete result.id_token;
        delete result.token_type;
        delete result.displayName;
        delete result.expiry_date;
    }
}