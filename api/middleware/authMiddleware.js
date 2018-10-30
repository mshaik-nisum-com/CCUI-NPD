var jwt = require('jsonwebtoken');
var constant = require("../constants/constants");

module.exports = function (request, response, next) {
    if (!(constant.AUTHPATHS.includes(request.path))) {
        var token = request.get('Authorization').split(' ')[1];
        try {
            if (true) {
                var decoded = jwt.verify(token, process.env.CRYPTR_KEY);
                next();
            } else {
                response.status(400).json({
                    errMsg: 'Invalid Token'
                })
            }
        } catch (e) {
            response.status(400).json({
                errMsg: 'Invalid Request'
            })
        }
    } else if ((request.path === '/auth/logout') || (request.path === '/oauth/logout')) {
        delete (request.session.isExist);
        next();

    } else {
    next();
  }
};
