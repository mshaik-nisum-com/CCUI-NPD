var User = require("../models/user");
var Component = require("../models/component");
var ComponentMap = require("../models/componentrolemapping");
var Role = require("../models/role");
var Market = require("../models/market");
var Brand = require("../models/brand");


var jwt = require("jsonwebtoken");
var Cryptr = new require('cryptr');
var cryptr = new Cryptr(process.env.CRYPTR_KEY);

module.exports = {

    register: function (request, response) {
        var name = request.body.name;
        var email = request.body.email;
        var password = cryptr.encrypt(request.body.password);
        var roleId = request.body.roleId;
        var marketIds =request.body.marketId;
        marketIds = marketIds.split(',').map(function(item) {
            return parseInt(item, 10);
        });
        var isValid=request.body.isValid;
        var user = new User({
            name, email, password, roleId,isValid
        });
        user.marketId=marketIds;

        User.findOne({ email }).then(function (data) {
            if (data) {
                response.status(400).json({ "errMsg": "Email Already Exists" });

            } else {
                user.save().then(function (user) {
                    response.json({
                        name: user.name,
                        email: user.email
                    })
                }).catch(function (error) {
                    response.status(400).json(error);
                })
            }

        });
    },
    login: function (request, response) {
        var email = request.body.email;
        var password = request.body.password;
        var marketId =parseInt(request.body.marketId);

        User.findOne({ email }).then(function (user) {
            if (user) {
                var results;

                if((user.marketId!==null)&&(user.marketId.includes(marketId))){
                    if (user.isValidPassword(password)) {
                        var token = jwt.sign(
                            { name: user.name, email: user.email },
                            process.env.CRYPTR_KEY
                        );
                        module.exports.updateUserToStartSession(user).then(function (data) {
                            results = {
                                "roleId": user.roleId,
                                name: user.name,
                                email: user.email,
                                token,
                                marketId: user.marketId
                            };
                            response.json(results);
                        }).catch(function (error) {
                            response.status(401).json(error);
                        });
    
                    } else {
                        response.json({
                            errMsg: "InCorrect Password"
                        });
                    }
                }else{
                    response.status(401).json({ errMsg: "User is not authorized for the given market" });
                }
                
            } else {
                response.status(401).json({ errMsg: "Invalid Credentials" });
            }
            return results;
        });
    },
    getAuthorities: function (request, response) {
        getComponentsMap(request, response, request.body);
    },
    logout: function (request, response) {
        response.json({
            message: "User Logout Successfully"
        });
    },

    updateUserToStartSession: function (usr) {
        return new Promise(function (resolve, reject) {
            User.updateOne({ "email": usr.email }, { isValid: true }, { new: true }).then(function (user) {
                if (user) {
                    resolve(user);
                } else {
                    reject("Update user failed.");
                }
            })
        });
    },
};

const getComponentsMap = function (request, response, results) {
    results.components = [];
    Role.findOne({ "roleId": results.roleId }).then(roleData => {
        var idOfRole = roleData.roleId;
        results.roleName = roleData.roleName;
        var componentsList;
        ComponentMap.find({ "roleId": idOfRole }).then(componentRowMapData => {
            results['componentInfo'] = componentRowMapData;
            return results;
        }).then(function (results) {
            Component.find().then(function (componentsData) {
                var componentsMap = {};
                for (let j = 0; j < componentsData.length; j++) {
                    var componentKey = componentsData[j].componentId;
                    componentsMap[componentKey] = componentsData[j]['componentName'];
                }
                for (let k = 0; k < results.componentInfo.length; k++) {
                    results.componentInfo[k].componentName = componentsMap[results.componentInfo[k].componentId];

                    componentObj = {
                        "componentId": results.componentInfo[k].componentId,
                        "componentName": results.componentInfo[k].componentName,
                        "isShow": results.componentInfo[k].isShow,
                        "isHide": results.componentInfo[k].isHide,
                        "isEnabled": results.componentInfo[k].isEnabled,
                        "isDisabled": results.componentInfo[k].isDisabled,
                    }
                    results.components.push(componentObj);
                }
                delete results.roleId;
                delete results.componentInfo;
                response.send(results);
            });
        });
    });
};


