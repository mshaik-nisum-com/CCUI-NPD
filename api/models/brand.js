var mongoose = require("mongoose");
var brandsSchema = new mongoose.Schema({
    brandId:{type: String },
    brandName: { type: String, required: true },
    brandDesc: { type: String}
  });

  module.exports=mongoose.model("Brand",brandsSchema);