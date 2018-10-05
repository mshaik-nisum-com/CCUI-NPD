var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
//var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var marketRouter = require("./routes/markets");

var mongoose = require("mongoose");

//For Connecting cloud hosted mongo db
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, autoIndex: false },
  () => {
    console.log("DB Connected...!");
  }
);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//Enabling cross origin
//app.use(cors);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/markets", marketRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
