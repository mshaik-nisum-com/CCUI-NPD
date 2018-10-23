var User = require("../models/user");
var Component = require("../models/component");
var ComponentMap = require("../models/componentrolemapping");
var Role = require("../models/role");
//var componentDao = require("../dao/componentsDao")
var jwt = require("jsonwebtoken");
var Cryptr = new require('cryptr');
var cryptr = new Cryptr(process.env.CRYPTR_KEY);

module.exports = {

    register:function(request, response) {
        var name = request.body.name;
        var email = request.body.email;
        var password = cryptr.encrypt(request.body.password);
        var user = new User({
        name , email, password
        })
        user.save().then(function (user) {
        response.json({
        name : user.name,
        email : user.email
        })
        }).catch(function (error) {
        response.status(400).json(error);
        })
        },
    login: function (request, response) {
        var email = request.body.email;
        var password = request.body.password;

        User.findOne({email}).then(function (user) {
            if (user) {
                var results;
                if (user.isValidPassword(password)) {
                    var token = jwt.sign(
                        {name: user.name, email: user.email},
                        process.env.CRYPTR_KEY
                    );
                    request.session.isExist = true;
                    request.session.email = user.email;

                     results = {"roleId":user.roleId, name: user.name, roleName: "", email: user.email, token, components: []};
                    getComponentsMap(request, response, results);


                } else {
                    response.json({
                        errMsg: "InCorrect Password"
                    });
                }
            } else {
                response.status(401).json({errMsg: "Invalid Credentials"});
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
    }


};

const getComponentsMap = function (request, response, results) {

    results.components = [];
    Role.findOne({"roleId": results.roleId}).then(roleData => {
        var idOfRole = roleData.roleId;
        results.roleName = roleData.roleName;
        var componentsList;
        ComponentMap.find({"roleId": idOfRole}).then(componentRowMapData => {
            results['componentInfo'] = componentRowMapData;
            return results;
        }).then(function (results) {
            Component.find().then(function (componentsData) {
              /*  return componentData;
            }).then(function (componentsData) {*/
                var componentsMap = {};
                for (let j = 0; j < componentsData.length; j++) {
                    var componentKey = componentsData[j].componentId;
                    componentsMap[componentKey] = componentsData[j]['componentName'];
                }
                for (let k = 0; k < results.componentInfo.length; k++) {
                    results.componentInfo[k].componentName = componentsMap[results.componentInfo[k].componentId];

                    componentObj = {
                        "componentId" : results.componentInfo[k].componentId,
                        "componentName" : results.componentInfo[k].componentName,
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
