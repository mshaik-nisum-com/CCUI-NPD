var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var fs = require("fs");
var logger = require("morgan");
require("dotenv").config();
require("./dataSource/dataSource");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var marketRouter = require("./routes/markets");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + "/access.log", {
  flags: "a"
});
// setup the logger
app.use(logger("combined", { stream: accessLogStream }));
logger//app.use(logger("dev"));
.app
  .use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//Enabling cross origin
app.use(cors());

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
