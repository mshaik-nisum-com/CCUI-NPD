var mongoose = require("mongoose");

var roleSchema = new mongoose.Schema({
  roleId: { type: Number },
  roleName: { type: String }
});

module.exports = mongoose.model("Role", roleSchema);