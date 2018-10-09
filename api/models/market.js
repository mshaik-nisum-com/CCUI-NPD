var mongoose = require("mongoose");

var marketSchema = new mongoose.Schema({
  marketId: { type: Number },
  marketName: { type: String },
  brands: [{ type: String }]
});

module.exports = mongoose.model("Market", marketSchema);
