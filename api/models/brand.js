var mongoose = require("mongoose");
var brandsSchema = new mongoose.Schema({
  brandCode: { type: String },
  brandShortName: { type: String },
  iconUrl: { type: String },
  brandName: { type: String },
  brandDesc: { type: String }
});

module.exports = mongoose.model("Brand", brandsSchema);
