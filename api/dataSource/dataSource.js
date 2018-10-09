const mongoose = require("mongoose");

//For Connecting cloud hosted mongo db
module.exports = mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, autoIndex: false },
  () => {
    console.log("DB Connected...!");
  }
);
