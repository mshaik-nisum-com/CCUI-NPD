var express = require('express')
var router = express.Router();
var authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/authorities', authController.getAuthorities);
router.get('/logout', authController.logout);
router.post('/register', authController.register);
router.post('/validateMarketUser', authController.validateMarketUser)



module.exports = router


