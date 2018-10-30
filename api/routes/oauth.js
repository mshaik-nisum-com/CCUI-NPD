var express = require('express')
var router = express.Router();
var oauthController = require('../controllers/oauthController');

router.get('/getOAuthLoginUrl', oauthController.getOAuthLoginUrl);
router.get('/logout', oauthController.logout);
router.get('/oauthcallback', oauthController.oauthcallback);


module.exports = router