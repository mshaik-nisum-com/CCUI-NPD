var mongoose = require("mongoose");

var component_role_mappingSchema = new mongoose.Schema({
  roleId: { type: Number },
  componentId: { type: Number },
  componentName: { type: String, required : false },
  compRoleId:{type:Number},
  isShow:{type:Boolean},
  isHide:{type:Boolean},
  isEnabled:{type:Boolean},
  isDisabled:{type:Boolean}
});

module.exports = mongoose.model("Componentrolemap", component_role_mappingSchema);