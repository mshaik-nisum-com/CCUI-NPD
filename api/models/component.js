var mongoose = require("mongoose");

var componentSchema = new mongoose.Schema({
  componentId: { type: Number , required : true},
  componentName: { type: String, required : true }
  
});

module.exports = mongoose.model("Component", componentSchema);