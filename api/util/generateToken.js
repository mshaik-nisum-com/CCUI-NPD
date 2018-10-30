var jwt = require("jsonwebtoken");
module.exports={
    generateToken: function (userName, userEmail){
        var token = jwt.sign({ name: userName, email: userEmail }, process.env.CRYPTR_KEY);
        return token;
    }
}