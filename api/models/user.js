var mongoose = require("mongoose");
var Cryptr = require("cryptr");
var cryptr = new Cryptr(process.env.CRYPTR_KEY);

var userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roleId:{type:Number,required:true},
    marketId:{type:Number, required:true}
  },
  {
    timeStamp: true
  }
);

userSchema.methods.isValidPassword = function(password) {
  return cryptr.decrypt(this.password) === password;
};

module.exports = mongoose.model("User", userSchema);
