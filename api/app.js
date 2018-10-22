var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const session = require("cookie-session");
var fs = require("fs");
require("dotenv").config();
var logger = require("morgan");
var cors = require("cors");

var constant = require("./constants/constants");
require(constant.DATASOURCE);

var authMiddleware = require(constant.MIDDLEWAREPATH);
var indexRouter = require(constant.INDEXROUTER);
var usersRouter = require(constant.USERROUTER);
var marketRouter = require(constant.MARKETROUTER);
var authRouter = require(constant.AUTHROUTER);
var productRouter = require(constant.PRODUCTROUTER);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

//session implementation
app.use(
  session({
    secret: process.env.CRYPTR_KEY
  })
);

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + constant.LOGS, {
  flags: "a"
});
// setup the logger
app.use(logger("combined", { stream: accessLogStream }));

//app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//Enabling cross origin
app.use(cors());

app.use(authMiddleware);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use(constant.MARKETS, marketRouter); 
app.use(constant.AUTHPATH, authRouter);
app.use(constant.PRODUCTS,productRouter)

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
