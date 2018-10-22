var mongoose = require("mongoose");

var componentRoleMappingSchema = new mongoose.Schema({
  roleId: { type: Number },
  componentId: { type: Number },
  componentName: { type: String, required : false },
  compRoleId:{type:Number},
  isShow:{type:Boolean},
  isHide:{type:Boolean},
  isEnabled:{type:Boolean},
  isDisabled:{type:Boolean}
});

module.exports = mongoose.model("Componentrolemap", componentRoleMappingSchema);