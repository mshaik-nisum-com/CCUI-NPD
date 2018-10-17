var mongoose = require("mongoose");

var productSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    productName: { type: String, required: true, unique: true },
    size: { type: Number },
    color: { type: String},
    marketCode: { type: Number },
    brandCode: { type: String }
  },
  {
    timeStamp: true
  }
);

module.exports = mongoose.model("Product", productSchema);
